// Defina a data do casamento
const weddingDate = new Date('July 26, 2025 16:00:00').getTime();

// Atualize a contagem regressiva a cada segundo
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Cálculos de tempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exiba a contagem regressiva
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    // Verifique se a contagem regressiva terminou
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById('countdown').innerHTML = 'O grande dia chegou!';
    }
}, 1000);
