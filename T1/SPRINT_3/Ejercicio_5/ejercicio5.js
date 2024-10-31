const grid = document.getElementById('grid');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

const cards = [
    'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
    'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'
];

let cardValues = [];
let cardIds = [];
let cardsFlipped = 0;
let lockBoard = false;

// Mezclar las cartas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Crear la cuadrícula de cartas
function createBoard() {
    const shuffledCards = shuffle(cards);
    shuffledCards.forEach((value, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', index);
        card.setAttribute('data-value', value);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    });
}

// Voltear la carta
function flipCard() {
    if (lockBoard) return;
    const selectedCard = this;
    const selectedValue = selectedCard.getAttribute('data-value');

    selectedCard.classList.add('flipped');
    selectedCard.textContent = selectedValue; // Mostrar el valor de la carta
    cardValues.push(selectedValue);
    cardIds.push(selectedCard.getAttribute('data-id'));

    if (cardValues.length === 2) {
        lockBoard = true;
        setTimeout(checkMatch, 1000);
    }
}

// Comprobar coincidencias
function checkMatch() {
    const [firstCardId, secondCardId] = cardIds;
    const firstCardValue = cardValues[0];
    const secondCardValue = cardValues[1];

    if (firstCardValue === secondCardValue) {
        cardsFlipped += 2;
        message.textContent = `¡Encontraste una pareja!`;
        if (cardsFlipped === cards.length) {
            message.textContent = `¡Felicidades, has encontrado todas las parejas!`;
            resetButton.style.display = 'block'; // Mostrar botón de reinicio
        }
    } else {
        const firstCard = document.querySelector(`.card[data-id='${firstCardId}']`);
        const secondCard = document.querySelector(`.card[data-id='${secondCardId}']`);
        
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.textContent = ''; // Ocultar el valor de la carta
        secondCard.textContent = ''; // Ocultar el valor de la carta
    }

    cardValues = [];
    cardIds = [];
    lockBoard = false;
}

// Reiniciar el juego
function resetGame() {
    grid.innerHTML = ''; // Limpiar la cuadrícula
    message.textContent = ''; // Limpiar mensaje
    cardsFlipped = 0; // Reiniciar contador de cartas volteadas
    resetButton.style.display = 'none'; // Ocultar botón de reinicio
    createBoard(); // Crear la cuadrícula de nuevo
}

// Evento del botón de reinicio
resetButton.addEventListener('click', resetGame);

// Iniciar el juego
createBoard();
