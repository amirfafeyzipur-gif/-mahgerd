const text = `روزنه‌ی نوری که توی تاریک‌ترین شب‌های من تابیدی... ✨

یک ماه کنار تو،
قشنگ‌ترین فصل زندگی من بود.

از وقتی اومدی،
معنی «خونه» برام عوض شد؛

خونه دیگه یه جا نیست...

خونه،
هر جاییه که تو باشی ❤️

ممنونم که کنارمی.

Happy 1st Month, My Love 🤍`;

const typewriter = document.getElementById("typewriter");
const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");
const stars = document.getElementById("stars");

let i = 0;

function typeEffect() {
    if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 45);
    }
}

setTimeout(typeEffect, 4500);

// پخش موزیک
playBtn.addEventListener("click", () => {

    music.play();

    playBtn.innerHTML = "❤️ دوستت دارم ❤️";

    playBtn.style.background = "#ff5e7e";

});

// ساخت ستاره‌ها
for(let i=0;i<180;i++){

    let star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*5+"s";

    star.style.animationDuration=(2+Math.random()*4)+"s";

    star.style.opacity=Math.random();

    stars.appendChild(star);

}

// حرکت آرام عکس با موس (در دسکتاپ)
document.addEventListener("mousemove",(e)=>{

    let x=(e.clientX/window.innerWidth-.5)*10;

    let y=(e.clientY/window.innerHeight-.5)*10;

    document.getElementById("photo").style.transform=
    `scale(1.08) translate(${x}px,${y}px)`;

});

// جلوگیری از توقف موزیک هنگام خروج از صفحه
document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        music.pause();

    }

});
