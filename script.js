
import emailjs from "https://cdn.skypack.dev/@emailjs/browser";

emailjs.init("OPChtxcuzrGTxrcCE"); // Your public key

window.sendEmail = function (e) {
    e.preventDefault();

    emailjs.send("service_wbczlvh", "template_tu13t49", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    })
        .then(
            function (response) {
                showToast("✅ Your message has been sent!");
                document.getElementById("contact-form").reset();
            },
            function (error) {
                if (name === "" || email === "" || subject === "" || message === "") {
                    showToast("❌ Please fill in all fields before sending.");
                    return;
                }
                showToast("❌Failed to send message. Please try again!.");
                console.error("EmailJS Error:", error);
            }
        );
};


// Show toast message
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");


    setTimeout(() => { // Hide after 3 seconds
        toast.classList.remove("show");
    }, 3000);
}

// Show popup after 45 seconds
setTimeout(() => {
    const popup = document.getElementById('Poppup-linkedinPopup');
    popup.classList.remove('Poppup-hidden');
    startPoppupCountdown();
}, 45000);

// Close popup manually
function closePoppup() {
    document.getElementById('Poppup-linkedinPopup').classList.add('Poppup-hidden');
}

// Auto-close popup after countdown
function startPoppupCountdown() {
    let seconds = 6;
    const timer = document.getElementById('Poppup-timer');
    const interval = setInterval(() => {
        seconds--;
        timer.textContent = seconds;
        if (seconds <= 0) {
            clearInterval(interval);
            closePoppup();
        }
    }, 1000);
}


// Cursor Pointer Effect
const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

let mouseX = 0,
    mouseY = 0;
let cursorX = 0,
    cursorY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.top = `${mouseY}px`;  // dot moves immediately
    dot.style.left = `${mouseX}px`;
});


function animateCursor() { // Smooth animation loop for outer cursor
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.top = `${cursorY}px`;
    cursor.style.left = `${cursorX}px`;

    requestAnimationFrame(animateCursor);
}

animateCursor(); // Start animation loop

// Click scale effect
document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    dot.style.transform = "translate(-50%, -50%) scale(0.8)";
});

document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    dot.style.transform = "translate(-50%, -50%) scale(1)";
});


// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('#mobile-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Vanta.js background animation
VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00f0ff,
    backgroundColor: 0x050508,
    points: 12.00,
    maxDistance: 22.00,
    spacing: 18.00
});

// Create 3D Tech Globe
function initTechGlobe() {
    const container = document.getElementById('globe-container');
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Create scene
    const scene = new THREE.Scene();
    scene.background = null;

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00f0ff, 2, 10);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    // Create sphere geometry
    const geometry = new THREE.SphereGeometry(1.5, 32, 32);

    // Create material with wireframe effect
    const material = new THREE.MeshPhongMaterial({
        color: 0x00f0ff,
        wireframe: true,
        transparent: true,
        opacity: 0.8,
        shininess: 100
    });

    // Create sphere mesh
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add tech icons as sprites
    const techIcons = [
        { icon: 'html5', color: 0xe34c26, position: { x: 0, y: 1.5, z: 0 } },
        { icon: 'css3', color: 0x264de4, position: { x: 1.5, y: 0, z: 0 } },
        { icon: 'js', color: 0xf0db4f, position: { x: 0, y: 0, z: 1.5 } },
        { icon: 'react', color: 0x61dbfb, position: { x: -1.5, y: 0, z: 0 } },
        { icon: 'node-js', color: 0x3c873a, position: { x: 0, y: 0, z: -1.5 } },
        { icon: 'python', color: 0x3776ab, position: { x: 0, y: -1.5, z: 0 } }
    ];

    techIcons.forEach(tech => {
        const spriteMap = new THREE.TextureLoader().load(`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`);
        const spriteMaterial = new THREE.SpriteMaterial({
            map: spriteMap,
            color: tech.color,
            transparent: true
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(tech.position.x, tech.position.y, tech.position.z);
        sprite.scale.set(0.5, 0.5, 0.5);
        scene.add(sprite);
    });

    // Add orbit controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    // Handle window resize
    window.addEventListener('resize', function () {
        const width = container.clientWidth;
        const height = container.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    });

    animate();
}

// Initialize tech globe when page loads
window.addEventListener('load', initTechGlobe);

// Create 3D Tech Sphere for Tech Arsenal section
function initTechSphere() {
    const container = document.getElementById('tech-sphere');
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Create scene
    const scene = new THREE.Scene();
    scene.background = null;

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x00f0ff, 1);
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x8a2be2, 1);
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);

    // Create sphere geometry
    const geometry = new THREE.SphereGeometry(1.5, 16, 16);

    // Create material with wireframe effect
    const material = new THREE.MeshPhongMaterial({
        color: 0x00f0ff,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
        shininess: 100
    });

    // Create sphere mesh
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add floating tech icons inside sphere
    const techIcons = [
        { icon: 'html5', color: 0xe34c26, position: { x: 0.5, y: 0.8, z: 0.5 } },
        { icon: 'css3', color: 0x264de4, position: { x: -0.7, y: 0.5, z: 0.7 } },
        { icon: 'js', color: 0xf0db4f, position: { x: 0.3, y: -0.5, z: 0.8 } },
        { icon: 'react', color: 0x61dbfb, position: { x: -0.8, y: -0.3, z: -0.5 } },
        { icon: 'node-js', color: 0x3c873a, position: { x: 0.7, y: 0.2, z: -0.7 } },
        { icon: 'python', color: 0x3776ab, position: { x: -0.4, y: 0.9, z: -0.3 } }
    ];

    techIcons.forEach(tech => {
        const spriteMap = new THREE.TextureLoader().load(`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`);
        const spriteMaterial = new THREE.SpriteMaterial({
            map: spriteMap,
            color: tech.color,
            transparent: true
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(tech.position.x, tech.position.y, tech.position.z);
        sprite.scale.set(0.3, 0.3, 0.3);
        scene.add(sprite);
    });

    // Add orbit controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
}

// Initialize tech sphere when page loads
window.addEventListener('load', initTechSphere);

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.glass-panel');

    elements.forEach((element, index) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}

// Set initial state for animation
document.querySelectorAll('.glass-panel').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Check on scroll and initial load
window.addEventListener('scroll', animateOnScroll);
animateOnScroll();