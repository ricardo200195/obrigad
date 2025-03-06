
const balloonContainer = document.getElementById('balloon-container');

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    const size = Math.random() * 50 + 30; // Tamanho aleatório entre 30 e 80px
    const leftPosition = Math.random() * window.innerWidth; // Posição horizontal aleatória
    
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`; // Cor aleatória
    balloon.style.left = `${leftPosition}px`;

    balloonContainer.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 5000); // Remove o balão após a animação
}

function generateBalloons() {
    setInterval(createBalloon, 500); // Gera um balão a cada 500ms
}

// Inicia a animação de balões
generateBalloons();
