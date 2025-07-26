const Converter = require('../utils/Converter')

function getData(graphValues) {

    const fractionCount = 5;

    graphValues = Converter.getNumbersFromStrings(graphValues);

    let maxValue = Math.max(...graphValues);
    let minValue = Math.min(...graphValues);

    const maxLessThanZero = maxValue <= 0;
    const minMoreThanZero = minValue >= 0;

    maxValue = maxLessThanZero ? 0 : maxValue;
    minValue = minMoreThanZero ? 0 : minValue;

    const maxAbsValue = Math.abs(maxValue);
    const minAbsValue = Math.abs(minValue);

    const maxAbsValueIsGreater = maxAbsValue >= minAbsValue;

    const limit1 = maxAbsValueIsGreater ? getFirstLimit(maxAbsValue, fractionCount) : getFirstLimit(minAbsValue, fractionCount);
    const limit2 = maxAbsValueIsGreater ? getSecondLimit(minAbsValue, limit1, fractionCount) : getSecondLimit(maxAbsValue, limit1, fractionCount);

    let maxLimit = maxAbsValueIsGreater ? limit1 : limit2;
    let minLimit = maxAbsValueIsGreater ? limit2 : limit1;

    minLimit = 0 - minLimit;

    const graphColumn = getColumnNumbers(minLimit, maxLimit, fractionCount, maxAbsValueIsGreater);

    return graphColumn;
}

function getFirstLimit(value, fractionCount) {

    let i = fractionCount;
    let j = 0;
    const multipliers = [2, 2.5, 2];

    while (value > i) {

        i *= multipliers[j % 3];
        j++;
    }

    return i;
}

function getSecondLimit(value, limit, divisor) {

    let multiplier = 0;

    while (multiplier * (limit/divisor) < value) {

        multiplier++;
    }

    return multiplier * (limit/divisor);
}

function getColumnNumbers(minLimit, maxLimit, divisor, maxAbsValueIsGreater) {

    const graphColumn = [minLimit];
    const fraction = maxAbsValueIsGreater * (maxLimit / divisor ) + (maxAbsValueIsGreater ^ 1) * ( Math.abs(minLimit / divisor) );

    let i = minLimit;
    while(i < maxLimit) {

        i += fraction;
        graphColumn.push(i);
    }

    return graphColumn;
}

exports.getData = getData;