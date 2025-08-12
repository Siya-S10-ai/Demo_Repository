// Sneaker carousel data
const sneakers = [
    {
        name: "Nike Air Max",
        img: "assets/nikeair/air1.jpg"
    },
    {
        name: "Adidas",
        img: "assets/adidas/adidas1.jpg"
    },
    {
        name: "Nike Flat",
        img: "assets/nikeflat/flat1.jpg"
    },
    {
        name: "Nike",
        img: "assets/nike/nike1.jpg"
    },
    {
        name: "New Balance",
        img: "newbalance1"
    }
];

let currentSneaker = 0;
const carouselImage = document.getElementById('carouselImage');
const carouselSneakerName = document.getElementById('carouselSneakerName');
const prevBtn = document.getElementById('prevSneaker');
const nextBtn = document.getElementById('nextSneaker');

function updateCarousel(index) {
    carouselImage.src = sneakers[index].img;
    carouselSneakerName.textContent = sneakers[index].name;
}
function showNextSneaker() {
    currentSneaker = (currentSneaker + 1) % sneakers.length;
    updateCarousel(currentSneaker);
}
function showPrevSneaker() {
    currentSneaker = (currentSneaker - 1 + sneakers.length) % sneakers.length;
    updateCarousel(currentSneaker);
}
nextBtn.addEventListener('click', showNextSneaker);
prevBtn.addEventListener('click', showPrevSneaker);

// Auto-rotate every 3 seconds
let carouselInterval = setInterval(showNextSneaker, 3000);
carouselImage.addEventListener('mouseenter', () => clearInterval(carouselInterval));
carouselImage.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(showNextSneaker, 3000);
});

// Show sneaker name only on hover
carouselImage.addEventListener('mouseenter', () => {
    carouselSneakerName.style.opacity = 1;
});
carouselImage.addEventListener('mouseleave', () => {
    carouselSneakerName.style.opacity = 0;
});

// Sneaker 3D rotation effect
const mainSneaker = document.getElementById('mainSneaker');
let rotation = 0;
mainSneaker.addEventListener('mousemove', (e) => {
    const rect = mainSneaker.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const center = rect.width / 2;
    rotation = ((x - center) / center) * 30; // max 30deg
    mainSneaker.style.transform = `rotateY(${rotation}deg)`;
});
mainSneaker.addEventListener('mouseleave', () => {
    mainSneaker.style.transform = 'rotateY(0deg)';
});

// Contact form (optional: simple validation)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value.trim();
    if (!email) {
        alert('Please enter your email.');
        e.preventDefault();
    }
});