let controller;
let slideScene;

const animateSlides = ()=>{
    //initial controller
    controller = new ScrollMagic.Controller();

    //select items
    const sliders = document.querySelectorAll('.slide');
    const nav = document.querySelector('.nav-header');

    //loop over slides

    sliders.forEach(slide =>{
        const revealImg = slide.querySelector('.reveal-img');
        const img = slide.querySelector('img');
        const revealText = slide.querySelector('.reveal-text');
        //gsap
        const slideTl = gsap.timeline({defaults: {duration:1, ease: 'power2.inOut'}});
        //createTimeLine
        slideTl.fromTo(revealImg, {x:'0%'}, {x:'100%'});
        slideTl.fromTo(img, {scale: '2'},{scale: '1'}, '-=1');
        slideTl.fromTo(revealText,{x:'0%'}, {x:'100%'}, '-=0.75');
        slideTl.fromTo(nav, {y:'-100%'}, {y:'0%'}, '-=1');
        //create Scene
        

    })


}

animateSlides()


