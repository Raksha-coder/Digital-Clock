

function clock(){
    
    let hours = document.getElementById("hour");
    let minutes =document.getElementById("min");
    let seconds = document.getElementById("sec");
    let am = document.getElementById("AM");

    let time = new Date();
    let a = time.getHours();
    let b = time.getMinutes();
    let c = time.getSeconds();

    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;

    if(hours.innerHTML == 0){
        hours.innerHTML = 12;
    }
    if(hours.innerHTML > 12){
        hours.innerHTML = hours.innerHTML - 12;
        am.innerHTML = "PM";
    }
}

setInterval(clock,1000);

function makediv(){

    var container = document.createElement("div");
    container.className = "grid-item";
    container.id = "dynamic-block";

    // append this container
    document.getElementByClassName("grid-container1").appendChild(container);

    //to display the selected item

    var inValue1 = document.getElementById("wakeUpTimeSelector");
    var value = inValue1.options[inValue1.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML = "wake up time " + value;

    var inValue2 = document.getElementById("wakeUpTimeSelector2");
    var value = inValue2.options[inValue2.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML = "wake up time " + value;

    var inValue3 = document.getElementById("wakeUpTimeSelector3");
    var value = inValue3.options[inValue3.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML = "wake up time " + value;
}

function settime(){
    // for wake up
    let n = document.getElementById("wakeUpTimeSelector").value;

    let hh = new Date().getHours();  //current time

    if(n == hh){
        document.getElementById("img-container").style.backgroundImage = "url(assets/setwakeUp.jpg)";
        document.getElementById("text-cotainer").innerHTML = "Buddy, It's time to shine.";
    }

    //for lunch
    let l = document.getElementById("wakeUpTimeSelector2").value;
    if(l == hh){
        document.getElementById("img-container").style.backgroundImage = "url(assets/lunchtime.jpg)";
        document.getElementById("text-cotainer").innerHTML = "Buddy, let's grab some lunch. ";
    }

    //for nap
    let m = document.getElementById("wakeUpTimeSelector3").value;
    if(m == hh){
        document.getElementById("img-container").style.backgroundImage = "url(assets/naptime.jpg)";
        document.getElementById("text-cotainer").innerHTML = "Buddy, Let's take a nap.";

    }

    makediv();
}
