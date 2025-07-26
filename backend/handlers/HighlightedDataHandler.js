const Db = require('../database/Database');
const Months = require('../utils/Months');

const dbName = "CompanyInfo";
const collectionName = "kef";

const months = Months.months;

async function getData(company, year, month, dataNames) {

    const result = [];
    const data = [dataNames, result];

    const date = year + " " + months[month - 1];

    await Promise.all(dataNames.map(async (dataName, idx) => {

       const subresult = await Db.read(dbName, collectionName, false,

            {
                $and: [

                    {
                        "Cég": company
                    },

                    {
                        "Megnevezés": dataName
                    }
                ]
            },

            {
                projection: {
                        
                    "_id": 0,
                    [date]: 1
                }
            }
        );

        result[idx] = subresult.length > 0 ? Object.values(subresult[0]) : "";
    }));

    return data;
}

exports.getData = getData;