const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const message = document.getElementById("message");

const messages = [
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely sure?",
    "This could be a mistake!",
    "Have a heart!"
];

let messageIndex = 0;

noButton.addEventListener("mouseover", () => {
    const buttonRect = noButton.getBoundingClientRect();
    const maxX = window.innerWidth - buttonRect.width;
    const maxY = window.innerHeight - buttonRect.height;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    
    if (messageIndex < messages.length) {
        message.textContent = messages[messageIndex];
        messageIndex++;
    }
});

yesButton.addEventListener("click", () => {
    document.querySelector(".container").innerHTML = `
        <h1>I Love You Kutri! ❤️</h1>
        <p class="love-text">Every moment with you is like a dream come true. You make my heart skip a beat and bring joy to my life. Thank you for being my Valentine!</p>
        <img src="https://media.giphy.com/media/LXONhtCmN32YU/giphy.gif" alt="romantic hearts">
        <p class="love-text">You're the most special person in my world, Kutri! 💑</p>
    `;
}); 