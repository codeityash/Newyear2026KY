import './style.css';

const giftMessages = {
  'love-letter': {
    title: 'Love Letter',
    content: `My Dearest,

As we step into 2026, I want you to know that you are my greatest blessing. Every moment with you is a treasure, every smile you share lights up my world, and every day with you feels like a beautiful adventure.

You make everything better just by being you. Thank you for being my partner, my best friend, and the love of my life.

Here's to making this year even more magical than the last.

Forever yours,
Yash`
  },
  'greeting': {
    title: 'Happy New Year 2026!',
    content: `Wishing you a year filled with:

✨ Joy that never fades
💖 Love that grows stronger
🌟 Dreams that come true
🎉 Moments we'll cherish forever
🌈 Adventures we'll take together
💫 Happiness in everything you do

May 2026 bring us closer, make us stronger, and fill our hearts with endless beautiful memories.

Cheers to us and to our future!`
  },
  'promise': {
    title: 'My Promises to You',
    content: `In 2026, I promise to:

💝 Love you more each day
🤗 Be there for you always
😊 Make you smile whenever I can
💪 Support your dreams and goals
🌹 Show you how special you are
🎯 Build our future together
❤️ Choose you, every single day

These aren't just words—they're commitments from my heart. You deserve the world, and I'll do everything to give you that and more.`
  },
  'memory': {
    title: 'Making Memories in 2026',
    content: `This year, let's create unforgettable memories together:

🌅 Watch sunrises and sunsets
📸 Capture countless beautiful moments
🗺️ Explore new places
🎭 Try new experiences
🍽️ Share delicious meals
🎵 Dance to our favorite songs
💑 Grow closer every day

Every moment with you becomes a cherished memory. Let's make 2026 a year we'll look back on and smile.

Ready for this adventure?`
  }
};

function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';

  return new Promise((resolve) => {
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        resolve();
      }
    }
    type();
  });
}

function createFloatingHearts() {
  const container = document.getElementById('floating-hearts');
  const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘'];

  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }, 500);
}

function createConfetti() {
  const container = document.getElementById('confetti-container');
  const colors = ['#FFB6C1', '#FFD700', '#FF91A4', '#FFC9D1', '#FFD4BC'];

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 2 + 's';
      confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
      container.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 4000);
    }, i * 30);
  }

  setInterval(() => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(confetti);

        setTimeout(() => {
          confetti.remove();
        }, 4000);
      }, i * 100);
    }
  }, 3000);
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
}

function openGiftModal(giftType) {
  const modal = document.getElementById('gift-modal');
  const modalBody = document.getElementById('modal-body');
  const gift = giftMessages[giftType];

  if (gift) {
    modalBody.innerHTML = `
      <h2>${gift.title}</h2>
      <p>${gift.content.replace(/\n/g, '<br>')}</p>
    `;
    modal.classList.add('active');
  }
}

function closeModal() {
  const modal = document.getElementById('gift-modal');
  modal.classList.remove('active');
}

async function handleAloneChoice() {
  const aloneBtn = document.getElementById('alone');
  aloneBtn.classList.add('shake');

  setTimeout(() => {
    aloneBtn.classList.remove('shake');
  }, 500);

  setTimeout(() => {
    showSection('rejection-section');
    playRejectionFlow();
  }, 800);
}

async function playRejectionFlow() {
  const loadingMessages = document.getElementById('loading-messages');
  const sweetMessage = document.getElementById('sweet-message');
  const retryBtn = document.getElementById('retry-yash');
  const encouragement = document.querySelector('.encouragement');

  sweetMessage.textContent = '';
  sweetMessage.style.display = 'none';
  retryBtn.style.display = 'none';
  encouragement.style.display = 'none';

  const messages = [
    'Loading future...',
    'Recalculating destiny...',
    'Oops 😄'
  ];

  for (let msg of messages) {
    loadingMessages.textContent = msg;
    await new Promise(resolve => setTimeout(resolve, 1500));
  }

  loadingMessages.textContent = '';
  sweetMessage.style.display = 'block';
  await typeWriter(sweetMessage, "No matter what you choose… 2026 already comes with Yash 💕", 50);

  setTimeout(() => {
    retryBtn.style.display = 'flex';
    encouragement.style.display = 'block';
  }, 500);
}

function handleWithYashChoice() {
  showSection('celebration-section');
  createConfetti();
}

async function init() {
  const typingText = document.getElementById('typing-text');
  const subtitle = document.getElementById('subtitle');

  createFloatingHearts();

  await typeWriter(typingText, 'Welcome to 2026, my love ❤️', 80);

  await new Promise(resolve => setTimeout(resolve, 500));

  subtitle.textContent = 'Before this year begins… I have a question for you.';

  const continueBtn = document.getElementById('continue-btn');
  continueBtn.addEventListener('click', () => {
    showSection('choice-section');
  });

  const withYashBtn = document.getElementById('with-yash');
  withYashBtn.addEventListener('click', handleWithYashChoice);

  const aloneBtn = document.getElementById('alone');
  aloneBtn.addEventListener('click', handleAloneChoice);

  const retryYashBtn = document.getElementById('retry-yash');
  retryYashBtn.addEventListener('click', handleWithYashChoice);

  const giftCards = document.querySelectorAll('.gift-card');
  giftCards.forEach(card => {
    card.addEventListener('click', () => {
      const giftType = card.dataset.gift;
      openGiftModal(giftType);
    });
  });

  const modalClose = document.getElementById('modal-close');
  modalClose.addEventListener('click', closeModal);

  const modal = document.getElementById('gift-modal');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
