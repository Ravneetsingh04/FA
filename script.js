/* =========================
   BASIC SETUP
========================= */

const name = "To Us!";
document.getElementById("name").innerText = name;

document.querySelectorAll('.memory-text').forEach(el => {
  el.style.color = "white";
});

/* =========================
   MEMORY TEXTS
========================= */

const memoryTexts = [
  "One of my favourite memories is that random long drive we took when you were coming back from college...",
  "This one still feels so fresh to me — we were in the middle of some random conversation...",
  "And then there’s the New Year’s day memory — your mood got ruined because your manager scolded you...",
  "This one is from the day someone else drove my car for the first time — and that someone was you...",
  "And then there’s the moment when we opened up about our so-called exes..."
];

const names = [
  "My name is Motu. Click to reveal my face",
  "Who's the hottest girl in the world. My crazy girl, crazy girl... Click to see me",
  "This is the only picture we've together. We need more",
  "This snap is from 25th may 2025. Wanna know? Just click!",
  "You think you can't fall in love? Just click me and try not to fall",
  "I bought a new lip gloss. Wanna see? Just click and zoom in!",
  "Wanna see Hero? Just click me.. Dressing Credits- The person seeing this!!!",
  "Approved by someone special",
  "You wondering how can someone be cute and hot at the same time? Click me and you'll get to know",
  "Wanna see someone with mirror obsession? Just click!",
  "Thoda khubsurat to mai bhi hu. You can't deny!",
  "The moment when someone told that there are now 2 exceptions!",
  "I Bet no one can click random pics this good. I bet again!",
  "A random memory",
  "Again, a random mirror selfie by peaky princess",
  "Wanna see a pookie? Click me",
];

/* =========================
   RAIN ANIMATION
========================= */

let speed = [5.6,6.8,6,7,7.6,6,5,6.6,8,5];
let rain = '';
let number = 5;

for (let i = 0; i < 10; i++) {
  let randomSec = Math.random();
  let duration = speed[i];
  let delay = (Math.floor(randomSec * 1) + 1) + (Math.floor(randomSec * 5));

  rain += `
    <div class="raindrop" style="
      left:${number}% ;
      animation-duration:${duration}s;
      animation-delay:0.${delay};
    ">&#128151;</div>`;
  number += 10;
}

document.querySelector('.rain-container').innerHTML = rain;

/* =========================
   SURPRISE & QUOTES
========================= */

function showSurprise() {
  document.getElementById('surprise').style.display = 'block';
  document.querySelector('.rain-container').classList.add('displayRain');
}

function showQuote() {
  const quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = memoryTexts[Math.floor(Math.random() * memoryTexts.length)];
  quoteBox.style.display = 'block';

  document.getElementById('showGalleryBtn').style.display = 'inline-block';
}

document.getElementById("showGalleryBtn")?.addEventListener("click", () => {
  document.getElementById("photoGallery").style.display = "block";
  document.getElementById("showGalleryBtn").style.display = "none";
});

/* =========================
   GALLERY
========================= */

const galleryData = [
  { img: "IMG_9026.jpeg", text: names[0] },
  { img: "IMG_8770.jpg", text: names[6] },
  { img: "IMG_9029.jpeg", text: names[1] },
  { img: "IMG_7556.JPG", text: names[2] },
  { img: "IMG_9036.jpeg", text: names[3] },
  { img: "IMG_0321.jpg", text: names[7] },
  { img: "IMG_9054.PNG", text: names[12] },
  { img: "IMG_8963.jpeg", text: names[10] },
  { img: "IMG_7881.jpg", text: names[4] },
  { img: "IMG_7489.jpg", text: names[8] },
  { img: "IMG_8690.JPG", text: names[11] },
  { img: "IMG_9034.JPG", text: names[14] },
  { img: "IMG_8406.JPG", text: names[5] },
  { img: "IMG_7017.jpg", text: names[13] },
  { img: "IMG_9031.JPG", text: names[9] },
  { img: "IMG_9055.PNG", text: names[15] },
];

const galleryContainer = document.getElementById("gallery");

if (galleryContainer) {
  galleryData.forEach(data => {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-front">
          <img src="images/${data.img}">
        </div>
        <div class="flip-back">${data.text}</div>
      </div>`;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    galleryContainer.appendChild(card);
  });
}

/* =========================
   POPUP
========================= */

const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.querySelector(".close-popup");

closePopup?.addEventListener("click", () => popupOverlay.style.display = "none");
popupOverlay?.addEventListener("click", e => {
  if (e.target === popupOverlay) popupOverlay.style.display = "none";
});

/* =========================
   NEW YEAR + CLICK STORY
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const overlay = document.getElementById("newYearOverlay");
  const enterBtn = document.getElementById("enterYearBtn");

  const today = new Date().toDateString();
  if (sessionStorage.getItem("newYearVisit") === today) {
    overlay.style.display = "none";
  }

  enterBtn.addEventListener("click", () => {
    sessionStorage.setItem("newYearVisit", today);
    overlay.style.opacity = "0";
    setTimeout(() => overlay.style.display = "none", 500);
  });

  const promiseBtn = document.getElementById("newYearPromiseBtn");
  const replyText = document.getElementById("newYearReply");
  const carry = document.getElementById("carrySection");
  const carryItems = document.querySelectorAll(".carry-item");
  const friends = document.getElementById("friendsSection");
  const secret = document.getElementById("secretLine");

  let step = 0;
  let carryIndex = 0;

  promiseBtn.addEventListener("click", () => {
    step++;

    if (step === 1) {
      replyText.style.display = "block";
      confettiEffect();
      carry.classList.remove("hidden");
      carry.classList.add("reveal");
      promiseBtn.innerText = "Next ✨";
      return;
    }

    if (carryIndex < carryItems.length) {
      carryItems[carryIndex].classList.remove("hidden");
      carryItems[carryIndex].classList.add("reveal");
      carryIndex++;
      return;
    }

    if (friends.classList.contains("hidden")) {
      friends.classList.remove("hidden");
      friends.classList.add("reveal");
      promiseBtn.innerText = "Ok, this loaded our previous content but one last thing 💗";
      return;
    }

    secret.classList.remove("hidden");
    secret.classList.add("reveal");
    promiseBtn.style.display = "none";
  });
});

/* =========================
   CONFETTI
========================= */

function confettiEffect() {
  for (let i = 0; i < 30; i++) {
    const conf = document.createElement("div");
    conf.innerText = "✨";
    conf.style.position = "fixed";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-10px";
    conf.style.fontSize = "20px";
    conf.style.animation = "fall 2s linear";
    conf.style.zIndex = "9999";
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 2000);
  }
}
