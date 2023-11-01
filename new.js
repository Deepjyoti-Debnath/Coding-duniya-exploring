
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// })



// Shery.imageEffect(".photo", {
//   style:5,
//  config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0425806451612902},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":10.02,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":0.83,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.4,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":26}},"discard_threshold":{"value":0.8,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.46,"range":[0,2]},"noise_scale":{"value":17.36,"range":[0,100]}},
//   gooey:true
// })

var tl = gsap.timeline()
tl.from(".logo h1 , .items a ,.right-menu i",{
  y:100,
  opacity:0,
  duration:1.5,
  delay:0.3,
  // stagger:0.1
})
tl.from(".main .main-left .l1",{
  x:-300,
  duration:0.5,
  stagger:0.2
})

gsap.to("#r5 .box",{
  y:-350,
  duration:1,
  rotate:360,
  repeat:-1,
  yoyo:true
})

gsap.to(".page2 h1",{
  color:"green",
  opacity:"0.5",
  transform:"translateX(-200%)",
  fontWeight:"99",
  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    // markers:true,
    start:"top 20%",
    end:"top -200%",
    scrub:1,
    pin:true
  }
})
gsap.from(".front",{
  y:600,
  opacity:1,
  duration:2,
  delay:0.5,
})



var home = document.getElementById("home");
var about = document.getElementById("about");
var ser = document.getElementById("service");
var con = document.getElementById("contact");


let side1 = document.getElementById("side1");
let side2 = document.getElementById("side2");
let side3 = document.getElementById("side3");
let side4 = document.getElementById("side4");

home.addEventListener('mouseenter',function(){
  side1.style.opacity="1"
  side2.style.opacity="0"
  side4.style.opacity="0"
  side3.style.opacity="0"
})
side1.addEventListener('mouseleave',function(){
  side1.style.opacity="0"
})

about.addEventListener('mouseenter',function(){
  side2.style.opacity="1"
  side1.style.opacity="0"
  side3.style.opacity="0"
})
side2.addEventListener('mouseleave',function(){
  side2.style.opacity="0"
})

ser.addEventListener('mouseenter',function(){
  side3.style.opacity="1"
  side1.style.opacity="0"
  side2.style.opacity="0"
  side4.style.opacity="0"
})
side3.addEventListener('mouseleave',function(){
  side3.style.opacity="0"
})

con.addEventListener('mouseenter',function(){
  side4.style.opacity="1"
  side1.style.opacity="0"
  side2.style.opacity="0"
  side3.style.opacity="0"
})
side4.addEventListener('mouseleave',function(){
  side4.style.opacity="0"
})

var fright = document.querySelector(".f1-right");

fright.addEventListener('mouseenter',function(){
  fright.style.backgroundImage="url(./f2.webp)"

})
fright.addEventListener('mouseleave',function(){
  fright.style.backgroundImage="url(./f1.webp)"
  
})

let nav1 = document.querySelector('#goo');
let nav2 = document.querySelector('#mic');
let nav3 = document.querySelector('#ama');
let nav4 = document.querySelector('#face');

let goo = document.querySelector('.goo');
let goo2 = document.querySelector('.gooo');

let mic = document.querySelector('.mic');
let mic2 = document.querySelector('.micc');

let ama = document.querySelector('.ama');
let ama2 = document.querySelector('.amaa');

let face = document.querySelector('.face');
let face2 = document.querySelector('.facee');

nav1.addEventListener('mouseenter',function(){
  goo.style.color="green"
  goo2.style.color="green"

})
nav1.addEventListener('mouseleave',function(){
  goo.style.color=""
  goo2.style.color=""

})

nav2.addEventListener('mouseenter',function(){
  mic.style.color="green"
  mic2.style.color="green"

})
nav2.addEventListener('mouseleave',function(){
  mic.style.color=""
  mic2.style.color=""

})

var future = document.querySelector(".movie");
var h1 = document.querySelector(".movie h1");
var video = document.querySelector("video");
var bg = document.querySelector(".future");


future.addEventListener('mouseenter',function(){
  video.style.opacity="0.8"
  h1.style.color="black"
  future.style.opacity="0.5"
  h1.style.fontWeight="400"
  future.style.boxShadow="0 0 20px white"
 
})
future.addEventListener('mouseleave',function(){
  video.style.opacity="0"
  h1.style.color="#364d47"
  future.style.opacity="1"
  h1.style.fontWeight="999"
  future.style.boxShadow="0 0 20px #364d47"
  // bg.style.backgroundColor="white"
})

const nav = document.querySelector('.right-menu');
const navigation = document.querySelector('.navigation');

const toggleNavbar = ()=>{
  navigation.classList.toggle("active")
}

nav.addEventListener('click', ()=> toggleNavbar())

