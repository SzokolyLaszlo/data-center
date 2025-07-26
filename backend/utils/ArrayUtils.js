function getIndexStored(array) {

    for (let i = 0; i < array.length; i++) {

        array[i] = [array[i], i];
    }
}

function getIndexStoredInSubArray(array) {

    for (let i = 0; i < array.length; i++) {

        array[i].push(i);
    }
}

function sortArray(array, withIndexStored) {

    array.sort((a, b) => {

        return withIndexStored ? a[0].localeCompare(b[0]) : a.localeCompare(b);
    });
}

function andArray(array) {

    let i = 0;
    while (i < array.length && array[i]) {

        i++;
    }

    return !(i < array.length);
}

function orArray(array) {

    let i = 0;
    while (i < array.length && !array[i]) {

        i++;
    }

    return i < array.length;
}

function getArrayFromParam(param) {

  param = param === undefined ? [] : param;
  param = Array.isArray(param) ? param : [param];

  return param;
}

function modifyIndexesByAmount(indexes, amount) {

    const modifiedIndexes = [];

    for (let i = 0; i < indexes.length; i++) {

        modifiedIndexes[i] = indexes[i] + amount;
    }

    return modifiedIndexes;
}

function getCountOfNonEmptyStringsInArray(array) {

    let count = 0;

    array.forEach(element => {

        if (element !== "") {

            count++;
        }
    });

    return count;
}

exports.getIndexStored = getIndexStored;
exports.getIndexStoredInSubArray = getIndexStoredInSubArray;
exports.sortArray = sortArray;
exports.andArray = andArray;
exports.orArray = orArray;
exports.getArrayFromParam = getArrayFromParam;
exports.modifyIndexesByAmount = modifyIndexesByAmount;
exports.getCountOfNonEmptyStringsInArray = getCountOfNonEmptyStringsInArray;