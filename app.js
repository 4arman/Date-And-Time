const output = document.getElementById('time-main-text')
const fullButton = document.getElementById('full-btn')
const timeButton = document.getElementById('time-btn')
const dateButton = document.getElementById('date-btn')

let mode = 'full'

function change (name) {
    return function () {
        mode = name
        return textUpdate()
    }
}

fullButton.onclick = change('full')
dateButton.onclick = change('date')
timeButton.onclick = change('time')

setInterval(textUpdate,1000)
textUpdate()

function textUpdate () {
    output.textContent = format(mode)
}

function format (formatMode) {
    const now = new Date ()
    switch (formatMode) {
        case 'full' : return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        case 'time' : return now.toLocaleTimeString()
        case 'date' : return now.toLocaleDateString()
        default: return now.toLocaleTimeString()
    }
}