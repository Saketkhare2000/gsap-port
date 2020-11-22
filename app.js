
//     .from('.front-text', { x: innerWidth * 1, offset: '-+=1' , duration:3})

// gsap.to()... infinity and beyond!
// For more check out greensock.com
// var totalWidth = 362 * 5;

// var direction = 1

// var mod = gsap.utils.wrap(0, totalWidth);

// var tl = gsap.timeline({
//   paused: true,
//   defaults: {
//     ease: 'linear',
//     repeat: 0,
//   }
// })

// tl.to('.front-text', {
//   x: 700 * direction,
//   duration: 10,
//   modifiers: {
//     x: x => mod(parseFloat(x)) + "px"
//   },
// })

// ScrollTrigger.create({
//             trigger: ".hero",
//             start: "top top",
//             end: "bottom bottom",
//             markers: true,
//             pin:true,
//             scrub:true,
//             onEnter: () => {
//               tl.play();
//             },
//             onLeave: () => {
//               tl.pause()
//             },
//             onUpdate: self => {
//                     tl.timeScale(self.getVelocity() / 100);
//               direction = self.direction
              
//               console.log(direction)
//             }
//         });

gsap.to('.front-text', {
    xPercent:70,
    ease: "power2",
    scrollTrigger: {
      trigger: ".hero",
      start: "top center",
      end: "bottom top",
      scrub: true,
      markers:true
    }
  })
