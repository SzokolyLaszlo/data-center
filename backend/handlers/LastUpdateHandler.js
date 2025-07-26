const Db = require('../database/Database');

const collectionName = "last_modified";

async function getData(dbName, collectionId) {

    const result = await Db.read(dbName, collectionName, true,

        {
            "CollectionID": String(collectionId)
        },

        {
            projection: {

                "_id": 0,
                "Date": 1
            }
        }
    );

    return Object.values(result);
}

exports.getData = getData;