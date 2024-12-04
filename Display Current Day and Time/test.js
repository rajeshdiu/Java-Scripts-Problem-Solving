
function displayDayAndTime() {

    var today = new Date();

    var day = today.getDay();


    var daylist= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById('currentDay').textContent="Today is "+ daylist[day] +".";


    var hour = today.getHours();
    var minute = today.getMinutes();
    var second =  today.getSeconds();

    var prepand = (hour >= 12)? " PM " : " AM ";

    hour = (hour >= 12) ? hour - 12 : hour;
    
    if (hour === 0 && prepand === ' PM ') {
        hour = 12;
        prepand = ' Noon';
    }
    if (hour === 0 && prepand === ' AM ') {
        hour = 12;
        prepand = ' Midnight';
    }

    document.getElementById('currentTime').textContent = 
        "Current Time: " + hour + prepand + " : " + minute + " : " + second;
}


setInterval(displayDayAndTime, 1000);
