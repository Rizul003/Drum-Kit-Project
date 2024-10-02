var numberOfDrumButtons = document.querySelectorAll(".drum").length;  

for(var i = 0; i<numberOfDrumButtons; i++){
 
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // alert("I got clicked!");
        // this is to play a sound.
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
     //this.style.color = "white"; // this is to go to all buttons and style is to if we click them they change color to white we done this so that we can play diff sounds on diff buttons.
     //DETECTING BUTTON PRESS.
     var buttonINNERHTML =this.innerHTML; 
     makeSound(buttonINNERHTML)
     buttonAnimation(buttonINNERHTML)
    //  switch (buttonINNERHTML){
   
    //     case "u":
    //         var audio = new Audio("sounds/tom-1.mp3");
    //     audio.play();  
    //     break;

    //     case "k":
    //         var audio = new Audio("sounds/crash.mp3");
    //         audio.play();
    //         break;
    //         case "i":
    //             var audio = new Audio("sounds/tom-2.mp3");
    //             audio.play();
    //             break;
    //             case "s":
    //                 var audio = new Audio("sounds/tom-3.mp3");
    //                 audio.play();
    //                 break;
    //                 case "s":
    //                     var audio = new Audio("sounds/tom-4.mp3");
    //                     audio.play();
    //                     break;
    //                     case "m":
    //                         var audio = new Audio("sounds/snare.mp3");
    //                         audio.play();
    //                         break;
    //                         case "e":
    //                             var audio = new Audio("sounds/kick-bass.mp3");
    //                             audio.play();
    //                             break;

    //                             default:console.log(buttonINNERHTML);
                                                            


    // }



    });
}
//DETECTING KEY PRESS
document.addEventListener("keypress", function(event){ //event is basically to tell which key is pressed in console.
//    console.log(event);
makeSound(event.key);
buttonAnimation(event.key);
});
function makeSound(key){
    switch (key){
   
        case "u":
            var audio = new Audio("sounds/tom-1.mp3");
        audio.play();  
        break;

        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
                case "s":
                    var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
                    case "d":
                        var audio = new Audio("sounds/tom-4.mp3");
                        audio.play();
                        break;
                        case "j":
                            var audio = new Audio("sounds/snare.mp3");
                            audio.play();
                            break;
                            case "k":
                                var audio = new Audio("sounds/kick-bass.mp3");
                                audio.play();
                                break;

                                default:console.log(buttonINNERHTML);
    }
}
function buttonAnimation(currentKey){
     var activeButton =  document.querySelector("." + currentKey)
     activeButton.classList.add("pressed");

     setTimeout(function(){
        activeButton.classList.remove("pressed");
     }, 100);
}

// document.querySelector(".drum").addEventListener("click", function(){
//     alert("CHAL NA OE");
// });
//document.querySelector("button").addEventListener("click", handleClick); //query selector button will just give us the w button and event listner have 2 parameters 
// 1st what type we want like we want it to tell us if it will be clicked so we use"click" and 2nd is in which function we have to call it.

//document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked!");
// };   IT IS A BETTER WAY TO WRITE.

//  function handleClick(){
// alert("I got clicked!"); // we made this empty function just so that event listner can be called.
// }
// AND NOW TO ADD TO ALL BUTTONS WE WILL USE LOOP.

//JQUERY is basically the short form for java script
// document.querySelector("h1") can be written as $("h1")
// $ is short form of document.querySelector this is jQuery.
/* And now if we want to change the color we will wirte
$("h1").css("color" , "green")  that is first the property and then what change we have to make
and now if we make a class in css we can add in jquery
like in css .big-title{
    color : yellow;
    font-size : 50rem;
}
 and to add in jquery write this
 $("h1").addClass("big-title")
 and to remove this
 $("h1").removeClass("big-title")

*/


