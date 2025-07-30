import '../styles/DocumentTable.css'
import UserInput from './UserInput'
import Table from './Table'
import Folder from '../components/image_components/Folder'
import File from '../components/image_components/File'
import Text from '../components/image_components/Text'
import Image from '../components/image_components/Image'
import Pdf from '../components/image_components/Pdf'
import Word from '../components/image_components/Word'
import Excel from '../components/image_components/Excel'
import Powerpoint from '../components/image_components/Powerpoint'
import Video from '../components/image_components/Video'
import Zip from '../components/image_components/Zip'
import Link from '../components/Link'
import ButtonWithIcon from './ButtonWithIcon'
import Download from './image_components/Download'
import Rename from './image_components/Rename'
import Delete from './image_components/Delete'
import { useCallback, useEffect, useState } from 'react'
import Axios from 'axios'

function DocumentTable({
    path,
    
    url,
    port,

    dataGetter,

    userId,
    isAdmin,

    currentFileData,
    fileDataSetter,

    isUpload,
    currentFolderPath,
    folderPathSetter,

    newFolderSetterSetter,

    isDelete,
    deleteWindowSetter,
    deleteButtonSetterSetter,
    deleteFileSetter,

    checkForExistingFileSetter,

    isReplace,
    replaceFileSetter,
    replaceIsFolderSetter,
    replaceButtonSetterSetter,
    replaceWindowSetter
}) {



    const [isNewFolder, setIsNewFolder] = useState(false)
    const [isRename, setIsRename] = useState(false)

    const getParamPath = useCallback((path, operation, currentFolderPath, fileName) => {

        const paramPath = (

            path +
            "/?operation=" + operation +
            "&fileName=" + currentFolderPath + (fileName === undefined ? "" : fileName) +
            "&userId=" + userId
        )

        return paramPath
    },
        [userId]
    )

    const getAllFiles = useCallback((path, currentFolderPath, fileName) => {

        dataGetter(getParamPath(path, "0", currentFolderPath, fileName), fileDataSetter)
    },
        [dataGetter, getParamPath, fileDataSetter]
    )

    useEffect(() => {

        getAllFiles(path, currentFolderPath)
    },
        [getAllFiles, path, currentFolderPath, isUpload, isNewFolder, isRename, isDelete, isReplace]
    )



    let documents = []

    for (let i = 0; i < currentFileData.length; i++) {

        const currentFile = currentFileData[i]
        const isFile = currentFile.length > 0

        const fileName = isFile ? currentFile[0] : ""
        const isFolder = isFile ? currentFile[1] : ""
        const modified = isFile ? currentFile[2] : ""
        const modifier = isFile ? currentFile[3] : ""

        documents.push(

            [
                path,
                fileName,
                isFolder,
                modified,
                modifier
            ]
        )
    }

    const getExtensionComponent = (extension, isFolder) => {

        let component

        switch (extension) {

            case "txt":
                component = <Text />
                break
            case "png":
            case "jpg":
            case "jpeg":
            case "gif":
            case "bmp":
            case "tiff":
            case "raw":
                component = <Image />
                break
            case "pdf":
                component = <Pdf />
                break
            case "doc":
            case "docx":
            case "docm":
                component = <Word />
                break
            case "xls":
            case "xlsx":
            case "xlsm":
                component = <Excel />
                break
            case "ppt":
            case "pptx":
            case "pptm":
                component = <Powerpoint />
                break
            case "mp4":
            case "webm":
            case "avi":
            case "mov":
            case "wmv":
            case "flv":
            case "avchd":
                component = <Video />
                break
            case "zip":
            case "rar":
            case "tar":
            case "sit":
            case "7z":
            case "bin":
            case "iso":
                component = <Zip />
                break
            default:
                component = <File />
        }

        component = isFolder ? <Folder text={"Mappa"} /> : component

        return component
    }



    const fetchFile = async (path, operation, currentFolderPath, fileName) => {

        const paramPath = getParamPath(path, operation, currentFolderPath, fileName)

        const splitArray = fileName.split("/")
        fileName = splitArray[splitArray.length - 1]

        Axios.get(

            `${url}:${port}/api${paramPath}`,
            { responseType: 'blob' })
            .then(res => {

                return res.data
            })
            .then(blob => {

                let url
                const link = document.createElement('a')

                url = window.URL.createObjectURL(blob)
                link.href = url
                link.download = fileName

                document.body.appendChild(link)

                link.click()
                link.remove()

                URL.revokeObjectURL(url)
            })
            .catch(err => console.log(err))
    }



    const openFolder = (fileName) => {

        folderPathSetter(currentFolderPath + fileName + "/")
    }



    const makeFolder = (fileName) => {

        if (fileName.trim() !== "") {

            const paramPath = getParamPath(path, "3", currentFolderPath, fileName)
            dataGetter(paramPath, () => { })
        }

        setIsNewFolder(!isNewFolder)
    }

    const makeFolderInput = () => {

        const newFolder = [

            <UserInput
                inputSetter={async (fileName) => {

                    const isReplace = checkForExistingFile(fileName)

                    if (isReplace) {

                        await replaceFileSetter(fileName)
                        replaceButtonSetterSetter((inputFileName) => {

                            const outputFileName = inputFileName === undefined ? fileName : inputFileName

                            makeFolder(outputFileName)
                        })
                        replaceIsFolderSetter(true)
                        replaceWindowSetter(true)
                    }
                    else {

                        makeFolder(fileName)
                    }
                }}

                isOnBlur={true}
            />,
            true,
            ""
        ]

        return newFolder
    }

    newFolderSetterSetter(makeFolderInput)



    const renameFile = (fileName, extension, newFileName) => {

        if (newFileName.trim() !== "") {

            let paramPath = getParamPath(path, "4", currentFolderPath, fileName)
            paramPath += "&newFileName=" + currentFolderPath + newFileName + ((extension === "") ? "" : ("." + extension))
            dataGetter(paramPath, () => { })
        }

        setIsRename(!isRename)
    }

    const makeRenameInput = (fileName, extension, isFolder) => {

        const renamedFile = [

            <UserInput
                inputSetter={async (newFileName) => {

                    const isReplace = checkForExistingFile(newFileName)

                    if (isReplace) {

                        await replaceFileSetter(newFileName)
                        replaceButtonSetterSetter((inputFileName) => {

                            const outputFileName = inputFileName === undefined ? newFileName : inputFileName

                            renameFile(fileName, extension, outputFileName)
                        })
                        replaceIsFolderSetter(isFolder)
                        replaceWindowSetter(true)
                    }
                    else {

                        renameFile(fileName, extension, newFileName)
                    }

                }}

                isOnBlur={true}
            />,
            isFolder,
            ""
        ]

        return renamedFile
    }



    const deleteFile = (path, operation, currentFolderPath, fileName) => {

        const paramPath = getParamPath(path, operation, currentFolderPath, fileName)

        dataGetter(paramPath, () => {

            const temp = isDelete ? !isDelete : isDelete
            deleteWindowSetter(temp)
        })
    }



    const checkForExistingFile = (fileName) => {

        let i = 0

        while (currentFileData.length > i && currentFileData[i][0] !== fileName) {

            i++
        }

        return currentFileData.length > i
    }

    checkForExistingFileSetter(checkForExistingFile)



    return (

        <div className="document-table-container">

            <Table
                className="document-table"
                columnspan="1"

                tHead={

                    [
                        "Típus",
                        "Név",
                        "Módosítva",
                        "Módosította",
                        "",
                    ]
                }

                tBody={

                    documents.map((doc, idx) => {

                        const tRow = []

                        const path = doc[0]
                        const fileName = doc[1]
                        const isFolder = doc[2]
                        const modified = doc[3]
                        const modifier = doc[4]

                        const isFileName = typeof fileName === "string" || fileName instanceof String

                        if (isFileName) {

                            const splitFileName = fileName.split(".")
                            let shortFileName = splitFileName[0]

                            for (let i = 1; i < splitFileName.length - 1; i++) {

                                shortFileName += "." + splitFileName[i]
                            }

                            const extension = isFolder ? "" : splitFileName[splitFileName.length - 1]

                            const linkSetter = () => {

                                if (isFolder) {

                                    openFolder(fileName)
                                }
                                else {

                                    fetchFile(path, "1", currentFolderPath, fileName)
                                }
                            }

                            const downloadSetter = () => {

                                fetchFile(path, "2", currentFolderPath, fileName)
                            }

                            const renameSetter = () => {

                                const renamedFile = makeRenameInput(fileName, extension, isFolder)

                                const startArray = currentFileData.slice(0, idx)
                                const endArray = currentFileData.slice(idx + 1)

                                fileDataSetter([...startArray, renamedFile, ...endArray])
                            }

                            const deleteSetter = () => {

                                const deleteButtonSetter = () => {

                                    deleteFile(path, "5", currentFolderPath, fileName)
                                }

                                deleteButtonSetterSetter(deleteButtonSetter)
                                deleteFileSetter(fileName)
                                deleteWindowSetter(true)
                            }

                            tRow.push(getExtensionComponent(extension, isFolder))
                            tRow.push(
                                <Link
                                    text={shortFileName}
                                    linkSetter={linkSetter}
                                />
                            )
                            tRow.push(modified)
                            tRow.push(modifier)

                            tRow.push(

                                <div className="document-buttons">

                                    <ButtonWithIcon
                                        index={0}
                                        imageComponent={<Download />}
                                        buttonSetter={downloadSetter}
                                    />

                                    {isAdmin && (

                                        <ButtonWithIcon
                                            index={1}
                                            imageComponent={<Rename />}
                                            buttonSetter={renameSetter}
                                        />
                                    )}

                                    {isAdmin && (

                                        <ButtonWithIcon
                                            index={2}
                                            imageComponent={<Delete />}
                                            buttonSetter={deleteSetter}
                                        />
                                    )}

                                </div>
                            )
                        }
                        else {

                            tRow.push(getExtensionComponent("", isFolder))
                            tRow.push(fileName)
                            tRow.push("")
                            tRow.push("")
                            tRow.push("")
                        }

                        return tRow.map(tData => {

                            return <p className="document-paragraph">{tData}</p>
                        })
                    })
                }

                tFoot={[]}
            />

        </div>
    )
}

export default DocumentTable