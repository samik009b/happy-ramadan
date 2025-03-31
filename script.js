function explode(event) {
    let explosionSound = document.getElementById("explosionSound");

    // Stop and restart the sound to ensure it plays once per click
    explosionSound.pause();
    explosionSound.currentTime = 0;  
    explosionSound.play();  

    // Create the shockwave effect
    let shockwave = document.createElement("div");
    shockwave.classList.add("shockwave");
    document.body.appendChild(shockwave);
    shockwave.style.left = `${event.clientX}px`;
    shockwave.style.top = `${event.clientY}px`;
    shockwave.style.position = "absolute";
    
    setTimeout(() => shockwave.remove(), 2000);

    // Create explosion particles
    for (let i = 0; i < 100; i++) {
        let explosion = document.createElement("div");
        explosion.classList.add("explosion");
        document.body.appendChild(explosion);
        
        let colors = ["red", "orange", "yellow", "gray", "black"];
        explosion.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        explosion.style.left = `${event.clientX + (Math.random() - 0.5) * 200}px`;
        explosion.style.top = `${event.clientY + (Math.random() - 0.5) * 200}px`;
        explosion.style.position = "absolute";

        setTimeout(() => explosion.remove(), 800);
    }
}

