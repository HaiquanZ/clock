window.addEventListener('load', calculateTime);
function calculateTime(){
    var date = new Date();
    var dayNumber = date.getDay();
    var dayth = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ap = (hour > 12) ? 'PM' : 'AM';
    var dayNames = ["SUN,", "MON,", "TUE,", "WED,", "THU,", "FRI,", "SAT,"];
    var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    // console.log(hour);
    document.getElementById('month').innerHTML = monthNames[month];
    document.getElementById('day').innerHTML = dayNames[dayNumber];
    if (hour != 12) hour = hour % 12;
    hour = (hour < 10) ? ('0' + hour) : hour;
    minute = (minute < 10) ? ('0'+ minute) : minute;
    dayth = (dayth < 10) ? ('0' + dayth) : dayth;
    document.getElementById("hour").innerHTML = hour; 
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("ap").innerHTML = ap;
    document.getElementById("dayth").innerHTML = dayth;

    setTimeout(calculateTime, 1000);

}

function changeBackground(){
    var date = new Date();
    var hour = date.getHours();
    var bg = document.getElementById('bg');
    if ((hour>=4)&&(hour<=7)){
        bg.src = './img/cat_morning(1).mp4';
    }
    if ( ((hour>=19)&&(hour<=24)) || ((hour>=0)&&(hour<=3)) ){
        bg.src = "./img/cat_night.mp4";
    }
    if ((hour>=17)&&(hour<=18)){
        bg.src = "./img/cat_sunset(1).mp4";
    }
    if ((hour>=8)&&(hour<=16)){
        bg.src = "./img/cat_day.mp4";
    }
    

}
function changeMessage(){
    var date = new Date();
    var hour = date.getHours();
    var mess = document.querySelector('.mess h1');
    if ((hour>=0)&&(hour<=3)){
        mess.innerHTML = "Meow: It's too late.<br>Why do not you sleep?";
    }
    if ((hour>=4)&&(hour<=7)){
        mess.innerHTML = "Meow: Good morning.<br>Have a nice day!";
    }

    if ((hour>=8)&&(hour<=11)){
        mess.innerHTML = "Meow: What are you doing?";
    }
    if ((hour>=12)&&(hour<=13)){
        mess.innerHTML = "Meow: Did you have luch?";
    }
    if ((hour>=14)&&(hour<=16)){
        mess.innerHTML = "Meow: What are you doing?";
    }
    if ((hour>=17)&&(hour<=18)){
        mess.innerHTML = "Meow: Do you want to<br>watch the sunset?";
    }
    if ((hour>=19)&&(hour<=21)){
        mess.innerHTML = "Meow: Did you have dinner?";
    }
    if ((hour>=22)&&(hour<=23)){
        mess.innerHTML = "Meow: What are you doing?";
    }

}
setTimeout(changeMessage, 8000);
changeBackground();
calculateTime();
