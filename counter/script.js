const count = document.getElementById("count")
const saveCount = document.getElementById("save-count")

let number = 0

count.textContent = number

function increment() {
    number++

    count.textContent = number
}
function decrement() {
    number--
    if (number >= 0) {
        count.textContent = number
    }
    else {
        number = 0
        count.textContent = number
    }
}
function reset() {
    number = 0
    count.textContent = number
    saveCount.textContent = "Previous Values:"
}
function save() {
    saveCount.textContent += " " + number + " -"
    number = 0
    count.textContent = number
}