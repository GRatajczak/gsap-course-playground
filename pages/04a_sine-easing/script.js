import gsap from "gsap";

const scrollToTop = document.querySelector(".scroll-to-top");

if (window.scrollY > 100) {
    scrollToTop.classList.add("show");
} else {
    scrollToTop.classList.remove("show");
    gsap.to(scrollToTop, {
        borderRadius: "50%",
        duration: 0.3,
        ease: "sine.inOut",
    });
}

let isFloating = false;

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 100) {
        scrollToTop.classList.add("show");
        if (!isFloating) {
            gsap.to(scrollToTop, {
                y: -10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            isFloating = true;
        }
    } else {
        scrollToTop.classList.remove("show");
    }
});

scrollToTop.addEventListener("mouseenter", () => {
    gsap.to(scrollToTop, {
        scale: 1.1,
        duration: 0.3,
        ease: "sine.inOut",
    });
});

scrollToTop.addEventListener("mouseleave", () => {
    gsap.to(scrollToTop, {
        scale: 1,
        duration: 0.3,
        ease: "sine.inOut",
    });
});

scrollToTop.addEventListener("click", () => {
    gsap.to(scrollToTop, {
        rotate: 360,
        duration: 0.3,
        borderRadius: "40%",
        ease: "sine.inOut",
        onComplete: () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    });
});
