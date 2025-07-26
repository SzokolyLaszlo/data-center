const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URL;

const client = new MongoClient(uri, {

    serverApi: {

        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});


async function insert(dbName, collectionName, isOne, document) {

    return await run(isOne ? 0 : 4, dbName, collectionName, document);
}

async function read(dbName, collectionName, isOne, query, projection, sort) {

    return await run(isOne ? 1 : 5, dbName, collectionName, {}, query, projection, sort);
}

async function update(dbName, collectionName, isOne, query, newValues) {

    return await run(isOne ? 2 : 6, dbName, collectionName, {}, query, {}, {}, newValues);
}

async function remove(dbName, collectionName, isOne, query, projection) {

    return await run(isOne ? 3 : 7, dbName, collectionName, {}, query, projection);
}


async function run(operation, dbName, collectionName, document = {}, query = {}, projection = {}, sort = {}, newValues = {}) {

    let result = [];

    await client.connect()

    try {

        switch (operation) {

            case 0:
                result = await insertOneWhileRunning(dbName, collectionName, document);
                break;
            case 1:
                result = await readOneWhileRunning(dbName, collectionName, query, projection);
                break;
            case 2:
                result = await updateOneWhileRunning(dbName, collectionName, query, newValues);
                break;
            case 3:
                result = await removeOneWhileRunning(dbName, collectionName, query);
                break;
            case 4:
                result = await insertWhileRunning(dbName, collectionName, document);
                break;
            case 5:
                result = await readWhileRunning(dbName, collectionName, query, projection, sort);
                break;
            case 6:
                result = await updateWhileRunning(dbName, collectionName, query, newValues);
                break;
            case 7:
                result = await removeWhileRunning(dbName, collectionName, query);
                break;
        }

    }
    catch (e) {

        console.log(e);
    }
    finally {

        return result;
    }
}


async function insertOneWhileRunning(dbName, collectionName, document) {

    const collection = getCollection(dbName, collectionName);

    return await collection.insertOne(document);
}

async function readOneWhileRunning(dbName, collectionName, query, projection) {

    const collection = getCollection(dbName, collectionName);

    return await collection.findOne(query, projection);
}

async function updateOneWhileRunning(dbName, collectionName, query, newValues) {

    const collection = getCollection(dbName, collectionName);

    return await collection.updateOne(query, newValues);
}

async function removeOneWhileRunning(dbName, collectionName, query) {

    const collection = getCollection(dbName, collectionName);

    return await collection.deleteOne(query);
}


async function insertWhileRunning(dbName, collectionName, document) {

    const collection = getCollection(dbName, collectionName);

    return await collection.insertMany(document);
}

async function readWhileRunning(dbName, collectionName, query, projection, sort) {

    const collection = getCollection(dbName, collectionName);

    return await collection.find(query, projection).sort(sort).toArray();
}

async function updateWhileRunning(dbName, collectionName, query, newValues) {

    const collection = getCollection(dbName, collectionName);

    return await collection.updateMany(query, newValues);
}

async function removeWhileRunning(dbName, collectionName, query) {

    const collection = getCollection(dbName, collectionName);

    return await collection.deleteMany(query);
}


function getCollection(dbName, collectionName) {

    const db = client.db(dbName);

    return db.collection(collectionName);
}


exports.insert = insert;
exports.read = read;
exports.update = update;
exports.remove = remove;