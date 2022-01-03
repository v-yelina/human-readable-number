module.exports = function toReadable(number) {
    if (+number === 0) {
        return "zero";
    } else if (+number < 10) {
        return findUnits(number);
    } else if (+number < 20) {
        return findTeens(number);
    } else if (+number < 100) {
        return findDozens(number);
    } else {
        const ending =
            number % 100 < 10
                ? findUnits(number % 100)
                : number % 100 > 9 && number % 100 < 20
                ? findTeens(number % 100)
                : findDozens(number % 100);
        return (
            findUnits(Math.trunc(number / 100)) +
            " hundred" +
            " " +
            ending
        ).trim();
    }
};

function findUnits(number) {
    switch (number) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        default:
            return "";
    }
}

function findTeens(number) {
    switch (number) {
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 19:
            return "nineteen";
        default:
            return "";
    }
}

function switchDozens(number) {
    switch (number) {
        case 20:
            return "twenty";
        case 30:
            return "thirty";
        case 40:
            return "forty";
        case 50:
            return "fifty";
        case 60:
            return "sixty";
        case 70:
            return "seventy";
        case 80:
            return "eighty";
        case 90:
            return "ninety";
        default:
            return "";
    }
}

function findDozens(number) {
    return number % 10 === 0
        ? switchDozens(number)
        : switchDozens(number - (number % 10)) + " " + findUnits(number % 10);
}
