import gsap from "gsap";

const indicator = document.querySelector(".indicator");
const tabs = document.querySelectorAll(".tab");
const tabRow = document.querySelector(".tab-row");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        const tabBouds = tab.getBoundingClientRect();
        const tabRowBouds = tabRow.getBoundingClientRect();
        const width = tabBouds.width;
        const offset = tabRowBouds.left - tabBouds.left;

        gsap.to(indicator, {
            width: width,
            x: -offset,
            duration: 0.6,
            ease: "back.out(1.7)",
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
    });
});
