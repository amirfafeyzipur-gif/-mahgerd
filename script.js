const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
    music.play();
    playBtn.innerHTML = "🎵 در حال پخش...";
});

const popup = document.getElementById("popup");
const messageBtn = document.getElementById("messageBtn");
const closeBtn = document.getElementById("close");

messageBtn.onclick = () => {
    popup.style.display = "flex";
}

closeBtn.onclick = () => {
    popup.style.display = "none";
}

popup.onclick = (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
}

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 350);

window.onload = () => {

    setTimeout(() => {

        playBtn.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.08)" },
            { transform: "scale(1)" }
        ], {
            duration: 1200,
            iterations: Infinity
        });

    }, 1500);

};
