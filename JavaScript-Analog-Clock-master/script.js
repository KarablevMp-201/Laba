var innerCircle = document.getElementById("inner-circle");


//create  minute scale
for(let i = 0; i<60; i++){
  var diameter = document.createElement("div");
  var M = document.createElement("div");
  diameter.setAttribute("style", "position: absolute; top: 49.5%; left: 0%; width: 100%; height: 1%;");
  M.setAttribute("style", "position:absolute;background-color: black; top: 0%; left:97%; width:3%; height:100%;");
  diameter.style.transform = `rotate(${i*360/60}deg)`;
  diameter.appendChild(M);
  innerCircle.appendChild(diameter);
}

//create hour scale
for(let i = 0; i<12; i++){
  var diameter = document.createElement("div");
  var H = document.createElement("div");
  diameter.setAttribute("style", "position: absolute; top: 48.5%; left: 0%; width: 100%; height: 3%;");
  H.setAttribute("style", "position:absolute;background-color: black; top: 0%; left:95%; width:5%; height:100%;");
  diameter.style.transform = `rotate(${i*360/12}deg)`;
  diameter.appendChild(H);
  innerCircle.appendChild(diameter);
}

var secondHand = document.getElementById("second-hand");
var minuteHand = document.getElementById("minute-hand");
var hourHand = document.getElementById("hour-hand");

//set hands function (using current time)
function setHands(){
  var d = new Date();
  var sec = d.getSeconds();
  var min = d.getMinutes();
  var hour = d.getHours()%12; // % needed because there is only 12 hours on analog watch

  var secondHandAngle = (sec*360)/60-90; //-90 because CSS set hands horizontaly when angle is 0deg
  var minuteHandAngle = (min*360)/60-90;
  var hourHandAngle = (hour*360)/12+(min*30)/60-90; //(min*30)/60 added simulate real analog watch

  secondHand.style.transform = `rotate(${secondHandAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandAngle}deg)`;
  hourHand.style.transform = `rotate(${hourHandAngle}deg)`;
  if (sec/60 > 0.5 && sec/60 < 1.0) 
    {
        document.querySelector("#photo").style.opacity = "1";
    } 
  else 
    {
        document.querySelector("#photo").style.opacity = "0";
    }
}


setHands();
setInterval(function(){setHands();}, 1000); //call setHands() each 1 second








