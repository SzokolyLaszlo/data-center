const Db = require('../database/Database');
const Months = require('../utils/Months');
const MtDataNames = require('../data_names/MainTableDataNames');
const ArrayUtils = require('../utils/ArrayUtils');
const Sum = require('../utils/Sum');

const dbName = "CompanyInfo";
const collectionName = "kef";

const months = Months.months;

async function getData(company, year, inputMonths, inputDataNames, menupointId, graphId) {

    const dataNames = [...inputDataNames];
    const asterisks = [...MtDataNames.asterisks];
    const footers = MtDataNames.getFooters(year);
    const result = [];
    const sums = [];

    const data = [dataNames, asterisks, footers, result, sums];

    await Promise.all(dataNames.map(async (dataName, idx) => {

            let subresult = await Db.read(dbName, collectionName, false,

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
                        [year + " " + months[0 ]]: 1,
                        [year + " " + months[1 ]]: 1,
                        [year + " " + months[2 ]]: 1,
                        [year + " " + months[3 ]]: 1,
                        [year + " " + months[4 ]]: 1,
                        [year + " " + months[5 ]]: 1,
                        [year + " " + months[6 ]]: 1,
                        [year + " " + months[7 ]]: 1,
                        [year + " " + months[8 ]]: 1,
                        [year + " " + months[9 ]]: 1,
                        [year + " " + months[10]]: 1,
                        [year + " " + months[11]]: 1
                    }
                }
            );

            subresult = subresult.length > 0 ? Object.values(subresult[0]) : "";
            const filteredSubresult = [];

            for (let i = 0; i < inputMonths.length; i++) {

                filteredSubresult.push(subresult[ inputMonths[i] - 1 ]);
            }

            result[idx] = inputMonths.length > 0 ? filteredSubresult : subresult;
    }));

    ArrayUtils.getIndexStored(dataNames);
    const removables = [];

    result.map((subresult, subresultIdx) => {

        const dataId = graphId === undefined ? dataNames[subresultIdx][1] : graphId;

        if (Sum.hasSumData[menupointId]) {

            if (Sum.isNotSumData[menupointId][dataId]) {

                sums[subresultIdx] = "-";
            }
            else {

                const decimalPlaces = Sum.hasDecimalData[menupointId] && Sum.isDecimalData[menupointId][dataId] ? 2 : 0;

                sums[subresultIdx] = Sum.getSum(subresult, decimalPlaces);
            }
        }

        const notShownFromYear = MtDataNames.notShownData[menupointId][dataId];

        if (graphId === undefined && notShownFromYear !== undefined && notShownFromYear <= parseInt(year)) {

            removables.push(subresultIdx);
        }
    })

    for (let i = removables.length - 1; i >= 0; i--) {

        dataNames.splice(removables[i], 1);
        result.splice(removables[i], 1);
        sums.splice(removables[i], 1);

        const asterisksSubArray = [...asterisks[menupointId]];
        asterisksSubArray.splice(removables[i], 1);
        asterisks[menupointId] = asterisksSubArray;
    }

    return data;
}

exports.getData = getData;