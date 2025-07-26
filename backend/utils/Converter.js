function getNumbersFromStrings(array) {

    const numberArray = [];

    if (array.length > 0) {

        array.map(e => {

            e = e.replaceAll(" ", "");
            e = e.replaceAll(",", ".");

            if (e !== "") {

                e = Number(e);

                if (!isNaN(e)) {

                    numberArray.push(e);
                }
            }
        });
    }

    return numberArray;
}

function getStringFromNumbers(array, decimalPlaces = 0) {

    let stringNumber = "";

    if (!isNaN(array)) {

        const stringArray = array.toString();
        const splitArray = stringArray.split(".");

        let integerPart = splitArray[0];
        let fractionPart = splitArray[1];

        integerPart = integerPart === undefined ? "" : integerPart;
        fractionPart = fractionPart === undefined ? "" : fractionPart;

        let reversedFractionPart = reverseString(fractionPart.substring(0, decimalPlaces));

        integerPart = getSubStringFromNumbers(integerPart);
        reversedFractionPart = getSubStringFromNumbers(reversedFractionPart);

        fractionPart = reverseString(reversedFractionPart);
        fractionPart = fractionPart.length < decimalPlaces ? getDecimalZeroes(fractionPart, decimalPlaces) : fractionPart;
        fractionPart = fractionPart.length > 0 ? "," + fractionPart : fractionPart;

        stringNumber = integerPart + fractionPart;
    }

    return stringNumber;
}

function getSubStringFromNumbers(stringArray) {

    const mod = stringArray.length % 3;
    let formattedStringArray = stringArray.slice(0, mod);

    for (let i = mod; i < stringArray.length; i += 3) {

        formattedStringArray += " " + stringArray.slice(i, i + 3);
    }

    return formattedStringArray.trim();
}

function reverseString(string) {

    return string.split("").reverse().join("");
}

function getDecimalZeroes(fractionPart, decimalPlaces) {

    for (let i = fractionPart.length; i < decimalPlaces; i++) {

        fractionPart += "0";
    }

    return fractionPart;
}

function getBoolsFromStrings(array) {

    const boolArray = [];

    array.map(e => {

        boolArray.push(e === "true");
    });

    return boolArray;
}

function getRoundedToDecimal(number, decimalPlaces) {

    const multiplier = Math.pow(10, decimalPlaces);
    number = Math.round(number * multiplier) / multiplier;

    return number;
}

function runNumberFunctionOnStringArray(array, numberFunction, decimalPlaces = 0) {

    array = getNumbersFromStrings(array);

    let result = numberFunction(array);

    result = getRoundedToDecimal(result, decimalPlaces);
    result = getStringFromNumbers([result], decimalPlaces);

    return result;
}

exports.getNumbersFromStrings = getNumbersFromStrings;
exports.getStringFromNumbers = getStringFromNumbers;
exports.getBoolsFromStrings = getBoolsFromStrings;
exports.getRoundedToDecimal = getRoundedToDecimal;
exports.runNumberFunctionOnStringArray = runNumberFunctionOnStringArray;