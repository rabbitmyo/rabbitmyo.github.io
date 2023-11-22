const timerNum = document.getElementById('timer-box input');
console.log('timerNum:',timerNum);
const startBtn = document.getElementById('timer-start');
console.log('startBtn:',startBtn);
const endBtn = document.getElementById('timer-end');
console.log('endBtn:',endBtn);
const percentSpan = document.getElementById('percent');
percentSpan.innerHTML = 'get';


var i = 0;
function move() {
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

//move();
startBtn.addEventListener("click", move);