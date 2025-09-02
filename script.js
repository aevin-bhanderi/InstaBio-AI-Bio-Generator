const bios = [
    "Dream big, hustle harder. 💪",
    "Coding my way to success 🚀",
    "Travel addict ✈️ | Coffee lover ☕",
    "Living life one meme at a time 😂",
    "Tech enthusiast 💻 | Nature lover 🌿",
    "Building dreams with code 🏗️",
    "Explorer 🌍 | Learner 📚 | Creator ✨",
    "Minimalist mindset, maximalist goals 🎯",
    "Chasing sunsets & success 🌅",
    "AI + Creativity = Future 🔮"
];

function generateBio() {
    let keyword = document.getElementById("keyword").value.trim();
    let randomBio = bios[Math.floor(Math.random() * bios.length)];
    
    if (keyword) {
        randomBio = `${keyword} | ${randomBio}`;
    }
    
    document.getElementById("bioResult").innerText = randomBio;
    document.getElementById("copyBtn").style.display = "inline-block";
}

function copyBio() {
    const bioText = document.getElementById("bioResult").innerText;
    navigator.clipboard.writeText(bioText).then(() => {
        alert("Bio copied to clipboard!");
    });
}
