let scoreHomeEl = document.getElementById("score-home");
let scoreGuestEl = document.getElementById("score-guest");
let homeContainer = document.getElementById("home-container");
let guestContainer = document.getElementById("guest-container");

let scoreHome = 0;
let scoreGuest = 0;

function add1Home() {
    scoreHome += 1;
    scoreHomeEl.textContent = scoreHome;
    checkWinner();
}

function add2Home() {
    scoreHome += 2;
    scoreHomeEl.textContent = scoreHome;
    checkWinner();
}

function add3Home() {
    scoreHome += 3;
    scoreHomeEl.textContent = scoreHome;
    checkWinner();
}

function add1Guest() {
    scoreGuest += 1;
    scoreGuestEl.textContent = scoreGuest;
    checkWinner();
}

function add2Guest() {
    scoreGuest += 2;
    scoreGuestEl.textContent = scoreGuest;
    checkWinner();
}

function add3Guest() {
    scoreGuest += 3;
    scoreGuestEl.textContent = scoreGuest;
    checkWinner();
}
let timerEl = document.getElementById("timer");
let timerValue = 60; // Set timer duration in seconds
let timerInterval = null;

function startTimer() {
    timerEl.textContent = `Time: ${timerValue}`;

    timerInterval = setInterval(() => {
        timerValue -= 1;
        timerEl.textContent = `Time: ${timerValue}`;

        if (timerValue <= 0) {
            clearInterval(timerInterval);
            announceWinner();
        }
    }, 1000); // Update every second
}
function endGame() {
    announceWinner();
}


function resetGame() {
    scoreHome = 0;
    scoreGuest = 0;
    scoreHomeEl.textContent = 0;
    scoreGuestEl.textContent = 0;

    // Remove winner classes
    homeContainer.classList.remove("winner-border");
    guestContainer.classList.remove("winner-border");
    // Reset timer
    clearInterval(timerInterval);
    timerValue = 60;
    timerEl.textContent = `Time: ${timerValue}`;
}

function checkWinner() {
    // Reset borders
    homeContainer.classList.remove("winner-border");
    guestContainer.classList.remove("winner-border");

    if (scoreGuest > scoreHome) {
        guestContainer.classList.add("winner-border");
    } else if (scoreGuest < scoreHome) {
        homeContainer.classList.add("winner-border");
    }
}

function announceWinner() {
  const winnerModal = document.getElementById("winner-modal");
  const winnerMessage = document.getElementById("winner-message");
  const closeModal = document.getElementById("close-modal");

  // Determine the winner
  if (scoreHome > scoreGuest) {
    winnerMessage.textContent = "🏆 Home Team Wins!";
  } else if (scoreGuest > scoreHome) {
    winnerMessage.textContent = "🏆 Guest Team Wins!";
  } else {
    winnerMessage.textContent = "🤝 It's a Tie!";
  }

  // Show the modal
  winnerModal.style.display = "block";

  // Close modal on click
  closeModal.onclick = () => {
    winnerModal.style.display = "none";
  };

  // Close modal if user clicks outside the modal
  window.onclick = (event) => {
    if (event.target === winnerModal) {
      winnerModal.style.display = "none";
    }
  };
}


