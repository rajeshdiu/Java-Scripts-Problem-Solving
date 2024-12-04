function pageLoaded() {
    console.log("Page has finished loading.");
    setInterval(changeTextColor, 3000); 
}

let colorIndex = 0; 

function changeTextColor() {

    const textElement = document.getElementById('textChange');

    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

    textElement.style.color = colors[colorIndex];

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
}


function clickButton() {
    alert("Button clicked! Now, you can interact more with this page.");
}

function changeColorOnHover() {
    const boxElement = document.getElementById('hoverBox');
    boxElement.style.backgroundColor = 'red'; 
    boxElement.style.transform = 'scale(1.5)'; 
}

// When the mouse leaves the box
function resetColor() {
    const boxElement = document.getElementById('hoverBox');
    boxElement.style.backgroundColor = 'lightblue'; // Reset background color
    boxElement.style.transform = 'scale(1)'; // Reset zoom effect
}

// When the input value is changed
function handleChange(event) {
    alert("You changed the input to: " + event.target.value);
}

// When a key is pressed on the keyboard
function logKey(event) {
    console.log('Key pressed: ' + event.key);
}

// When the mouse hovers over the image
function changeImageOnHover() {
    document.querySelector('.image').src = "https://via.placeholder.com/100/ff7f7f";
}

// When the mouse leaves the image
function resetImage() {
    document.querySelector('.image').src = "https://via.placeholder.com/100";
}