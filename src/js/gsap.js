
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
ani1.fromTo('.portfolio__title__line', { width: '0.18vw', height: '0' }, { width: '0.18vw', height: '10.3vw' })
    .from('.portfolio__title h2 .title.t1', { xPercent: 150, duration: 2 }, 'text')
    .from('.portfolio__title h2 .title.t2', { xPercent: -150, duration: 2 }, 'text')
    .to('.portfolio__title__line', { width: '0.18vw', height: '0' })
    .to('.portfolio__title__line', { width: '0.18vw', height: '0' })
    .to('.portfolio__title__line', { width: '0', height: '0' })
    .to('.portfolio__title__line', { width: '0', height: '0' });

ScrollTrigger.create({
    animation: ani1,
    trigger: '.portfolio__desc.t0',
    start: 'top -31%',
    end: '+=4500vh',
    scrub: true,
    markers: false,
});
const ani2 = gsap.timeline();
ani2.to('.portfolio__desc', { scale: 0.65, ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.5 }, 'a');
ani2.to('.title.t1', { yPercent: 15, ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.5 }, 'a');
ani2.to('.title.t2', { yPercent: -15, ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.5 }, 'a');
ani2.to('.scrolldesc', { opacity: 0, ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.5 }, 'a');
ani2.fromTo('.portfolio__item.t1 ul li', { xPercent: 480 }, { xPercent: -609, delay: 0.24, duration: 0.4 }, 'a');

ani2.fromTo('.const1', { yPercent: -105 }, { yPercent: 0, ease: 'expo.inOut', easeParams: [0.1, 0.2] }, 'b');
ani2.fromTo('.const2', { yPercent: 105 }, { yPercent: 0, ease: 'expo.inOut', easeParams: [0.1, 0.2] }, 'b');
ani2.to('.portfolio__desc',{ scale: 0.45, ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.35, delay: 0.07 },'b',);
ani2.to('.title.t1', { yPercent: 55, ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.4, delay: 0.1 }, 'b');
ani2.to('.title.t2', { yPercent: -55, ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.4, delay: 0.1 }, 'b');

ani2.to('.title.t1', { opacity: 0 }, 'c');
ani2.to('.title.t2', { opacity: 0 }, 'c');
ani2.to('.portfolio__item.t2 ul li', { yPercent: -702, duration: 1 }, 'c');
ani2.to('.portfolio__desc',{ scale: 0.31, ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.35, delay: 0.5 },'c',);
ani2.fromTo('.my__desc',{ xPercent:-200 ,ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.35, delay: 0.5 },
{ xPercent:0 ,ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.35, delay: 0.5 },'c',);
ani2.fromTo('.my__desc2',{ xPercent:-400 ,ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.35, delay: 0.5 },
{ xPercent:-50 ,ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.35, delay: 0.5 },'c',);
ani2.fromTo('.my__img',{ xPercent:-200 ,ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.35, delay: 0.5 },
{ xPercent:0 ,ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.35, delay: 0.5 },'c',);
ani2.fromTo('.my__link',{ xPercent:200 ,ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.35, delay: 0.5 },
{ xPercent:0 ,ease: 'expo.inOut', easeParams: [0.1, 1], duration: 0.35, delay: 0.5 },'c',);

ScrollTrigger.create({
    animation: ani2,
    trigger: '.portfolio__desc.t0',
    start: '4500vh',
    end: '27500vh',
    scrub: true,
    // pin: true,
    // anticipatePin: 1,
    markers: false,
});