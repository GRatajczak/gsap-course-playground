import gsap from "gsap";

gsap.to(".box", {
    scale: 1,
    opacity: 1,
    duration: 1,
    opacity: 1,
    rotate: 360,
    borderRadius: "50%",
    delay: 1,
    onComplete: () => {
        gsap.to(".box", {
            scale: 10,
            duration: 2,
            ease: "power2.inOut",
        });
    },
});
