document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Navbar animation
  gsap.from(".navbar", {
    opacity: 0,
    y: -150,
    duration: 0.8,
    ease: "power2.out",
    immediateRender: false
  });

  // Other animations
  gsap.from(".up-animation", {
    opacity: 0,
    y: 500,
    duration: 1,
    ease: "power2.out",
    immediateRender: false

  });

  gsap.from(".button-container-index", {
    opacity: 0,
    y: 200,
    duration: 1,
    ease: "power2.out",
    immediateRender: false
  });

  gsap.from(".index-animated-first-img", {
    opacity: 0,
    x: 600,
    duration: 2,
    rotation: 45,
    ease: "power2.out",
    onComplete: function () {
      gsap.to(".index-animated-first-img", {
        y: "-=10",
        duration: 0.9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  });

  gsap.from(".index-hero-fouth-heading-first", {
    opacity: 1,
    x: 500,
    duration: 1.5,
    delay: 3,
    ease: "power2.out"
  });

  gsap.from(".index-hero-fouth-heading-second", {
    opacity: 1,
    x: 500,
    duration: 1.3,
    delay: 3,
    ease: "power2.out"
  });

  gsap.from(".index-hero-fouth-heading-third", {
    opacity: 1,
    x: 500,
    duration: 1.1,
    delay: 3,
    ease: "power2.out"
  });


  gsap.from(".about-third-heading-container", {
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-third-heading-container",
      start: "top 100%",
    }
  });
  gsap.from(".about-second-row-container", {
    y: 500,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-second-row-container",
      end: "bottom 100%",
    }
  });
  gsap.from(".about-us-fourth-contianer", {
    y: 500,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-us-fourth-contianer",
      end: "bottom 100%",
    }
  });
  gsap.from(".blog-second-row-col", {
    y: -250,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".blog-second-row-col",
      start: "top 50%", // Animation starts when cards enter the viewport
      end: "bottom 50%",

    },
  });
  gsap.from(".blog-second-up-animaiton", {
    y: 250,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".blog-second-up-animaiton",
      end: "bottom 100%",

    },
  });
  gsap.from(".services-first-content-animation", {
    y: 250,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,

  });
  gsap.from(".services-second-content-animation", {
    x: 250,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,

  });
  gsap.from(".blog-details-first-animation", {
    y: -350,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.3,

  });

  gsap.from(".services-third-content-animation", {
    y: -150,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".services-third-content-animation",
      end: "bottom center ",
    },

  });
  gsap.from(".services-fourth-content-animation", {
    y: 250,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".services-fourth-content-animation",
      end: "bottom 100%",

    },
  });
  gsap.from(".footer-fourth-content-animation", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".footer-fourth-content-animation",
      start: "top 80%", // When the top of the container hits 80% of the viewport
      end: "top 50%", // Optional end point
      toggleActions: "play none none none", // Animation triggers

    },
  });
  gsap.from(".footer-first-content-animation", {
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".footer-first-content-animation",
      start: "top 80%", // When the top of the container hits 80% of the viewport
      end: "top 50%", // Optional end point
      toggleActions: "play none none none", // Animation triggers

    },
  });
  gsap.from(".flip-element", {
    scrollTrigger: {
      trigger: ".flip-element", // Element that triggers the animation
      start: "top 80%", // When the top of the container hits 80% of the viewport
      end: "top 50%", // Optional end point
      toggleActions: "play none none none", // Animation triggers
    },
    duration: 2, // Animation duration
    opacity: 0, // Start from invisible
    rotateX: -80, // Start from -80 degrees
    ease: "power1.out", // Smooth easing
  });
});


document.addEventListener('scroll', function () {
  const backgroundImage = document.querySelector('.background-image');
  const sectionEnd = backgroundImage.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition >= sectionEnd) {
    backgroundImage.style.position = 'fixed';
    backgroundImage.style.top = '0';
  } else {

    backgroundImage.style.position = 'relative';
  }
});

document.querySelectorAll('.collapse-service').forEach(service => {
  service.addEventListener('click', function () {
    const container = this.closest('.collapse-service-container');
    const collapseContent = container.querySelector('.collapse');

    // Close all other dropdowns
    document.querySelectorAll('.collapse-service-container').forEach(el => {
      if (el !== container) {
        el.classList.remove('show');
        el.querySelector('.collapse').classList.remove('show');
      }
    });

    // Toggle the clicked dropdown
    if (!container.classList.contains('show')) {
      container.classList.add('show');
      collapseContent.classList.add('show');
    } else {
      container.classList.remove('show');
      collapseContent.classList.remove('show');
    }
  });
});