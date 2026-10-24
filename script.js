const measurements = [45, 52, 3, 78, 61, 49, 5];

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function getMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function filterAbove(arr, threshold) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            result.push(arr[i]);
        }
    }
    return result;
}

let userName = prompt("Введите ваше имя:");
if (userName === null || userName.trim() === "") {
    userName = "Исследователь";
}
alert("Здравствуйте, " + userName + "!");

console.log("Результаты измерений:", measurements);

const sum = getSum(measurements);
const average = sum / measurements.length;
const aboveAverage = filterAbove(measurements, average);

alert(
    "Среднее значение – " + average.toFixed(2) +
    ", " + aboveAverage.length + " измерений – выше среднего"
);

const max = getMax(measurements);
const min = getMin(measurements);
const anomalyLimit = max * 0.1;
let anomalyCount = 0;

for (let i = 0; i < measurements.length; i++) {
    if (measurements[i] <= anomalyLimit) {
        anomalyCount++;
    }
}

console.log("Количество аномально низких значений: " + anomalyCount);

if (max - min > 50) {
    console.log("Наблюдается высокая вариативность данных");
}