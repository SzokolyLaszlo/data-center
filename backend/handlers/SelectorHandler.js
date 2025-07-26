const ArrayUtils = require('../utils/ArrayUtils');

function getData(dataNames, isIndexStored, getIndexStored, getIndexStoredInSubArray) {

    const copiedArray = [...dataNames];

    if (!isIndexStored && getIndexStored) {

        if (getIndexStoredInSubArray) {

            ArrayUtils.getIndexStoredInSubArray(copiedArray);
        }
        else {

            ArrayUtils.getIndexStored(copiedArray);
        }
    }

    ArrayUtils.sortArray(copiedArray, isIndexStored || getIndexStored);

    return copiedArray;
}

exports.getData = getData;