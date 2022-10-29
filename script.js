// import Vue framework

// var vueScript = document.createElement('script');
// vueScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js');
// document.head.appendChild(vueScript);

// //import JQuery

// var jQueryScript = document.createElement('script');
// jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
// document.head.appendChild(jQueryScript)


//Lock ScrollMouse
// window.onscroll = () => {
//     window.scrollTo(0, 0);
// };



// function disableScroll() {
//     document.body.classList.add("stop-scrolling");
// }
// function enableScroll() {
//     document.body.classList.remove("stop-scrolling");
// }
// modal
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnOpenModal = document.querySelector('.button_register');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnOpenModal.addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// clound parallax Scroll

// let big_logo = document.getElementById('big_logo');
let clound_tleft = document.getElementById('clound_tleft');
let clound_bleft = document.getElementById('clound_bleft');
let clound_right = document.getElementById('clound_right');
let busA = document.getElementById('busA');
let busB = document.getElementById('bus');
let driver1 = document.getElementById('driver1');
let driver2 = document.getElementById('driver2');
let car1 = document.getElementById('car1');
let car2 = document.getElementById('car2');
let bulur = document.getElementById('bulur');

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none"
})

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    // big_logo.style.top = value * -0.25 + 'px';
    clound_tleft.style.left = value * 2.5 + 'px';
    clound_bleft.style.left = value * 0.75 + 'px';
    clound_right.style.left = value * 0.5 + 'px';
    busA.style.left = (value * 1) + 'px';
    
    console.log(value);

    busB.style.top =  880;
    if (value > 1300) {
        busB.style.top = value - 420 ;
    }

    driver1.style.right = value * 0.35;
    driver2.style.right = value * 0.35;
    // console.log(value * 0.35);
    if (value * 0.35 > 443) {
        driver1.style.right = -100 + '%';
        driver2.style.right = -100 + '%';
    }

    if (value > 1800) {
        a = value - 1800;
        car1.style.right = a * 0.3 + 'px';
        car2.style.left = a * 0.3 + 'px';
    }

    //Dialog animation 
    let app = document.getElementById('app');
    if (value < 1900) {
        app.style.opacity = 0;
        app.style.transition = '0.25s';
        app.style.marginLeft = '0vw';
    } else {
        app.style.opacity = 1;
        app.style.transition = '0.25s';
        app.style.marginLeft = '24vw';
    }


    let dialog1 = document.getElementById('dialog1');
    if (value < 2800) {
        dialog1.style.opacity = 0;
        dialog1.style.scale = 0.5;
        dialog1.style.transition = '0.25s';
    } else {
        dialog1.style.opacity = 1;
        dialog1.style.scale = 1;
        dialog1.style.transition = '0.25s';
    }

    let dialog2 = document.getElementById('dialog2');
    if (value < 4300) {
        dialog2.style.opacity = 0;
        dialog2.style.scale = 0.5;
        dialog2.style.transition = '0.25s';
    } else {
        dialog2.style.opacity = 1;
        dialog2.style.scale = 1;
        dialog2.style.transition = '0.25s';
    }

    let dialog3 = document.getElementById('dialog3');
    if (value < 6550) {
        dialog3.style.opacity = 0;
        dialog3.style.scale = 0.5;
        dialog3.style.transition = '0.25s';
    } else {
        dialog3.style.opacity = 1;
        dialog3.style.scale = 1;
        dialog3.style.transition = '0.25s';
    }

    let dialog4 = document.getElementById('dialog4');
    if (value < 8890) {
        dialog4.style.opacity = 0;
        dialog4.style.scale = 0.5;
        dialog4.style.transition = '0.25s';
    } else {
        dialog4.style.opacity = 1;
        dialog4.style.scale = 1;
        dialog4.style.transition = '0.25s';
    }

    let br1 = document.getElementById('br1');
    let br2 = document.getElementById('br2');
    if (value < 8200) {
        // a = value - 3400;
        br1.style.transformOrigin = "left bottom";
        br2.style.transformOrigin = "right bottom";
        br1.style.transition = '2s';
        br2.style.transition = '2s';
        br1.style.rotate = 0 + 'deg';
        br2.style.rotate = 0 + 'deg';
    } else {
        br1.style.transformOrigin = "left bottom";
        br2.style.transformOrigin = "right bottom";
        br1.style.transition = '2s';
        br2.style.transition = '2s';
        br1.style.rotate = -45 + 'deg';
        br2.style.rotate = 45 + 'deg';
    }

});
// function toggle(){
//     var blur = document.getElementById('blur');
//     blur.classList.toggle('active')
//     var popup = document.getElementById('popup');
//     popup.classList.toggle('active')
// }

// olded
function div_show(){
    bulur.style.visibility = "visible";
    document.getElementById('abc').style.display = "block";
    document.body.classList.add("stop-scrolling");
    //Unlock ScrollMouse
    // window.onscroll = () => {};
};
function div_show2(){
        
    document.getElementById('abc2').style.display = "block";
    document.getElementById('abc').style.display = "none";
    // document.body.classList.add("stop-scrolling");

    //Unlock ScrollMouse
    // window.onscroll = () => {};
};

function div_hide(){
    document.getElementById('abc').style.display = "none";
    document.getElementById('abc2').style.display = "none";
    document.body.classList.remove("stop-scrolling");
    bulur.style.visibility = "hidden";
}
// old

// function scrollUnlock() {
//     window.onscroll = () => {};
// }

