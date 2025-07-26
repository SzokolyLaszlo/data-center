const MtHandler = require('./MonthTableHandler');
const QytHandler = require('./QuarterlyYearTableHandler');

async function getData(company, year, months, dataNames, menupointId, graphId, isQuarterly = false, quarterlyYears = []) {
    
    const graphData = (

        isQuarterly ?
        await QytHandler.getData(company, year, quarterlyYears, [dataNames[graphId]], menupointId, graphId) :
        await MtHandler.getData(company, year, months, [dataNames[graphId]], menupointId, graphId)
    );

    return [

        graphData[0],
        graphData[3][0]
    ];
}

exports.getData = getData;