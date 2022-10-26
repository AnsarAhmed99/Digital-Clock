function showTime(){

    var date= new Date();
    var hh =date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var session=document.getElementById("session");

    
    if(hh >= 12){
        session.innerHTML = "PM";
    }

    else{
        session.innerHTML= "AM";
    }

    if(hh > 12){
        hh = hh - 12;
    }

    document.getElementById("hours").innerHTML=hh;
    document.getElementById("minutes").innerHTML=mm;
    document.getElementById("seconds").innerHTML=ss;

}

setInterval(showTime, 10);
