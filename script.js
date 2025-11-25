const name = "To Us!";
document.getElementById("name").innerText = name;
document.querySelectorAll('.memory-text').forEach(el => {
  el.style.color = "white";
});

/* ⭐ MEMORY TEXTS ⭐ */
const memoryTexts = [
  "One of my favourite memories is that random long drive we took when you were coming back from college. It wasn’t even a big drive, but it meant so much. We were just arguing over nothing, laughing, teasing— and somehow that simple moment became one of the best to remember. ❤️",

  "This one still feels so fresh to me — we were in the middle of some random conversation and out of nowhere you brought up the Chocolate Room. Everyone was wondering how serious the topic even was, and there you were… lost in your own little world, not caring about what’s going on. Honestly, that’s one of your best traits, and every time I remember it, I can’t help but smile and laugh. ✨",

  "And then there’s the New Year’s day memory — your mood got ruined because your manager scolded you, and I was like, ‘How can someone spoil her New Year like this?’ So I tried to make the moment lighter by teasing you, and even Yash joined in when he came upstairs. You were so annoyed, wondering why we were irritating you during a meeting. And the way I instantly ran home early just so I wouldn’t get scolded more by this 5'2 lil gangster with a short temper… that whole moment still makes me smile.💖",

  "This one is from the day someone else drove my car for the first time — and that someone was you. You literally made me sit in the passenger seat for the entire route, and it was the first time that had ever happened. I remember thinking, ‘She really has something in her personality… she actually took me away from the steering wheel of my own car.’ And the funny part is, I didn’t even know your driving skills back then — that just shows how much trust I already had in you. 💫",

  "And then there’s the moment when we opened up about our so-called exes and realized we genuinely don’t give a damn about relationships anymore. We just believe in friendships that actually last — the kind where you enjoy, laugh, live every moment without overthinking. That day we understood one thing perfectly: don’t fall in love with someone just for the sake of it… just don’t fall for one person blindly. Friendship is way more real.",

];

const names=[
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

]

/* RAIN ANIMATION */
let speed=[5.6,6.8,6,7,7.6,6,5,6.6,8,5];
let rain='';
let number=5;

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

function showSurprise() {
  const surpriseDiv = document.getElementById('surprise');
  surpriseDiv.style.display = 'block';
  document.querySelector('.rain-container').classList.add('displayRain');
}

function showQuote() {
  const quoteBox = document.getElementById('quote-box');
  const randomQuote = memoryTexts[Math.floor(Math.random() * memoryTexts.length)];
  quoteBox.innerHTML = randomQuote;
  quoteBox.style.display = 'block';
  // ⭐ SHOW PHOTO GALLERY AFTER QUOTE IS REVEALED
  document.getElementById('showGalleryBtn').style.display = 'inline-block';
  document.getElementById("showGalleryBtn").addEventListener("click", () => {
  document.getElementById("photoGallery").style.display = "block";

  // Optional: hide button after click
  document.getElementById("showGalleryBtn").style.display = "none";
});

}

function showGallery() {
  document.getElementById("photoGallery").style.display = "block";

  // Optional: Hide button after click
  document.getElementById("showGalleryBtn").style.display = "none";
}


/* ⭐⭐⭐ FLIP CARD GALLERY ⭐⭐⭐ */

const galleryData = [
  { img: "IMG_9026.jpeg", text: names[0] },
  { img: "IMG_8770.jpg", text: names[6] },
  { img: "IMG_9029.jpeg", text: names[1] },
  { img: "IMG_7556.jpg", text: names[2] },
  { img: "IMG_9036.jpeg", text: names[3] },
  { img: "IMG_0321.jpg", text: names[7] },
  { img: "IMG_9054.png", text: names[12] },
  { img: "IMG_8963.jpeg", text: names[10] },
  { img: "IMG_7881.jpg", text: names[4] },
  { img: "IMG_7489.jpg", text: names[8] },
  { img: "IMG_8690.jpg", text: names[11] },
  { img: "IMG_9034.jpg", text: names[14] },
  { img: "IMG_8406.jpg", text: names[5] },
  { img: "IMG_7017.jpg", text: names[13] },
  { img: "IMG_9031.jpg", text: names[9] },
  { img: "IMG_9055.png", text: names[15] },
];

const galleryContainer = document.getElementById("gallery");

if (galleryContainer) {
  galleryData.forEach(data => {
    const card = document.createElement("div");
    card.className = "flip-card";

    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-front">
          <img src="images/${data.img}" alt="Memory">
        </div>
        <div class="flip-back">
          ${data.text}
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    galleryContainer.appendChild(card);
  });
}

/* ⭐ BIG POPUP LOGIC ⭐ */

const popupOverlay = document.getElementById("popupOverlay");
const popupImage = document.getElementById("popupImage");
const popupText = document.getElementById("popupText");
const closePopup = document.querySelector(".close-popup");
const bigFlipCard = document.getElementById("bigFlipCard");

function openPopup(imageSrc, text) {
  popupImage.src = imageSrc;
  popupText.textContent = text;

  bigFlipCard.classList.remove("flipped");
  popupOverlay.style.display = "flex";
}

closePopup.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});

/* CLICK TO FLIP BIG CARD */
bigFlipCard.addEventListener("click", () => {
  bigFlipCard.classList.toggle("flipped");
});

