var getContainer = document.querySelector('.container')
var getDay = document.querySelector('.day')
var getHour = document.querySelector('.hour')
var getMinute = document.querySelector('.minute')
var getSecond = document.querySelector('.second')
var getTime = document.querySelector('.ampm')

function showDay(day) {
    switch(day) {
        case 0: dayName = 'SUN'; break;
        case 1: dayName = 'MON'; break;
        case 2: dayName = 'TUE'; break;
        case 3: dayName = 'WED'; break;
        case 4: dayName = 'THU'; break;
        case 5: dayName = 'FRI'; break;
        case 6: dayName = 'SAT'; break;
    }
    getDay.innerText = dayName
}

function showHour(hour) {
    getHour.innerText = hour > 12 ? '0' + (hour -12) : '0' + hour
}

function showMinute(minute) {
    getMinute.innerText = minute < 10 ? '0' + minute : minute
}

function showSecond(second) {
    getSecond.innerText = second < 10 ? '0' + second : second
}

function showTime(hour) {
    getTime.innerText = hour > 12 ? 'PM' : 'AM'
}

setInterval( function () {
    var today = new Date()
    var day = today.getDay()
    var hour = today.getHours()
    var minute = today.getMinutes()
    var second = today.getSeconds()

    showDay(day)
    showHour(hour)
    showMinute(minute)
    showSecond(second)
    showTime(hour)

}, 1000) 