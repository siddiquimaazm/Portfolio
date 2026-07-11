// Typed Text
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.typing-text', {
        strings: ['Full Stack Developer', 'MERN Stack Developer', 'Backend Developer','DevOps Enthusiast'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});






    document.addEventListener("DOMContentLoaded", function () {
        const aboutSection = document.querySelector(".about");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(aboutSection);
    });

    // Contact Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Browser ko page reload ya error screen par jaane se rokega

    // 1. User ko success message dikhayega
    alert('Message Sent Successfully! 👍');

    // 2. Form ke saare input fields ko empty (clear) kar dega
    this.reset();

    // 3. Page ko smoothly top (Home section) par scroll kar dega
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

