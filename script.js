/* ==========================================
   Identity V Event - script.js
   8週年 S43真髓1版
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /*==================================
      1. 倒數計時
    ==================================*/
    const countdown = document.getElementById("countdown");
    
    // 活動結束時間：2026/07/01 23:59:59
    const endTime = new Date("2026-07-01T23:59:59").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance <= 0) {
            countdown.innerHTML = "活動已結束";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}天 ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    /*==================================
      2. 生成花瓣飄落
    ==================================*/
    const petals = document.querySelector(".petals");
    const petalEmojis = ['🪶', '💜', '✨', '🎭', '🕯️'];
    
    if (petals) {
        for (let i = 0; i < 35; i++) {
            const petal = document.createElement("div");
            petal.className = "petal";
            petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
            petal.style.left = Math.random() * 100 + "%";
            petal.style.animationDuration = (10 + Math.random() * 15) + "s";
            petal.style.animationDelay = (Math.random() * 10) + "s";
            petal.style.fontSize = (15 + Math.random() * 10) + "px";
            petals.appendChild(petal);
        }
    }

    /*==================================
      3. 按鈕點擊波紋效果
    ==================================*/
    const btn = document.querySelector(".join-btn");
    if (btn) {
        btn.addEventListener("click", function(e) {
            const ripple = document.createElement("span");
            ripple.className = "ripple";
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = size + "px";
            ripple.style.height = size + "px";
            ripple.style.left = e.clientX - rect.left - size / 2 + "px";
            ripple.style.top = e.clientY - rect.top - size / 2 + "px";
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 700);
        });
    }

    /*==================================
      4. 預覽卡片 3D 懸浮效果
    ==================================*/
    const card = document.querySelector(".preview-card");
    if (card) {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateY = ((x / rect.width) - 0.5) * 10;
            const rotateX = ((y / rect.height) - 0.5) * -10;
            
            requestAnimationFrame(() => {
                card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
        });
    }

    /*==================================
      5. 容器進場動畫
    ==================================*/
    const container = document.querySelector(".container");
    if (container) {
        container.animate(
            [
                { opacity: 0, transform: "translateY(40px)" },
                { opacity: 1, transform: "translateY(0)" }
            ],
            {
                duration: 700,
                easing: "ease-out",
                fill: "forwards"
            }
        );
    }

});
