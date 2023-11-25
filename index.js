drumKeyLength = document.querySelectorAll(".drum").length;

for(let i=0; i<drumKeyLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        if(i===0){
            let audio = new Audio('sounds/crash.mp3');
            audio.play();
        }
        else if(i===1){
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        }
        else if(i===2){
            audio = new Audio('sounds/snare.mp3');
            audio.play();
        }
        else if(i===3){
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        }
        else if(i===4){
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        }
        else if(i===5){
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        }
        else if(i===6){
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        }
    });
}

