import { betterBubble } from "./bubble.js"

const container = document.querySelector('[data-container]')
const barHeight = '--bar-height'
let bars = []
export function createBar(height) {
    const barElem = document.createElement('div')
    const id = createId()
    barElem.classList.add('bar')
    barElem.innerText = height
    barElem.style.setProperty(barHeight, height)
    barElem.id = id
    container.appendChild(barElem)
    const bar = {
        id,
        get div() {
            return document.getElementById(id)
        },
        get value() {
            return parseFloat(getComputedStyle(bar.div).getPropertyValue(barHeight))
        },
        set value(newValue) {
            bar.div.style.setProperty(barHeight, newValue)
        }
    }
    bars.push(bar)
}
export function createId() {
    return Math.floor(Math.random()*10000000000000000)
}
export function updateBar(arr) {
    container.innerHTML = ""
    bars = []
    arr.forEach(item => createBar(item))
    setTimeout(() => betterBubble(bars), 1000)
}