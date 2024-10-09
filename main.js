const hours = document.querySelector(".js-hours");
const minutes = document.querySelector(".js-minutes");
const seconds = document.querySelector(".js-seconds");
const months = document.querySelector(".js-months");
const days = document.querySelector(".js-days");
const dates = document.querySelector(".js-dates");
const timeFormat = document.querySelector(".js-time-format");

const monthList = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER"
];

const dayList = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
];

function minute() {
    const time = new Date();
    let currentHour = time.getHours();
    const currentMinute = time.getMinutes();
    const currentSeconds = time.getSeconds();
    const currentDay = time.getDay();
    const currentMonth = time.getMonth();
    const currentDate = time.getDate();

    const ampm = currentHour >= 12 ? "PM" : "AM";
    currentHour = currentHour % 12 || 12; 

    hours.innerHTML = currentHour;
    minutes.innerHTML = currentMinute < 10 ? '0' + currentMinute : currentMinute;
    seconds.innerHTML = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;
    months.innerHTML = monthList[currentMonth];
    days.innerHTML = dayList[currentDay];
    dates.innerHTML = currentDate;
    timeFormat.innerHTML = ampm;
}

minute();
setInterval(minute, 1000);
