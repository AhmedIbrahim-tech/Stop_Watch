//Select DOM
let Interval;
let ss = 0;
let mm = 0;
let hh = 0;

const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");


const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");

//Event Listeners

//Functions
btnStart.addEventListener("click", () => {
  Interval = setInterval(() => {
    if (ss < 59) {
      ss += 1;
      sec.innerHTML = ss < 10 ? "0" + ss : ss;
    } else {
      ss = 0;
      sec.innerHTML = ss < 10 ? "0" + ss : ss;
      if (mm < 59) {
        mm += 1;
        min.innerHTML = mm < 10 ? "0" + mm : mm;
      } else {
        hh += 1;
        hr.innerHTML = hh < 10 ? "0" + hh : hh;
      }
    }
  }, 1000);

  btnStart.style.pointerEvents = "none";
});

btnStop.addEventListener("click", () => {
  clearInterval(Interval);
  btnStart.style.pointerEvents = "visible";
});

// Reset Button Click Event
btnReset.addEventListener("click", () => {
  location.reload();

});