//QUIZ DATA
const characters = {
  batman: {
    name: "Batman",
    role: "The Dark Knight",
    image: "images/picture8.webp",
    desc: "You are Batman — Bruce Wayne, Gotham's obsessed protector. Driven by an unshakeable vow forged in grief, you have mastered every discipline the human mind and body can offer. You plan for everything, trust almost no one, and carry the weight of the city's fate as though it were personally yours. Relentless, brilliant, and impossible to stop — but also impossibly lonely. Your greatest strength and your greatest flaw are the same thing: you never stop."
  },
  dick: {
    name: "Dick Grayson",
    role: "Robin / Nightwing",
    image: "images/picture3.webp",
    desc: "You are Dick Grayson — the first Robin, now Nightwing. You lead with warmth and loyalty rather than fear, and people follow you not because you intimidate them but because you inspire them. Acrobatic, instinctive, and fiercely protective of the people you love, you've stepped out of Batman's shadow to define yourself entirely on your own terms. You are proof that a hero's greatest power can be their heart."
  },
  alfred: {
    name: "Alfred Beagle",
    role: "The Faithful Butler",
    image: "images/picture2.webp",
    desc: "You are Alfred Beagle — the quiet backbone of everything. While others take to the rooftops, you ensure the foundation never cracks. Your loyalty is total, your devotion unwavering, and your value to those you serve immeasurable. You don't need a cape or a spotlight; you are the reason those who wear them can. Patient, dignified, and sharper than you ever let on — you are the most underestimated person in the room."
  },
  helena: {
    name: "Helena Wayne",
    role: "The Huntress",
    image: "images/picture4.webp",
    desc: "You are Helena Wayne — daughter of Batman and Catwoman, heir to two legacies and bound by neither. Your pursuit of justice is deeply personal, almost righteous in its intensity, and when someone wrongs what you hold dear, you become an unstoppable force of will. You sacrificed everything to restore your family's honor. Fierce, principled, and utterly uncompromising, you carry the weight of both your parents' worlds with a grace that is entirely your own."
  },
  kathy: {
    name: "Kathy Kane",
    role: "Batwoman",
    image: "images/picture5.webp",
    desc: "You are Kathy Kane — the original Batwoman, a wealthy Gotham heiress and former circus performer who chose adventure over comfort. Resourceful and inventive, you turned glamour into a weapon: your gadgets disguised as makeup and jewelry, your skills honed under the spotlight. Daring, adaptable, and fearlessly independent, you created your own identity in a world that didn't think there was room for one. You do everything with style."
  },
  bette: {
    name: "Bette Kane",
    role: "Bat-Girl",
    image: "images/picture6.webp",
    desc: "You are Bette Kane — the original Bat-Girl, eager, energetic, and burning to prove yourself. You stepped into a world of legends with nothing but sheer determination and an almost reckless enthusiasm. You may wear your heart on your sleeve and occasionally let instinct outrun strategy — but that same fire is exactly what makes you impossible to dismiss. You are the spark. You'll become the flame."
  },
  catwoman: {
    name: "Catwoman",
    role: "The Cat",
    image: "images/picture7.webp",
    desc: "You are Catwoman — Selina Kyle, Gotham's most captivating paradox. Morality, to you, is a sliding scale, and you navigate it with effortless precision. You answer to no one, take what you want, and vanish before anyone realizes you were there. Yet beneath the self-interest, there is a code — and certain people, certain principles, can reach it. You are not a villain and not quite a hero. You are something more interesting than either."
  }
};

const questions = [
  {
    text: "What drives you, at the deepest level?",
    options: [
      { text: "A vow made in grief — a mission that will never be finished", char: "batman" },
      { text: "Protecting the people who became your family", char: "dick" },
      { text: "Honoring a legacy and making it mean something", char: "helena" },
      { text: "The thrill of pushing past every boundary", char: "kathy" }
    ]
  },
  {
    text: "How would you describe your approach in a fight?",
    options: [
      { text: "Calculated, overwhelming, and deliberately terrifying", char: "batman" },
      { text: "Acrobatic and fluid — you turn the environment into your stage", char: "dick" },
      { text: "Fierce and relentless — you don't slow down", char: "helena" },
      { text: "Deceptive — you hide your weapons until the last moment", char: "kathy" }
    ]
  },
  {
    text: "What role do you naturally fill in a team?",
    options: [
      { text: "The strategist — everyone trusts you to have a plan", char: "batman" },
      { text: "The heart — you're the one holding everyone together", char: "dick" },
      { text: "The silent support making everything run behind the scenes", char: "alfred" },
      { text: "The wild card who changes the shape of the situation", char: "catwoman" }
    ]
  },
  {
    text: "When you experience profound loss, you:",
    options: [
      { text: "Transform it into iron purpose — grief becomes fuel", char: "batman" },
      { text: "Lean on the people closest to you and let them in", char: "dick" },
      { text: "Bury it quietly and carry on without complaint", char: "alfred" },
      { text: "Let it ignite something fierce and unrelenting inside you", char: "helena" }
    ]
  },
  {
    text: "Your greatest weapon is:",
    options: [
      { text: "Your mind — trained, relentless, always three steps ahead", char: "batman" },
      { text: "Your body — honed to an acrobatic peak", char: "dick" },
      { text: "Your charm — and what you've hidden in your accessories", char: "kathy" },
      { text: "Your instincts — and the shadows that welcome you", char: "catwoman" }
    ]
  },
  {
    text: "What would others call your biggest flaw?",
    options: [
      { text: "You cannot stop — even when every rational voice says you should", char: "batman" },
      { text: "You give people more trust than they've earned", char: "dick" },
      { text: "You're impulsive and desperately eager to prove your worth", char: "bette" },
      { text: "Anger makes your decisions before reason does", char: "helena" }
    ]
  },
  {
    text: "Facing impossible odds, your instinct is to:",
    options: [
      { text: "Remain calm — you've already prepared for exactly this", char: "batman" },
      { text: "Improvise brilliantly in the moment", char: "dick" },
      { text: "Use the chaos to vanish and regroup on your terms", char: "catwoman" },
      { text: "Plant your feet and face it without flinching", char: "helena" }
    ]
  },
  {
    text: "Your relationship with authority is:",
    options: [
      { text: "You define it — authority answers to you", char: "batman" },
      { text: "You respect it, but you forge your own path regardless", char: "dick" },
      { text: "You serve it with absolute, quiet devotion", char: "alfred" },
      { text: "You challenge it when it fails the people who need it most", char: "helena" }
    ]
  },
  {
    text: "People who know you well would describe you as:",
    options: [
      { text: "Brilliant, controlled — and impossible to fully know", char: "batman" },
      { text: "Warm, charismatic, and fiercely loyal", char: "dick" },
      { text: "Quietly indispensable — the person nothing works without", char: "alfred" },
      { text: "Intense, magnetic, and utterly unpredictable", char: "catwoman" }
    ]
  },
  {
    text: "When someone betrays you, you:",
    options: [
      { text: "Had already anticipated it — and prepared accordingly", char: "batman" },
      { text: "Are deeply hurt, but find a way to forgive eventually", char: "dick" },
      { text: "Accept it with dignity and reassess your trust", char: "alfred" },
      { text: "Never forgive. Not once. Not ever.", char: "helena" }
    ]
  },
  {
    text: "What is justice to you?",
    options: [
      { text: "An absolute — there are no grey areas worth entertaining", char: "batman" },
      { text: "Something worth fighting for on behalf of everyone", char: "dick" },
      { text: "Personal — you protect what matters to you specifically", char: "helena" },
      { text: "Flexible — outcomes matter more than methods", char: "catwoman" }
    ]
  },
  {
    text: "Choose your ideal setting:",
    options: [
      { text: "Rain-soaked Gotham rooftops at three in the morning", char: "batman" },
      { text: "A crowded city street where you read everyone around you", char: "dick" },
      { text: "A quiet manor — every shadow familiar, every corner mapped", char: "alfred" },
      { text: "A jewel exhibition you've been casing for weeks", char: "catwoman" }
    ]
  },
  {
    text: "At your core, what matters to you most?",
    options: [
      { text: "Absolute mastery of yourself and your mission", char: "batman" },
      { text: "Adventure, connection, and genuine belonging", char: "dick" },
      { text: "Excitement, independence, and the world's finer things", char: "kathy" },
      { text: "Making your family's sacrifice mean something lasting", char: "helena" }
    ]
  },
  {
    text: "Your greatest gift is:",
    options: [
      { text: "Knowing what will happen before it does", char: "batman" },
      { text: "Making every person you meet feel genuinely valued", char: "dick" },
      { text: "Surviving whatever the world throws at you", char: "bette" },
      { text: "Never compromising what you truly believe in", char: "helena" }
    ]
  },
  {
    text: "Which phrase speaks to something deep inside you?",
    options: [
      { text: "\"I am vengeance. I am the night.\"", char: "batman" },
      { text: "\"The way you treat people is who you are.\"", char: "dick" },
      { text: "\"Some must stand so that others never have to.\"", char: "alfred" },
      { text: "\"Take what the world owes you — on your own terms.\"", char: "catwoman" }
    ]
  }
];

//QUIZ ENGINE
let currentQ = 0;
let scores = {};
let selectedOption = null;

function initQuiz() {
  Object.keys(characters).forEach(k => scores[k] = 0);
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQ];
  const total = questions.length;
  const pct = (currentQ / total) * 100;

  document.querySelector('.quiz-progress-fill').style.width = pct + '%';
  document.querySelector('.q-current').textContent = 'Question ' + (currentQ + 1);
  document.querySelector('.q-total').textContent = total;
  document.querySelector('.question-number').textContent = 'Question ' + (currentQ + 1) + ' of ' + total;
  document.querySelector('.question-text').textContent = q.text;

  const grid = document.querySelector('.options-grid');
  const labels = ['A', 'B', 'C', 'D'];
  grid.innerHTML = '';
  selectedOption = null;

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-label">${labels[i]}</span><span>${opt.text}</span>`;
    btn.addEventListener('click', () => selectOption(btn, opt.char));
    grid.appendChild(btn);
  });

  const nextBtn = document.querySelector('.btn-next');
  nextBtn.textContent = currentQ === total - 1 ? 'See My Result' : 'Next Question';
  nextBtn.disabled = true;
  nextBtn.style.opacity = '0.4';

  // Animate question card
  const card = document.querySelector('.question-card');
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = 'fadeUp 0.4s ease both';
}

function selectOption(btn, charKey) {
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedOption = charKey;

  const nextBtn = document.querySelector('.btn-next');
  nextBtn.disabled = false;
  nextBtn.style.opacity = '1';
}

function nextQuestion() {
  if (selectedOption === null) return;
  scores[selectedOption]++;

  if (currentQ < questions.length - 1) {
    currentQ++;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const char = characters[winner];

  document.querySelector('.quiz-screen').classList.add('hidden');
  const rs = document.querySelector('.result-screen');
  rs.classList.add('active');

  document.querySelector('.result-progress').style.width = '100%';
  document.querySelector('.result-name').textContent = char.name;
  document.querySelector('.result-role').textContent = char.role;
  document.querySelector('.result-desc').textContent = char.desc;
  document.querySelector('.result-img').src = char.image;
  document.querySelector('.result-img').alt = char.name;
}

function restartQuiz() {
  currentQ = 0;
  Object.keys(scores).forEach(k => scores[k] = 0);
  selectedOption = null;

  document.querySelector('.quiz-screen').classList.remove('hidden');
  document.querySelector('.result-screen').classList.remove('active');
  renderQuestion();
}

//READ MORE TOGGLE
function initReadMore() {
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.char-card');
      const full = card.querySelector('.card-desc-full');
      const short = card.querySelector('.card-desc-short');
      const expanded = full.classList.contains('visible');

      if (expanded) {
        full.classList.remove('visible');
        short.style.display = 'block';
        btn.textContent = 'Read More';
      } else {
        full.classList.add('visible');
        short.style.display = 'none';
        btn.textContent = 'Read Less';
      }
    });
  });
}

//INIT
document.addEventListener('DOMContentLoaded', () => {
  //Page-specific inits
  if (document.querySelector('.options-grid')) {
    initQuiz();
    document.querySelector('.btn-next').addEventListener('click', nextQuestion);
    const restartBtn = document.querySelector('.btn-restart');
    if (restartBtn) restartBtn.addEventListener('click', restartQuiz);
  }

  if (document.querySelector('.read-more-btn')) {
    initReadMore();
  }
});
