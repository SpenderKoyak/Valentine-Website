document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("response").innerText = "Yay! I love you! ❤️";
    document.getElementById("specialPhoto").classList.remove("hidden");
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    this.style.left = x + "px";
    this.style.top = y + "px";
})
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    let leftPosition = Math.random() * window.innerWidth;
    heart.style.left = leftPosition + "px";

    let duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + "s";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 300);
