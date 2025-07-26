const Db = require('../database/Database');
const ArrayUtils = require('../utils/ArrayUtils');

async function getData(dbName, collectionName, fieldName, query) {

    let dataNames = [];
    const allDataNames = [];

    let projection = {

        "_id": 0
    };

    projection[fieldName] = 1;

    let result = await Db.read(dbName, collectionName, false,

        query,

        {
            projection
        }
    );

    result.map(subresult => {

        const resultValues = Object.values(subresult);

        allDataNames.push(resultValues[0]);
    });

    const uniqueDataNames = new Set(allDataNames);
    uniqueDataNames.forEach(d => dataNames.push(d));

    ArrayUtils.sortArray(dataNames, false);
    ArrayUtils.getIndexStored(dataNames);

    return dataNames;
}

exports.getData = getData;