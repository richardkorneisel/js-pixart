let pushButton = document.querySelector('#set-color');
pushButton.addEventListener('click', determineColor);


function determineColor (event) {
event.preventDefault();
let colorValue = document.querySelector('#color-field').value;
console.log (colorValue);
document.querySelector('.brush').style.background = colorValue
}
