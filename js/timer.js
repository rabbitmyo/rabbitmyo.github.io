const timerNum = document.querySelector('#timer-box input').value;
const startBtn = document.getElementById('timer-start');
const endBtn = document.getElementById('timer-end');
const percentSpan = document.getElementById('percent');

var i = 0;
function move() {
  console.log('timerNum:',timerNum);
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        percentSpan.innerText = width +"%";
      }
    }
  }
}

startBtn.addEventListener("click", move);