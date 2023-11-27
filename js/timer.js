const timerMinInput = document.querySelector('#timer-box input');
const startBtn = document.getElementById('timer-start');
const endBtn = document.getElementById('timer-stop');
const percentSpan = document.getElementById('percent');
const timerPrintSpan = document.getElementById('timer-print');

//흐르는 시간을 활용하여 타이머 기능 구현
//00:00:00 표시 형태로 출력할 것
function countdownPrint(endTimestamp){
  const nowTimestamp = new Date().getTime();
  let countdownTimestamp = endTimestamp-nowTimestamp;
  
  console.log('countdownTimestamp',countdownTimestamp);
  if(countdownTimestamp>0){
    let hours = String(Math.floor(countdownTimestamp/1000/60/60)).padStart(2,0);
    let minutes = String(Math.floor((countdownTimestamp/1000/60)-(hours*60))).padStart(2,0);
    let seconds = String(Math.floor((countdownTimestamp/1000)-(minutes*60)-(hours*60*60))).padStart(2,0);
    let printText = `${hours} : ${minutes} : ${seconds}`;
    timerPrintSpan.innerText = printText;
  }
}

var i = 0;
function move() {
  const startTimestamp = new Date().getTime(); //시작시간
  const timerMinTimestamp = (timerMinInput.value)*60*1000; //timestamp로 환산한 min
  const endTimestamp = startTimestamp+timerMinTimestamp; //종료시간 timestamp
  let printInterval = setInterval(countdownPrint,1000,endTimestamp)

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
    endBtn.addEventListener("click",stopTimer); //종료버튼 이벤트리스너
      function stopTimer(countdownTimestamp){
        console.log('stop timer');
        clearInterval(printInterval);
        clearInterval(id);
      }
  }
}



startBtn.addEventListener("click", move);
