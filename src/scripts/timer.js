import moment from 'moment';

const timer = document.querySelector('.timer'),
      timerDay = timer.querySelector('.timer__day span'),
      timerHour = timer.querySelector('.timer__hour span'),
      timerMinute = timer.querySelector('.timer__minute span'),
      timerSecond = timer.querySelector('.timer__second span'),
      dd = document.getElementById('dd'),
      hh = document.getElementById('hh'),
      mm = document.getElementById('mm'),
      ss = document.getElementById('ss');

let start = moment(moment().format('YYYY-MM-DD'),'YYYY-MM-DD');
let end = moment('2023-09-30', 'YYYY-MM-DD');

let days = start.diff(end, 'days');
days = days < 0 ? days * -1 - 1 : days - 1;

let hours = 23 - moment().add(1, 'day').hour();

let minutes = 59 - moment().add(1, 'day').minute();

let seconds = 59 - moment().add(1, 'day').second();

timerDay.innerHTML = days;
timerHour.innerHTML = hours;
timerMinute.innerHTML = minutes;
timerSecond.innerHTML = seconds;

setInterval(() => {

  seconds -=1;

  if (seconds < 0) {
    seconds = 59;

    minutes -= 1;

    if (minutes < 0) {
      minutes = 59;

      hours -= 1;

      if (hours < 0) {
        hours = 23;

        if (hours < 0) {
          days > 0 ? days -= 1 : 0;
        }
      }
    }
  }


  timerDay.innerHTML = days;
  timerHour.innerHTML = hours;
  timerMinute.innerHTML = minutes;
  timerSecond.innerHTML = seconds;

  dd.style.strokeDashoffset = 210 - (210 * days) / 272;
  hh.style.strokeDashoffset = 210 - (210 * hours) / 24;
  mm.style.strokeDashoffset = 210 - (210 * minutes) / 60;
  ss.style.strokeDashoffset = 210 - (210 * seconds) / 60;
}, 1000)