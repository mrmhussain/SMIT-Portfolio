
function turnOn(){
    var bulb = document.getElementById('bulb');
    bulb.src = 'bulbON.PNG';
    var body = document.getElementById('body');
    body.style.backgroundColor='black';
    var heading1 = document.getElementById('heading1');
    heading1.style.color='white';
}
function turnOff(){
    var bulb = document.getElementById('bulb');
    bulb.src = 'bulbOFF.PNG';
    var body = document.getElementById('body');
    body.style.backgroundColor='white';
    var heading1 = document.getElementById('heading1');
    heading1.style.color='black';
}
