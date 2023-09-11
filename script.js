gsap.registerPlugin(ScrollTrigger);

let tlHa = gsap.timeline({ repeat: -1 });

tlHa
  .to(
    "[heading-animate]",
    {
      yPercent: -100,
      duration: 0.7
    },
    ">2"
  )
  .to(
    "[heading-animate]",
    {
      yPercent: -200,
      duration: 0.7
    },
    ">2"
  )
  .to(
    "[heading-animate]",
    {
      yPercent: -300,
      duration: 0.7
    },
    ">2"
  );

let tl = gsap.timeline({
  //paused: true,
  //reversed: true,
  defaults: {
    ease: "sine.inOut"
  }
});

tl.from(".home_hero_content_grid", {
  duration: 0.5,
  y: 20,
  autoAlpha: 0
})
  .from(
    ".navbar_container",
    {
      duration: 0.5,
      autoAlpha: 0,
      y: "-20"
    },
    "<"
  )
  .from(
    ".hero_headline",
    {
      duration: 0.7,
      autoAlpha: 0,
      y: 5
    },
    ">-0.1"
  )
  .from(".home_hero_subheadline", {
    duration: 0.5,
    autoAlpha: 0
  })
  .from(".home_hero_cta_container", {
    duration: 0.5,
    autoAlpha: 0
  });

//Menu Link Animation

$(".menu-item").each(function () {
  let targetElement = $(this).find(".menu-link");
  let tl = gsap.timeline({ paused: true });
  tl.from(targetElement, {
    y: "100%",
    duration: 0.5,
    ease: "sine.inOut"
  });
  $(this).on("mouseenter", function () {
    tl.restart();
  });
  $(this).on("mouseleave", function () {
    tl.reverse();
  });
});

//Text Split - Animations

window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars, lines",
    tagName: "span"
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      }
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 80%",
      onEnter: () => timeline.play()
    });
  }

  // Keyword Elements

  $(".check_keyword_container").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from(
      $(this).find("[keyword-check"),
      {
        autoAlpha: 0,
        xPercent: "-50",
        duration: 0.5,
        ease: "power1.out",
        stagger: { amount: 2 }
      },
      ">0.5"
    );
    tl.from(
      $(this).find("[keyword-text"),
      {
        autoAlpha: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "power1.out",
        stagger: { amount: 2 }
      },
      "<"
    );

    createScrollTrigger($(this), tl);
  });

  // End

  $("[words-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), {
      opacity: 0,
      yPercent: 100,
      duration: 0.5,
      ease: "sine.out(2)",
      stagger: { amount: 0.2 }
    });
    createScrollTrigger($(this), tl);
  });

  $("[words-rotate-in]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.set($(this).find(".word"), { transformPerspective: 1000 });
    tl.from($(this).find(".word"), {
      rotationX: -90,
      duration: 0.6,
      ease: "power2.out",
      stagger: { amount: 0.6 }
    });
    createScrollTrigger($(this), tl);
  });

  $("[words-slide-from-right]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), {
      opacity: 0,
      x: "1em",
      duration: 0.6,
      ease: "sine.out",
      stagger: { amount: 0.2 }
    });
    createScrollTrigger($(this), tl);
  });

  $("[words-slide-from-left]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), {
      opacity: 0,
      x: "-1em",
      duration: 0.7,
      ease: "sine.out",
      stagger: { amount: 0.2 }
    });
    createScrollTrigger($(this), tl);
  });

  $("[letters-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      yPercent: 110,
      duration: 0.5,
      ease: "sine.out",
      stagger: { amount: 0.1 }
    });
    createScrollTrigger($(this), tl);
  });

  $("[letters-slide-down]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      yPercent: -120,
      duration: 0.3,
      ease: "power1.out",
      stagger: { amount: 0.7 }
    });
    createScrollTrigger($(this), tl);
  });

  $("[letters-fade-in]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      opacity: 0,
      duration: 0.2,
      ease: "power1.out",
      stagger: { amount: 0.8 }
    });
    createScrollTrigger($(this), tl);
  });

  $("[letters-fade-in-random]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {
      opacity: 0,
      duration: 0.05,
      ease: "power1.out",
      stagger: { amount: 0.4, from: "random" }
    });
    createScrollTrigger($(this), tl);
  });

  $("[fade-up-in]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this), {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "sine.out",
      stagger: { amount: 0.2 }
    });
    createScrollTrigger($(this), tl);
  });

  $("[scrub-each-word]").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 90%",
        end: "top center",
        scrub: true
      }
    });
    tl.from($(this).find(".word"), {
      opacity: 0.2,
      duration: 0.2,
      ease: "power1.out",
      stagger: { each: 0.4 }
    });
  });

  $("[slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this), {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "sine.out",
      stagger: { amount: 0.4 }
    });
    createScrollTrigger($(this), tl);
  });

  // Avoid flash of unstyled content
  gsap.set("[text-split]", { opacity: 1 });
});

// Text Split - End

//Accordion Animation

document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".accordion_trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const isOpen = content.style.maxHeight !== "0px";

      gsap.to(content, {
        maxHeight: isOpen ? "0px" : "1000px", // Adjust the maximum height value as needed
        opacity: isOpen ? 0 : 1,
        duration: 0,
        onComplete: () => {
          if (isOpen) {
            content.style.display = "none";
            gsap.to(this.querySelector(".accordion_icon"), { rotate: 0 }); // Rotate icon to 0 degrees
          } else {
            content.style.display = "block";
            gsap.to(this.querySelector(".accordion_icon"), { rotate: 180 }); // Rotate icon to 180 degrees
          }
        }
      });
    });
  });
});

// Canvas Animation
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let w, h, particles;
let particleDistance = 100;
let mouse = {
  x: undefined,
  y: undefined,
  radius: 100
};

function init() {
  resizeReset();
  animationLoop();
}

function resizeReset() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;

  particles = [];
  for (
    let y =
      (((h - particleDistance) % particleDistance) + particleDistance) / 2;
    y < h;
    y += particleDistance
  ) {
    for (
      let x =
        (((w - particleDistance) % particleDistance) + particleDistance) / 2;
      x < w;
      x += particleDistance
    ) {
      particles.push(new Particle(x, y));
    }
  }
}

function animationLoop() {
  ctx.clearRect(0, 0, w, h);
  drawScene();
  requestAnimationFrame(animationLoop);
}

function drawScene() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  drawLine();
}

function drawLine() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      let dx = particles[a].x - particles[b].x;
      let dy = particles[a].y - particles[b].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < particleDistance * 1.5) {
        opacity = 1 - distance / (particleDistance * 1.5);
        ctx.strokeStyle = "rgba(255,255,255," + opacity + ")";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

function mousemove(e) {
  mouse.x = e.x;
  mouse.y = e.y;
}

function mouseout() {
  mouse.x = undefined;
  mouse.y = undefined;
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 2;
    this.baseX = this.x;
    this.baseY = this.y;
    this.speed = Math.random() * 25 + 5;
  }
  draw() {
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance; // 0 ~ 1
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let directionX = forceDirectionX * force * this.speed;
    let directionY = forceDirectionY * force * this.speed;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

init();
window.addEventListener("resize", resizeReset);
window.addEventListener("mousemove", mousemove);
window.addEventListener("mouseout", mouseout);
