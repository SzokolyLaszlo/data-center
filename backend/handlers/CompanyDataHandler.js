const Db = require('../database/Database');

const dbName = "CompanyInfo";
const collectionName = "company_data";

async function getData(company) {

    const dataNames = [];
    const dataValues = [];
    const data = [dataNames, dataValues];

    result = await Db.read(dbName, collectionName, false,

        {
            "Cég": company
        },

        {
            projection: {
                    
                "_id": 0,
                "Jelleg": 1,
                "Infó": 1
            }
        }
    );

    result.map(subresult => {

        const resultValues = Object.values(subresult);

        dataNames.push(resultValues[0]);
        dataValues.push(resultValues[1]);
    });

    return data;
}

exports.getData = getData;