const MtHandler = require('./MonthTableHandler');
const ArrayUtils = require('../utils/ArrayUtils');
const Sum = require('../utils/Sum');


async function getData(company, year, inputQuarterlyYears, mtDataNames, menupointId, graphId) {

    const quarterlyYearIndexes = ArrayUtils.modifyIndexesByAmount(inputQuarterlyYears, -1)

    const monthIndexes = getMonthIndexesFromQuarterlyYearIndexes(quarterlyYearIndexes);
    const months = ArrayUtils.modifyIndexesByAmount(monthIndexes, 1);

    const monthTableData = await MtHandler.getData(company, year, months, mtDataNames, menupointId, graphId);

    const dataNames = monthTableData[0];
    const monthlyResult = monthTableData[3];

    const quarterlyResult = [];
    const quarterlySum = [];

    monthlyResult.map((monthlySubresult, subresultIdx) => {

        const quarterlyData = [[], [], [], []];

        const dataId = graphId === undefined ? dataNames[subresultIdx][1] : graphId;
        const decimalPlaces = Sum.hasDecimalData[menupointId] && Sum.isDecimalData[menupointId][dataId] ? 2 : 0;

        monthlySubresult.map((monthlyData, monthIdx) => {

            quarterlyData[Math.floor(monthIdx / 3)].push(monthlyData);
        })

        const quarterlySubresult = [];
        let quarterlySubSum = "";

        quarterlyData.map((quarter, quarterIdx) => {

            const quarterSubresult = Sum.getSumOrMean(quarter, menupointId, dataId, decimalPlaces, true);

            if (quarter.length > 0 && quarterSubresult !== "") {

                quarterlySubresult.push(quarterSubresult);
            }
        })

        quarterlySubSum = Sum.getSumOrMean(quarterlySubresult, menupointId, dataId, decimalPlaces, false);

        quarterlyResult.push(quarterlySubresult);
        quarterlySum.push(quarterlySubSum);
    })

    const quarterlyYearTableData = [...monthTableData];

    quarterlyYearTableData[3] = quarterlyResult;
    quarterlyYearTableData[4] = quarterlySum;

    return quarterlyYearTableData;
}

function getMonthIndexesFromQuarterlyYearIndexes(quarterlyYearIndexes) {

    const monthIndexes = [];

    quarterlyYearIndexes.map(quarterlyYearIndex => {

        const addend = (quarterlyYearIndex * 3);

        for (let i = 0; i < 3; i++) {

            monthIndexes.push(addend + (i % 3));
        }
    })

    return monthIndexes;
}

exports.getData = getData;