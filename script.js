function Loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
Loco();

// Create a GSAP animation
gsap.registerPlugin("scrollTrigger")

gsap.to("#header>h1", {
    opacity: 1,
    duration: 1,
    scale: 1
})
gsap.to(".header-para", {
    opacity: 1,
    duration: 1,
    scale: 1
})
gsap.to("#navbar", {
    top: "30px",
    width: "30%",
    duration: 1
})
gsap.to(".about-heading", {
    opacity: 1,
    duration: .2,
    scrollTrigger:{
      trigger: ".about-heading",
      start: "top bottom",
      end: "bottom top", 
      scrub: true, 
       scroller: "#main"
    },
  });
gsap.to(".about-para", {
    opacity: 0.8,
    duration: .2,
    scrollTrigger:{
      trigger: ".about-para",
      start: "top top",
      end: "bottom top", 
      scrub: true, 
       scroller: "#main"
    },
  });
gsap.to(".card-2-heading", {
    opacity: 0.8,
    duration: .2,
    scale:1,
    scrollTrigger:{
      trigger: ".card-2-heading",
      start: "top bottom",
      end: "bottom top", 
      scrub: true, 
       scroller: "#main"
    },
  });
gsap.to(".card-2-para", {
    opacity: 0.8,
    scale:1,
    duration: .2,
    scrollTrigger:{
        trigger: ".card-2-para",
        start: "top bottom",
        end: "bottom top", 
        scrub: true, 
        scroller: "#main"
    },
});
gsap.to(".about-btn", {
    opacity: 0.8,
    scale:1,
    duration: .2,
    scrollTrigger:{
      trigger: ".about-btn",
      start: "top bottom",
      end: "bottom top", 
      scrub: true, 
       scroller: "#main"
    },
  });

//   Page 4
gsap.to(".boxes-heading", {
    opacity: 1,
    duration: .2,
    scrollTrigger:{
      trigger: ".boxes-heading",
      start: "top bottom",
      end: "bottom top", 
      scrub: true, 
       scroller: "#main"
    },
  });
gsap.to(".box-1-1", {
    opacity: 1,
    duration: 2,
    left: "10px",
    stagger: 1,
    scrollTrigger:{
      trigger: ".box-1-1",
      start: "top bottom    ",
      end: "bottom top", 
      scrub: true, 
    //   markers:  true,
       scroller: "#main"
    },
  });
gsap.to(".box-1-2", {
    opacity: 1,
    duration: 2,
    right: "10px",
    stagger: 1,
    scrollTrigger:{
      trigger: ".box-1-2",
      start: "top bottom",
      end: "bottom top", 
      scrub: true, 
    //   markers:  true,
       scroller: "#main"
    },
  });














var cursor = document.querySelector(".cursor")

window.addEventListener("mousemove", function(dets){
    cursor.style.top = dets.y +  "px"
    cursor.style.left = dets.x +  "px"
    
})
var heading = document.getElementById("header")

heading.addEventListener("mouseenter", function(){

        cursor.style.width = 150 +"px"
        cursor.style.height = 150 +"px"
})
heading.addEventListener("mouseleave", function(){

        cursor.style.width = 10 +"px"
        cursor.style.height = 10 +"px"
})


var  page3 = document.getElementById("page3")

page3.addEventListener("mouseenter", function(){
    cursor.style.background = "#4649a8cf";

    cursor.style.width = 150 +"px"
    cursor.style.height = 150 +"px"
})
page3.addEventListener("mouseleave", function(){
    cursor.style.background = "#fff"
    cursor.style.width = 10 +"px"
    cursor.style.height = 10 +"px"
})




// Navbar 
var navbar = document.querySelector("#navbar");
window.addEventListener("scroll", function () {
    if (window.scroll> 0) {
        navbar.style.top = 0;
        navbar.style.background = "Red";
    }
    else {
        navbar.style.top = "20px"
    }
})


var img = document.querySelector(".about-img");

img.addEventListener("mouseenter", function(){
    // console.log("Entered")
    var div = document.createElement("div")
// div.appendChild(card-1)

})
































// var links = document.querySelector(".links")



// forEach(function(){
//     links.addEventListener("mouseenter", function(){
//             // cursor.style.background = "red"
    
//             cursor.style.width = 90 +"px"
//             cursor.style.height = 90 +"px"
//     })
//     links.addEventListener("mouseleave", function(){
//             // cursor.style.background = "red"
    
//             cursor.style.width = 20 +"px"
//             cursor.style.height = 20 +"px"
//     })

// })