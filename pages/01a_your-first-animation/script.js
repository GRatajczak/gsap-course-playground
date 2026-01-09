import gsap from "gsap";

gsap.to(".card", {
    scale: 1,
    opacity: 1,
    duration: 2,
    onComplete: () => {
        gsap.to(".card", {
            y: -20,
            duration: 0.2,
            onComplete: () => {
                gsap.to(".card", {
                    x: 100,
                    rotate: 90,
                    duration: 1,
                    onComplete: () => {
                        gsap.to(".card", {
                            x: -100,
                            rotate: -90,
                            duration: 1,
                            onComplete: () => {
                                gsap.to(".card", {
                                    x: 0,
                                    rotate: 0,
                                    duration: 1,
                                    onComplete: () => {
                                        gsap.to(".card", {
                                            x: 0,
                                            y: -20,
                                            duration: 1,
                                            scale: 0.8,
                                            onComplete: () => {
                                                gsap.to(".card", {
                                                    boxShadow:
                                                        "0 20px 80px rgba(29, 209, 161, 0.6)",
                                                    repeat: -1,
                                                    yoyo: true,
                                                    duration: 1,
                                                });
                                            },
                                        });
                                    },
                                });
                            },
                        });
                    },
                });
            },
        });
    },
});
