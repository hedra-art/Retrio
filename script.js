// Loading Screen

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 2200);

});


// Scroll Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

sections.forEach(section=>{

observer.observe(section);

});


// زر مشاركة الصفحة

function shareWebsite(){

if(navigator.share){

navigator.share({

title:"Retrio Photobooth",

text:"زور موقع Retrio Photobooth",

url:window.location.href

});

}else{

alert("المتصفح لا يدعم المشاركة");

}

}
