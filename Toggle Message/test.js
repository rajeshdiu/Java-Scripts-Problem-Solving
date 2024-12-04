let isMessageVisible = true;
let intervalId = null; 

function getFormattedDateTime() {
    const today = new Date();
    const day = today.getDay();

    let hour = today.getHours();
    const minute = String(today.getMinutes()).padStart(2, '0');
    const second = String(today.getSeconds()).padStart(2, '0');

    let prepand = hour >= 12 ? " PM" : " AM";
    hour = hour >= 12 ? hour - 12 : hour;
s
    if (hour === 0 && prepand === " PM") {
        hour = 12;
        prepand = " Noon";
    }
    if (hour === 0 && prepand === " AM") {
        hour = 12;
        prepand = " Midnight";
    }

    const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return `Today is ${dayList[day]} and Current Time: ${hour}${prepand} : ${minute} : ${second}` ;
}

function toggleMessage() {
    const demoElement = document.getElementById("demo");
    const buttonElement = document.getElementById("showMessage");

    if (isMessageVisible) {
        demoElement.textContent = getFormattedDateTime();
        buttonElement.textContent = "Hide Message";

        if (!intervalId) {
            intervalId = setInterval(() => {
                demoElement.textContent = getFormattedDateTime();
            }, 1000);
        }
    } 
    
    else {
        demoElement.textContent = "";
        buttonElement.textContent = "Show Message";

        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    isMessageVisible = !isMessageVisible;
}

// Initialize the button and add event listener
document.getElementById("showMessage").textContent = "Show Message";
document.getElementById("showMessage").addEventListener("click", toggleMessage);
