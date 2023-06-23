const lenis = new Lenis();

lenis.on('scroll', e => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const arrowTimeline = gsap.timeline({ repeat: -1 });

arrowTimeline
// {y: 12, ease: "power1.inOut", repeat: -1, yoyo: true}
  .to('.scrolldesc__arrow', { y: '-20%', opacity: 1, duration: 1 })
  .to('.scrolldesc__arrow', { y: '50%', opacity: 0, duration: 1 });

// 페이지 로드 시 애니메이션 시작
arrowTimeline.play();

const ani1 = gsap.timeline();
ani1.fromTo(".portfolio__title__line", {width: "0.18vw", height: "0" },{width: "0.18vw", height: "10.3vw" })
    .from(".portfolio__title h2 .title.t1", {duration: 5, xPercent:150}, "text")
    .from(".portfolio__title h2 .title.t2", {xPercent:-150,duration: 5}, "text")
    .to(".portfolio__title__line", {width: "0.18vw", height: "0" })
    .to(".portfolio__title__line", {width: "0.18vw", height: "0" })
    .to(".portfolio__title__line", {width: "0", height: "0" })
    .to(".portfolio__title__line", {width: "0", height: "0" })
    .to(".portfolio__title__line", {width: "0", height: "0" })
    .to(".portfolio__title__line", {width: "0", height: "0",duration: 2 })


ScrollTrigger.create({
    animation: ani1,
    trigger: ".portfolio__desc.t0",
    start: "top -31%",
    end: "+=4500",
    scrub: true,
    // pin: true,
    markers: true,
    // anticipatePin: 1
});

const ani2 = gsap.timeline();
ani2.to('.portfolio__desc', { scale: 0.2, duration:10 })
ScrollTrigger.create({
    animation: ani2,
    trigger: '.portfolio__desc.t0',
    start: 'bottom -300%',
    end: '+=7000',
    scrub: true,
    // pin: true,
    // anticipatePin: 1,
    markers: true,
});
