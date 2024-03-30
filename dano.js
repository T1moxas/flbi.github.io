let dino = document.querySelector(".dino");
let cactus = document.querySelector(".cactus");

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
        jump();
    }
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    }

    setTimeout(function () {
        dino.classList.remove("jump");
    }, 500);
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 30 && cactusLeft > -20 && dinoTop >= 120) {
        alert("лох");
    }
}, 10)