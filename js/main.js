// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
// menuBtn.onclick = function () {
//   menu.classList.toggle("active");
//   menuBtn.classList.toggle("active");
//   body.classList.toggle("active");
// };
// window.onclick = function (event) {
//   if (event.target == menu) {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   }
// };
// // menu end
// // scroll start
// let header = document.getElementById("header");
// function scrollFunc() {
//   if (window.pageYOffset >= 60) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
// window.onscroll = function () {
//   scrollFunc();
// };
// scroll end
// modals start
const modal = document.getElementById("modal");
if (modal) {
  const modalBtn = document.getElementById("modalBtn");
  const modalClose = document.getElementById("modalClose");
  modalBtn.onclick = () => {
    modal.classList.add("active");
    body.classList.add("active");
  };
  modalClose.onclick = () => {
    modal.classList.remove("active");
    body.classList.remove("active");
  };

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("active");
      body.classList.remove("active");
    }
  });
}
// modals end

// timer start
const countdown = document.getElementById("countdown");
let endDate = new Date(countdown.getAttribute("data-date"));
let upgradeTime = endDate - Date.now();

var seconds = upgradeTime / 1000;

let countdownTimer = setInterval("timer()", 1000);

function timer() {
  let days = Math.floor(seconds / 24 / 60 / 60);
  let hoursLeft = Math.floor(seconds - days * 86400);
  let hours = Math.floor(hoursLeft / 3600);
  let minutesLeft = Math.floor(hoursLeft - hours * 3600);
  let minutes = Math.floor(minutesLeft / 60);
  let remainingSeconds = Math.floor(seconds) % 60;
  function pad(n) {
    return n < 10 ?  n : n;
  }
  countdown.innerHTML =
    pad(days) +
    "<b>dni</b><hr>" +
    pad(hours) +
    "<b>hodin</b><hr>" +
    pad(minutes) +
    "<b>minut</b><hr>" +
    pad(remainingSeconds) +
    "<b>sekund</b>";
  if (seconds < 0) {
    clearInterval(countdownTimer);
    countdown.innerHTML = "Completed";
  } else {
    seconds--;
  }
}
// timer end
