function startExperience() {
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('content').style.display = 'block';

    let music = document.getElementById('bg-music');
    music.volume = 0.7;  // Set volume
    music.play()
        .then(() => console.log("Music playing..."))
        .catch(error => console.log("Music autoplay blocked:", error));
}

function toggleMessage(id) {
    let element = document.getElementById(id);
    element.classList.toggle('visible');
}

function createHearts() {
    const heartsContainer = document.querySelector('.hearts');

    setInterval(() => {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

createHearts();
