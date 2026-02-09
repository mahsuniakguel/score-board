
let homeTeam = document.getElementById("home-team")
let guestTeam = document.getElementById("guest-team")

const timerDisplay = document.getElementById("timer")
const startBtn = document.getElementById("startBtn")

homeTeam.textContent = 0
guestTeam.textContent = 0

let count1 = 0
let count2 = 0

function startTimer() {

}


function incrementHomeByThree() {
    count1 += 3
    homeTeam.textContent = count1
}

function incrementHomeByTwo() {
    count1 += 2
    homeTeam.textContent = count1
}

function incrementHomeByOne() {
    count1 += 1
    homeTeam.textContent = count1
}

function incrementGuestByThree() {
    count2 += 3
    guestTeam.textContent = count2
}

function incrementGuestByTwo() {
    count2 += 2
    guestTeam.textContent = count2
}

function incrementGuestByOne() {
    count2 += 1
    guestTeam.textContent = count2
}

function resetGame() {
    count1 = 0
    count2 = 0
    homeTeam.textContent = count1
    guestTeam.textContent = count2
}