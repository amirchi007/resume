document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll("#skills span");

    skills.forEach(skill => {
        skill.addEventListener("click", () => {
            alert(`مهارت ${skill.innerText} انتخاب شد!`);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 1;
    gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from("#about", { duration: 1, y: 50, opacity: 0, ease: "power2.out", delay: 0.5 });
    gsap.from("#skills span", { duration: 1, opacity: 0, y: 20, stagger: 0.2, ease: "power2.out", delay: 1 });
});

document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.remove('-translate-x-full');
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.add('-translate-x-full');
});

document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});