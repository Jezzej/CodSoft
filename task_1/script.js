
const animationTargets = [
  { targets: "#nav img , #nav h3, #nav h4", props: { y: -100, duration: 1, delay: 0.5, 
    opacity: 0, stagger: 0.2 } },
  { targets: "#menubar, #menubar tr", props: { x: 30, opacity: 0, stagger: 0.3 } },
  { targets: "#bigtext", props: { x: -10, opacity: 0, stagger: 0.3 } },
  //{ targets: "#number h1", props:{x: -10,opacity:0}},
  { targets: "#p-text-right", props: { y: -10, opacity: 0, duration: 1, stagger: 0.2 } },
  { targets: "#bottle-image", props: { x: -100, opacity: 0, duration: 1, stagger: 0.2 } },
  { targets: ".leaf-image, .leaf-image2, .leaf-image3",
    props: { x: 1, opacity: 0, duration: 1, stagger: 0.2, yoyo:2}},
    
];

const tline = gsap.timeline();

animationTargets.forEach(({ targets, props }) => {
  tline.from(targets, props);
});



function imageSlider(any) {
  document.querySelector('#bottle-image img').src = any; 
}

function bgChange(bg){
  const color = document.querySelector('#page1');
  color.style.background = bg
}

function textChange(text){
  const textColor = document.querySelector('#bigtext h1');
  textColor.style.color = text
}

function changeNumber() {
  const numberElement = document.querySelector('#number h1');
  if (numberElement) {
    const currentNumber = parseInt(numberElement.textContent);
    const nextNumber = currentNumber + 1;
    numberElement.textContent = nextNumber.toString().padStart(2, '0');
  }
}






/*gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});


*/

 
