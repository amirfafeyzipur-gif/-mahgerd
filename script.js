const button = document.getElementById("playButton");
const music = document.getElementById("music");

// پخش آهنگ
button.addEventListener("click", () => {

    music.play();

    button.innerHTML = "❤️ دوستت دارم ❤️";

    button.style.background = "rgba(255,255,255,.30)";

    button.style.border = "1px solid rgba(255,255,255,.45)";

});


// ظاهر شدن متن‌ها یکی یکی

const lines = document.querySelectorAll(".line, .gold, .eng");

lines.forEach((line, index) => {

    line.style.opacity = "0";

    line.style.transform = "translateY(20px)";

    line.style.transition = "all .8s ease";

    setTimeout(() => {

        line.style.opacity = "1";

        line.style.transform = "translateY(0)";

    }, index * 800);

});


// توقف موزیک هنگام خروج از صفحه

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        music.pause();

    }

});


// ادامه پخش بعد از برگشت

document.addEventListener("visibilitychange", () => {

    if (!document.hidden && !music.ended) {

        // فقط اگر کاربر قبلاً پلی کرده باشد
        music.play().catch(()=>{});

    }

});
