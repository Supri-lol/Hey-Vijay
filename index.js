document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    yesBtn.addEventListener("click", yesClicked);
    noBtn.addEventListener("mouseover", () => moveNo(noBtn));
    noBtn.addEventListener("click", () => moveNo(noBtn));
    noBtn.addEventListener("touchstart", () => moveNo(noBtn));
});

function yesClicked() {
    document.body.innerHTML = `
        <div style="
            height:80vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:linear-gradient(135deg,#ff9a9e,#fad0c4);
            text-align:center;
        ">
            <h1 style="color:#e63946;font-size:4rem;">
                Yayyy! 💖💖💖
            </h1>
            <p style="font-size:1.5rem;">
                You’re officially my Valentine 🌹
            </p>
        </div>
    `;
}

function moveNo(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}

/* Floating hearts */
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 350);

/* Confetti */
setInterval(() => {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.innerHTML = "🎉";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 10000);
}, 500);

// /* 🎉 Confetti AFTER YES */
// function startConfetti() {
//     confettiInterval = setInterval(() => {
//         const confetti = document.createElement("div");
//         confetti.className = "confetti";
//         confetti.innerHTML = "🎉";
//         confetti.style.left = Math.random() * 100 + "vw";
//         confetti.style.fontSize = Math.random() * 20 + 10 + "px";

//         document.body.appendChild(confetti);

//         setTimeout(() => confetti.remove(), 5000);
//     }, 500);
// }