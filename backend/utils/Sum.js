const Converter = require('./Converter');
const ArrayUtils = require('./ArrayUtils');

const hasSumData = [

    false,
    false,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true
];

const isNotSumData = [

    [],
    [],
    [
        false, false, false, true, true, false, false, false
    ],
    [],
    [],
    [
        false, false, false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, true, true, true, true, false, false, false, false, false
    ],
    [
        true, true, false, false, false, false, false, false, false, false, false, true, true,
        true, true, true, true
    ],
    [],
    [],
    [
        true, true, true, true, false, false, false, false, false, false, false
    ]
];

const hasDecimalData = [

    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false
];

const isDecimalData = [

    [],
    [],
    [],
    [],
    [],
    [
        false, true, false, true, false, true, false, false, false, false, false, false,
        false, false, false, false, true, false, false, false, false, true, false, false, false
    ],
    [],
    [],
    [],
    []
];

function getSumOrMean(array, menupointId, dataId, decimalPlaces, isGetMean) {

    let result = "";

    if (hasSumData[menupointId]) {

        if (!isNotSumData[menupointId][dataId]) {

            result = getSum(array, decimalPlaces);
        }
        else if (isGetMean) {

            result = getMean(array, decimalPlaces);
        }
        else {

            result = "-";
        }
    }
    else if (isGetMean) {

        result = getMean(array, decimalPlaces);
    }

    return result;
}

function getSum(array, decimalPlaces) {

    return Converter.runNumberFunctionOnStringArray(array, sumArray, decimalPlaces);
}

function getMean(array, decimalPlaces) {

    return Converter.runNumberFunctionOnStringArray(array, meanArray, decimalPlaces);
}

function sumArray(array) {

    let sum = 0;

    array.map(e => {

        sum += e;
    });

    return sum;
}

function meanArray(array) {

    const sum = sumArray(array);
    const mean = sum / array.length

    return mean;
}

exports.hasSumData = hasSumData;
exports.isNotSumData = isNotSumData;
exports.hasDecimalData = hasDecimalData
exports.isDecimalData = isDecimalData;
exports.getSumOrMean = getSumOrMean;
exports.getSum = getSum;
exports.getMean = getMean;