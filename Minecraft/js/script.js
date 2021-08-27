var elemleft = document.querySelector('#left_arm');
var elemright = document.querySelector('#right_arm');
var eyeblink = document.querySelector('#eye_right');
var heart = document.querySelector('#heart');
var dog = document.querySelector(".position");
var dogsbark = $('../barking.mp3');
function HandsUP() {
    window.addEventListener("click", function(event){
        elemleft.style.cssText = "position: absolute; left: 409px; top: 165px; width: 100px; transform: rotate(90deg);"
    });
    window.addEventListener("click", function(event){
        elemright.style.cssText = "position: absolute; left: 1027px; top: 165px; width: 100px; transform: rotate(90deg);"
    });
};
function HandsDown(){
    window.addEventListener("click", function(event){
        elemleft.style.cssText = elemleft;
    });
    window.addEventListener("click", function(event){
        elemright.style.cssText = elemright;
    });
}
function BlinkR(){
    eyeblink.style.cssText = "height: 5px; background: black; width: 60px;";
    document.querySelector('#rpupil').style.cssText = "display:none;";
}
function StopBlink() {
    eyeblink.style.cssText = eyeblink;
    document.querySelector('#rpupil').style.cssText = "display:block;"; 
}
function Blink(){
    timeoutId = setTimeout(BlinkR, 10);
    timeoutId2 = setTimeout(StopBlink, 300);
}
function HeartPulsing(){
    heart.style.cssText = "background-color: red; display: block;"
}
function HeartStop(){
    heart.style.cssText = "background-color: transparent; display: none;"
}
function Heart(){
    HeartPulsing();
    var timeoutId2 = setInterval(Blink, 1500);
    setTimeout(() => { clearInterval(timeoutId2);}, 5000);    
    timeoutId1 = setTimeout(HeartStop, 6000);
}
function CreateDog(){
    dog.style.cssText = "display: block";
    var wow = setInterval(() => {
        document.getElementById('mySound').play();
      }, 1000);
    setTimeout(() => { clearInterval(wow); }, 6000);
}
function BanishDog(){
    dog.style.cssText = "display: none";
    $('#mySound').remove();
}

submit.onclick = function(){
    var text = $('#field').val();
    if(text!==''){
        $('#mytext').append(
            '<span id="MyMessage">'+
                text +
            '</span>'
        );
        $('#field').val(''); 
    }else if(text==''){
        $('#field').focus();
        alert('Type some text!')
    }
}