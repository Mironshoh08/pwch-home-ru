let scrollSection = document.querySelector(".section2__row")
let fadeRight = document.querySelectorAll('.fade-right')

window.addEventListener("scroll", FadeRightAnim)
function FadeRightAnim() {
    fadeRight.forEach(fadeRights => {
        if (this.scrollY >= (scrollSection.offsetTop - scrollSection.offsetHeight * 1.5)) {
            fadeRights.classList.add("active")
        }
        else {
            fadeRights.classList.remove("active")
        }
    });
}
let fadeLeft = document.querySelectorAll('.fade-left')

window.addEventListener("scroll", FadeRightAnim1)
function FadeRightAnim1() {
    fadeLeft.forEach(fadeRights1 => {
        if (this.scrollY >= (scrollSection.offsetTop - scrollSection.offsetHeight * 1.5)) {
            fadeRights1.classList.add("active")
        }
        else {
            fadeRights1.classList.remove("active")
        }
    });
}
/* top btn */
var target = document.querySelector(".section3__container");
var target1 = document.querySelector(".footer");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;
function callback(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            scrollToTopBtn.classList.add("showBtn");
        } else {
            scrollToTopBtn.classList.remove("showBtn");
        }
    });
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
let observer = new IntersectionObserver(callback);
observer.observe(target1);


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true, 
    pagination: {

        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
/* section3 */


let parallaxBox = document.querySelector(".section3__div02")
let parallaxBall = document.querySelectorAll(".card01__image01")

parallaxBox.addEventListener("mousemove", (a) => {
    // console.log(e);
    parallaxBall.forEach(balls => {
        let speed = balls.getAttribute("data-speed")
        const X = (window.innerWidth - a.pageX * speed) / 75
        const Y = (window.innerWidth - a.pageY * speed) / 75

        balls.style.transform = `translate(${X}px, ${Y}px)`
    });

})


let parallaxBox1 = document.querySelector(".section3__div03")
let parallaxBall1 = document.querySelectorAll(".card01__image02")

parallaxBox1.addEventListener("mousemove", (b) => {
    parallaxBall1.forEach(balls1 => {
        let speed = balls1.getAttribute("data-speed")
        const X = (window.innerWidth - b.pageX * speed) / 75
        const Y = (window.innerWidth - b.pageY * speed) / 75

        balls1.style.transform = `translate(${X}px, ${Y}px)`
    });

})
let parallaxBox2 = document.querySelector(".section3__div04")
let parallaxBall2 = document.querySelectorAll(".card01__image03")

parallaxBox2.addEventListener("mousemove", (c) => {
    parallaxBall2.forEach(balls1 => {
        let speed = balls1.getAttribute("data-speed")
        const X = (window.innerWidth - c.pageX * speed) / 75
        const Y = (window.innerWidth - c.pageY * speed) / 75

        balls1.style.transform = `translate(${X}px, ${Y}px)`
    });

})


let parallaxBox3 = document.querySelector(".section3__div05")
let parallaxBall3 = document.querySelectorAll(".card01__image04")

parallaxBox3.addEventListener("mousemove", (e) => {
    parallaxBall3.forEach(balls1 => {
        let speed = balls1.getAttribute("data-speed")
        const X = (window.innerWidth - e.pageX * speed) / 75
        const Y = (window.innerWidth - e.pageY * speed) / 75

        balls1.style.transform = `translate(${X}px, ${Y}px)`
    });

})

let parallaxBox4 = document.querySelector(".section3__div06")
let parallaxBall4 = document.querySelectorAll(".card01__image05")

parallaxBox4.addEventListener("mousemove", (d) => {
    parallaxBall4.forEach(balls1 => {
        let speed = balls1.getAttribute("data-speed")
        const X = (window.innerWidth - d.pageX * speed) / 75
        const Y = (window.innerWidth - d.pageY * speed) / 75

        balls1.style.transform = `translate(${X}px, ${Y}px)`
    });

})

let parallaxBox5 = document.querySelector(".section3__div07")
let parallaxBall5 = document.querySelectorAll(".card01__image06")

parallaxBox5.addEventListener("mousemove", (f) => {
    parallaxBall5.forEach(balls1 => {
        let speed = balls1.getAttribute("data-speed")
        const X = (window.innerWidth - f.pageX * speed) / 75
        const Y = (window.innerWidth - f.pageY * speed) / 75

        balls1.style.transform = `translate(${X}px, ${Y}px)`
    });

})

let scrollSection1 = document.querySelector(".section1__card01")
let fadeRight1 = document.querySelectorAll('.fade-botoom')

window.addEventListener("scroll", FadeRightAnim2)
function FadeRightAnim2() {
    fadeRight1.forEach(fadeRights2 => {
        if (this.scrollY >= (scrollSection1.offsetTop - scrollSection1.offsetHeight * 1)) {
            fadeRights2.classList.add("active")
        }
        else {
            fadeRights2.classList.remove("active")
        }

    });
}

let scrollSection2 = document.querySelector(".section1__card02")
let fadeRight2 = document.querySelectorAll('.fade-botoom1')

window.addEventListener("scroll", FadeRightAnim3)
function FadeRightAnim3() {
    fadeRight2.forEach(fadeRights3 => {
        if (this.scrollY >= (scrollSection2.offsetTop - scrollSection2.offsetHeight * 1)) {
            fadeRights3.classList.add("active")
        }
        else {
            fadeRights3.classList.remove("active")
        }

    });
}   