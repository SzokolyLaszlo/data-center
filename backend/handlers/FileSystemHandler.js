const Multer = require('multer');
const Fs = require('fs');
const Zip = require('zip-a-folder');
const DateFormat = require('../utils/DateFormat');
const UdHandler = require('./UserDocumentHandler');


const rootFolder = "./documents";
const tempFolder = "./temp/";


const storage = Multer.diskStorage({

  destination: function (req, file, callback) {

    const path = rootFolder + req.query.tablePath + req.query.folderPath;
    callback(null, path);
  },

  filename: function(req, file, callback) {

    file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8");
    const newFileName = req.query.newFileName;

    callback(null, (newFileName === undefined ? file.originalname : newFileName));
  }
});

const upload = Multer({

  storage: storage,
  limits: {

    fileSize: 1000000000
  }
});



async function handleFileOperation(req, res, tablePath) {

  const operation = req.query.operation;
  let fileName = req.query.fileName;
  
  const userId = parseInt(req.query.userId);

  switch (operation) {

    case "0":

      await getAllFiles(res, getDocument(tablePath, fileName));
      break;

    case "1":
    case "2":

      downloadDocument(res, getDocument(tablePath, fileName), fileName);
      break;

    case "3":

      makeFolder(tablePath, fileName);
      await UdHandler.insertUserDocument(userId, rootFolder + tablePath + fileName);

      res.status(200).send("Folder succesfully made!");
      break;

    case "4":

      const newFileName = req.query.newFileName
      renameFile(tablePath, fileName, newFileName);
      await UdHandler.updateUserDocument(rootFolder + tablePath + fileName, rootFolder + tablePath + newFileName);

      res.status(200).send("File succesfully renamed!");
      break;

    case "5":

      deleteFile(getDocument(tablePath, fileName));
      await UdHandler.removeUserDocument(rootFolder + tablePath + fileName);

      res.status(200).send("File succesfully deleted!");
      break;
  }
}



function getDocument(tablePath, fileName) {

  fileName = fileName === undefined ? "" : fileName;

  const path = rootFolder + tablePath + fileName;

  return path;
}

async function getAllFiles(res, path) {

  const folderArray = [];
  const fileArray = [];

  const files = Fs.readdirSync(path);

  files.sort((a, b) => {

    return a.localeCompare(b);
  });
  
  for (const file of files) {
    
    const isFileAFolder = isFolder(path + file);

    const stats = Fs.statSync(path + file);
    const modifiedDate = DateFormat.getStandardDateFormat(stats.mtime);

    const modifier = await UdHandler.getModifier(path + file);

    const fileDataArray = [file, isFileAFolder, modifiedDate, modifier];

    if (isFileAFolder) {

      folderArray.push(fileDataArray);
    }
    else {

      fileArray.push(fileDataArray);
    }
  }

  const response = [...folderArray, ...fileArray];

  res.status(200).send(response);
}

function isFolder(path) {

  let isFolder = false;

  const stats = Fs.statSync(path);
  isFolder = stats.isDirectory();

  return isFolder;
}

async function uploadDocument(req, res) {

  if (!req.file) {

    res.status(400).send('No file uploaded.');
  }
  else {

    const tablePath = req.query.tablePath;
    const folderPath = req.query.folderPath;
    const fileName = req.file.filename;

    const userId = parseInt(req.query.userId);

    await UdHandler.insertUserDocument(userId, rootFolder + tablePath + folderPath + fileName);

    res.status(200).send(`File uploaded successfully: ${fileName}`);
  }
}

function downloadDocument(res, path, fileName) {

  const downloader = async (path) => {

    res.status(200).download(path);
  }

  if ( isFolder(path) ) {

    const destinationPath = tempFolder + fileName + ".zip";

    zipFile(path, destinationPath, downloader);
  }
  else {

    downloader(path);
  }
}

async function zipFile(path, destinationPath, downloader) {

  deleteFile(destinationPath);

  const zip = Zip.zip;
  await zip(path, destinationPath);

  await downloader(destinationPath);

  setTimeout(() => {

    deleteFile(destinationPath);
  },
    3000
  );
}

function makeFolder(tablePath, folderName) {

  const path = rootFolder + tablePath + folderName;

  if (folderName.trim() !== "") {

    deleteFile(path);
    Fs.mkdirSync(path);
  }
}

function renameFile(tablePath, fileName, newFileName) {

  const path = rootFolder + tablePath;

  if (newFileName.trim() !== "") {

    deleteFile(path + newFileName);
    Fs.renameSync(path + fileName, path + newFileName);
  }
}

function deleteFile(path) {

  if (Fs.existsSync(path)) {

    if (isFolder(path)) {

      const subFiles = Fs.readdirSync(path);

      if (subFiles.length !== 0) {

        for (let i = 0; i < subFiles.length; i++) {

          deleteFile(path + "/" + subFiles[i]);
        }
      }

      Fs.rmdirSync(path);
    }
    else {

      Fs.unlinkSync(path);
    }
  }
}

exports.upload = upload;
exports.uploadDocument = uploadDocument;
exports.handleFileOperation = handleFileOperation;