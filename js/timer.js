const timerMinInput = document.querySelector('#timer-box input');
const startBtn = document.getElementById('timer-start');
const endBtn = document.getElementById('timer-end');
const percentSpan = document.getElementById('percent');
const timerPrintSpan = document.getElementById('timer-print');

function countdownPrint(timerMinTimestamp){
  let countdownTimestamp = timerMinTimestamp;
  let hours = Math.floor(countdownTimestamp/1000/60/60);
  let minutes = Math.floor((countdownTimestamp-1000/60)-(hours*60));
  let seconds = Math.floor((countdownTimestamp/1000)-(minutes*60*1000)-(hours*60*60*1000));
  
  
  function getCountdown(seconds,minutes,hours){
    let printText = `${hours} : ${minutes} : ${seconds}`;
    timerPrintSpan.innerText = printText;
  }
  if(countdownTimestamp !==0){
    setInterval(getCountdown(seconds,minutes,hours),1000);
    countdownTimestamp -= 1000;
  }
  //00:00:00 표시 형태
  
}

var i = 0;
function move() {
  const startTimestamp = new Date().getTime(); //시작시간
  const timerMinTimestamp = (timerMinInput.value)*60*1000; //timestamp로 환산한 min
  const endTimestamp = startTimestamp+timerMinTimestamp; //종료시간 timestamp
  countdownPrint(timerMinTimestamp);
  //console.log('startTimestamp',startTimestamp);
  const onePercentTimestamp = timerMinTimestamp/100;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, onePercentTimestamp);
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