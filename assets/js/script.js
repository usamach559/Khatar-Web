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


const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

