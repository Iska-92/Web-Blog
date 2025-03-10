document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".media-container").forEach(container => {
        const video = container.querySelector(".anime-video");

        if (!video) return;

        container.addEventListener("mouseenter", () => {
            video.currentTime = 0; 
            video.muted = false;   
            video.play();          
            video.style.pointerEvents = "auto";
        });

        container.addEventListener("mouseleave", () => {
            video.pause(); 
            video.style.pointerEvents = "none";
        });
    });

    const navLinks = document.querySelectorAll("nav ul li a");

    function setActiveLink(clickedLink) {
        navLinks.forEach(link => link.classList.remove("active"));
        clickedLink.classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = document.getElementById(this.getAttribute("href").substring(1));

            if (targetSection) {
                setActiveLink(this);
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: "smooth",
                });
            }
        });
    });
});
