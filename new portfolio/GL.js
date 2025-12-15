/* -------------------------------------------------------
   THEME TOGGLE (Light / Dark)
---------------------------------------------------------*/

// Load saved theme if exists
let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (savedTheme === "dark") {
        document.getElementById("themeSwitch").checked = true;
    }
}

// Theme toggle event
document.getElementById("themeSwitch").addEventListener("change", () => {
    let currentTheme = document.documentElement.getAttribute("data-theme");

    let newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
});


/* -------------------------------------------------------
   TYPING EFFECT
---------------------------------------------------------*/
const typedText = [
    "a Web Developer.",
    "an AI Enthusiast.",
    "a Designer.",
    "a Programmer."
];

let typedIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
let speed = 120;

function type() {
    currentText = typedText[typedIndex];

    if (!isDeleting) {
        document.getElementById("typed").innerHTML = currentText.substring(0, charIndex++);
        if (charIndex === currentText.length) {
            isDeleting = true;
            speed = 100;
            setTimeout(type, 800);
            return;
        }
    } else {
        document.getElementById("typed").innerHTML = currentText.substring(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            typedIndex = (typedIndex + 1) % typedText.length;
        }
    }

    setTimeout(type, speed);
}

type(); // Start typing effect


/* -------------------------------------------------------
   PARTICLES JS CONFIG
---------------------------------------------------------*/
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80
        },
        "color": {
            "value": "#0f5ded"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.3,
            "random": true
        },
        "size": {
            "value": 4,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#0f5ded",
            "opacity": 0.3,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            }
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 0.6
                }
            }
        }
    },
    "retina_detect": true
});


/* -------------------------------------------------------
   Smooth scroll (optional enhancement)
---------------------------------------------------------*/
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
