function show_list() {
    var show = document.getElementById("drop-list");

    if (show.style.display == "block") {
        show.style.display = "none";
    } else {
        show.style.display = "block";
    }
}
function show_list_2() {
    var show_2 = document.getElementById("drop-list-2");

    if (show_2.style.display == "block") {
        show_2.style.display = "none";
    } else {
        show_2.style.display = "block";
    }
}
function show_list_3() {
    var show_3 = document.getElementById("drop-list-3");

    if (show_3.style.display == "none") {
        show_3.style.display = "block";
    } else {
        show_3.style.display = "none";
    }
}
function show_list_4() {
    var show_4 = document.getElementById("drop-list-4");

    if (show_4.style.display == "none") {
        show_4.style.display = "block";
    } else {
        show_4.style.display = "none";
    }
}
/*
window.onclick = function (event) {
    if (event.target.matches('.drop-click')) {
        var drop = document.getElementById('drop-list')
        if (drop.style.display == "block") {
            drop.style.display = "none";
        } else {
            drop.style.display = "block";
        }

    }
}
window.onclick = function (event) {
   if (!event.target.matches('.drop-click')) {
        var drop = document.getElementById('drop-list')
        drop.style.display = "block";

    }
} */

function night_mode(){
    var img = document.getElementById("mode-toggle-img");
    var body = document.body;



    if(body.classList.toggle("dark")){
        if(img.src == "mode-switch.png"){
        img.src = "toggle-light.png";
        }
    }
    
    
}