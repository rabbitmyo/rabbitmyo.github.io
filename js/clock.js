const today = document.getElementById("today");
const realtime = document.getElementById("realtime");

function getRealTime(){
    let fullDate = new Date();
    let year = fullDate.getFullYear();
    let month = fullDate.getMonth();
    let date = fullDate.getDate();
    let day = fullDate.getDay();
    let hour = fullDate.getHours();
    let minute = fullDate.getMinutes();
    let second = fullDate.getSeconds();

    switch (day){ 
        case 1 :  
          day="Monday"; 
          break;
        case 2 :  
          day="Tuesday"; 
          break;
        case 3 :  
          day="Wednsday"; 
          break;
        case 4 :  
          day="Thursday"; 
          break;
        case 5 :  
          day="Friday"; 
          break;
        case 6 :  
          day="Saturday"; 
          break;
         default :  
          day="Sunday"; 
          break;
      }
    
    const todayText = `${year}`+"년 "+`${month}`+"월 "+`${date}`+"일 "+`${day}`;
    today.innerText = todayText;
    const realtimeText = `${hour}시 ${minute}분 ${second}초`;
    realtime.innerText = realtimeText;
}

setInterval(getRealTime,1000);


