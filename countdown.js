let deadline = new Date('December 25th, 2022 13:00:00');

let countdown = document.getElementById('countdown');
countdown.innerHTML = "GDWD";


function setCountdown() {
  let now = new Date();


let timeleft = deadline.getTime() - now.getTime();

let daysLeft = convertToDaysLeft(timeLeft);
let hoursLeft = convertToHoursLeft(timeLeft);
let minutesleft = convertToMinutesLeft(timeleft);
let secondsLeft = convertToSecondsleft(timeleft);

countdown.innerHTML=
  formatCountdownText(daysleft, hoursleft, minutesleft, secondsleft);
}

setInterval(setCountdown, 1000);
