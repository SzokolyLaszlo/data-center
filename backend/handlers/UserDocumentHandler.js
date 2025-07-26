const escape = require('regexp.escape');
const Db = require("../database/Database");

const dbName = "Metadata";
const collectionName0 = "users";
const collectionName1 = "user_documents";



async function getModifier(document) {

    let username = await Db.read(dbName, collectionName1, true,

        {
            "document": document
        },

        {
            projection: {

                "_id": 0,
                "username": 1
            }
        }
    );

    username = username !== null ? Object.values(username)[0] : "";

    return username;
}



async function insertUserDocument(userId, document) {

    const username = await readUsernameFromUserId(userId);

    await Db.insert(dbName, collectionName1, true,

        {
            "document": document,
            "username": username
        }
    );
}

async function removeUserDocument(document) {

    const regex = getStartingStringRegex(document);

    await Db.remove(dbName, collectionName1, false,

        {
            "document": regex
        }
    );
}

async function updateUserDocument(oldDocument, newDocument) {

    const oldSubdocuments = await getAllSubDocuments(oldDocument);
    const newSubdocuments = getNewSubDocuments(oldDocument, newDocument, oldSubdocuments);

    for (let i = 0; i < oldSubdocuments.length; i++) {

        await Db.update(dbName, collectionName1, true,

            {
                "document": oldSubdocuments[i]
            },

            {
                $set: {

                    "document": newSubdocuments[i]
                }
            }
        );
    }
}



async function readUsernameFromUserId(userId) {

    let username = await Db.read(dbName, collectionName0, true,

        {
            "userId": userId
        },

        {
            projection: {

                "_id": 0,
                "username": 1
            }
        }
    );

    username = username !== null ? Object.values(username)[0] : "";

    return username;
}

async function getAllSubDocuments(document) {

    const regex = getStartingStringRegex(document);

    let subdocuments = await Db.read(dbName, collectionName1, false,

        {
            "document": regex
        },

        {
            projection: {

                "_id": 0,
                "document": 1
            }
        }
    );

    if (subdocuments !== null) {

        for (let i = 0; i < subdocuments.length; i++) {

            subdocuments[i] = Object.values(subdocuments[i])[0];
        }
    }
    else {

        subdocuments = [];
    }

    return subdocuments;
}

function getNewSubDocuments(oldDocument, newDocument, oldSubDocuments) {

    const newSubdocuments = [];

    for (let i = 0; i < oldSubDocuments.length; i++) {

        const splitDocument = oldSubDocuments[i].slice(oldDocument.length);
        newSubdocuments[i] = newDocument + splitDocument;
    }

    return newSubdocuments;
}

function getStartingStringRegex(string) {

    return new RegExp(`^${escape(string)}`);
}



exports.getModifier = getModifier;
exports.insertUserDocument = insertUserDocument;
exports.removeUserDocument = removeUserDocument;
exports.updateUserDocument = updateUserDocument;