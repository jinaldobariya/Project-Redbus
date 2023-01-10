function myFunction(no) {
    let pic;

    if (no == 0) {
        pic = "image/mob1.png"
        // document.getElementById("step1").style.backgroundColor = "black";
    }
    else if (no == 1) {
        pic = "image/mob2.png"
        // document.getElementById("step2").style.backgroundColor = "black";
    }
    else if (no == 2) {
        pic = "image/mob3.png"
        // document.getElementById("step3").style.backgroundColor = "black";
    }
    else if (no == 3) {
        pic = "image/mob4.png"
        // document.getElementById("step4").style.backgroundColor = "black";
    }
    else if (no == 4) {
        pic = "image/mob5.png"
        // document.getElementById("step5").style.backgroundColor = "black";
    }
    document.getElementById('mob-imgs').src = pic;

}