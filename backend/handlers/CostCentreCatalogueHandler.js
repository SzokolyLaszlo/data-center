const Db = require('../database/Database');

const dbName = "CompanyInfo";
const collectionName = "cost_centres";

const projection = {
    projection: {

    "_id": 0,
    "Költséghely kód": 1,
    "Költséghely név": 1,
    "Létrehozva": 1,
    "Lezárva": 1,
    "Módosult?": 1,
    "Módosítás típusa": 1,
    "Módosításhoz kapcsolódó megjegyzés": 1,
    "Módosítás dátuma/megjegyzés": 1,
    "Utód": 1,
    "Megjegyzés": 1
    }
}

async function getData(query) {

    const data = [ [], [] ];

    const dataNames = await Db.read(dbName, collectionName, true,

        {},

        projection
    );

    const dataValues = await Db.read(dbName, collectionName, false,

        query,

        projection,

        {"Költséghely kód" : 1}
    );

    data[0] = Object.keys(dataNames);
    data[1] = dataValues.length > 0 ? dataValues.map(r => {

        return Object.values(r);
    })
    : [];

    return data;
}

exports.getData = getData;