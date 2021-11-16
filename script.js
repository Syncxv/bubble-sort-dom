import { updateBar } from "./bar.js";
const MAX_VALUE = 500;
const MIN_VALUE = 0;
const N_ITEMS = 100;

function createArray() {
    const array = []
    for (var i = 0; i < N_ITEMS; ++i) {
        array.push(randomIntFromInterval(getMinValue(), getMaxValue()))
    }
    return array;
}

function getMinValue() {
    return document.querySelector('[data-min]').value || MIN_VALUE
}

function getMaxValue() {
    return document.querySelector('[data-max]').value || MAX_VALUE
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function handleButtonClick() {
    document.querySelector('[data-container]').style.setProperty('--height', getMaxValue())
    const array = createArray()
    updateBar(array)
}

document.getElementById('start-btn').addEventListener('click', handleButtonClick)