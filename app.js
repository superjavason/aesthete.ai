const STORAGE_KEY = "taste-quest-v2";
const LEVEL_XP = 200;

function photoUrl(id, w, h) {
  w = w || 800;
  h = h || 600;
  return "https://images.unsplash.com/photo-" + id + "?w=" + w + "&h=" + h + "&fit=crop&q=80";
}

// ── Taste Duel Data ──────────────────────────────────────────

const tasteDuels = [
  {
    id: "serenity-vs-energy",
    prompt: "Which aesthetic speaks to you more?",
    labelA: "Serenity",
    labelB: "Energy",
    photoA: "1506744038136-46273834b3fb",
    photoB: "1518837695005-2083093ee35b",
    titleA: "Mountain Lake at Dawn",
    titleB: "Ocean Wave Power",
    percentA: 62,
    bookSource: "Ch. 21-25",
    insight: "Restraint is not absence. Both silence and energy are aesthetic strategies. The point is not which is better, but whether you can articulate why one moves you more.",
    tags: ["serene", "vast", "cool"],
  },
  {
    id: "minimal-vs-ornate",
    prompt: "Less or more — which world do you prefer?",
    labelA: "Minimal",
    labelB: "Expressive",
    photoA: "1494438639946-1ebd1d20bf85",
    photoB: "1502790671504-542ad42d5189",
    titleA: "Soft Gradient",
    titleB: "Colorful Street Wall",
    percentA: 48,
    bookSource: "Ch. 1",
    insight: "Taste is not a preference for simplicity or complexity. It is the ability to articulate why something works — or fails — within its own logic.",
    tags: ["minimal", "abstract", "soft"],
  },
  {
    id: "warm-vs-cool",
    prompt: "Warm gold or cool mist — which draws you in?",
    labelA: "Warm",
    labelB: "Cool",
    photoA: "1469474968028-56623f02e42e",
    photoB: "1489515217757-5fd1be406fef",
    titleA: "Golden Mountain Valley",
    titleB: "Misty Cityscape",
    percentA: 55,
    bookSource: "Ch. 16-20",
    insight: "Color preference is often culturally inherited rather than individually chosen. The first step toward taste is noticing what draws you — and asking why.",
    tags: ["warm", "golden", "landscape"],
  },
  {
    id: "nature-vs-design",
    prompt: "Where does beauty live — in the wild or in the designed?",
    labelA: "Nature",
    labelB: "Design",
    photoA: "1441974231531-c6227db76b6e",
    photoB: "1487958449943-2429e8be8625",
    titleA: "Forest Canopy",
    titleB: "Modern Architecture",
    percentA: 58,
    bookSource: "Ch. 112",
    insight: "Nature teaches form without ego. Design teaches intention with discipline. Both are aesthetic teachers — the question is which you need more right now.",
    tags: ["nature", "organic", "green"],
  },
  {
    id: "intimate-vs-vast",
    prompt: "Close-up or panorama — which scale reveals more?",
    labelA: "Intimate",
    labelB: "Vast",
    photoA: "1495474472287-4d71bcdd2085",
    photoB: "1472214103451-9374bd1c798e",
    titleA: "Morning Coffee",
    titleB: "Mountain Panorama",
    percentA: 43,
    bookSource: "Ch. 137",
    insight: "Perception changes with distance. Close-up reveals texture and material honesty. Distance reveals structure and proportion. Your default reveals your habit.",
    tags: ["intimate", "warm", "still-life"],
  },
  {
    id: "order-vs-chaos",
    prompt: "Geometry or spontaneity — which composition is stronger?",
    labelA: "Order",
    labelB: "Spontaneity",
    photoA: "1486325212027-8081e485255e",
    photoB: "1449824913935-59a10b8d2000",
    titleA: "Architectural Corridor",
    titleB: "Busy City Street",
    percentA: 51,
    bookSource: "Ch. 16",
    insight: "Composition is not about following rules. It is the emotional architecture of what you frame. Order calms; chaos energizes. The question is what story you want to tell.",
    tags: ["architecture", "geometric", "ordered"],
  },
  {
    id: "light-vs-shadow",
    prompt: "Which light tells a better story?",
    labelA: "Bright",
    labelB: "Moody",
    photoA: "1465056836041-7f43ac27dcb5",
    photoB: "1541701494587-cb58502866ab",
    titleA: "Golden Sunset",
    titleB: "Deep Color Abstract",
    percentA: 57,
    bookSource: "Ch. 122",
    insight: "Light is the first material of photography. What you illuminate matters, but what you leave in shadow matters equally. Both are choices.",
    tags: ["bright", "golden", "warm"],
  },
  {
    id: "precision-vs-softness",
    prompt: "Sharp edges or gentle curves — which texture speaks louder?",
    labelA: "Precision",
    labelB: "Softness",
    photoA: "1431576901776-e539bd916ba2",
    photoB: "1518531933037-91b2f5f229cc",
    titleA: "Bridge Structure",
    titleB: "Cherry Blossoms",
    percentA: 41,
    bookSource: "Ch. 31-35",
    insight: "Material honesty — showing what something is made of — has been a core aesthetic principle since the Bauhaus. Soft or hard, the question is whether the material is true to its nature.",
    tags: ["precision", "geometric", "industrial"],
  },
];

// ── Composition Eye Data ─────────────────────────────────────

const compositionQuizzes = [
  {
    id: "comp-corridor",
    photo: "1486325212027-8081e485255e",
    title: "Architectural Corridor",
    question: "What is the primary composition technique used here?",
    options: ["Rule of Thirds", "Leading Lines", "Symmetry", "Framing"],
    answer: 3,
    explanation: "The doorway and corridor walls create a natural frame-within-a-frame, drawing your eye through layers of depth toward the vanishing point.",
    bookSource: "Ch. 16",
  },
  {
    id: "comp-bridge",
    photo: "1431576901776-e539bd916ba2",
    title: "Bridge Structure",
    question: "Which composition principle drives this image?",
    options: ["Leading Lines", "Rule of Thirds", "Negative Space", "Pattern"],
    answer: 0,
    explanation: "The bridge cables and structure converge toward a vanishing point, pulling your eye along the lines into the distance.",
    bookSource: "Ch. 16",
  },
  {
    id: "comp-building",
    photo: "1487958449943-2429e8be8625",
    title: "Modern Building",
    question: "What gives this image its sense of balance?",
    options: ["Symmetry", "Rule of Thirds", "Leading Lines", "Dynamic Tension"],
    answer: 0,
    explanation: "The building is mirrored along a central axis. Symmetry creates order, calm, and a feeling of intentional design.",
    bookSource: "Ch. 16",
  },
  {
    id: "comp-panorama",
    photo: "1472214103451-9374bd1c798e",
    title: "Mountain Panorama",
    question: "What makes this composition breathe?",
    options: ["Rule of Thirds", "Negative Space", "Symmetry", "Framing"],
    answer: 1,
    explanation: "The vast sky surrounding the mountains creates generous negative space. This emptiness is not wasted — it amplifies the subject through contrast.",
    bookSource: "Ch. 16",
  },
  {
    id: "comp-lake",
    photo: "1506744038136-46273834b3fb",
    title: "Mountain Lake",
    question: "Where does your eye rest first — and why?",
    options: ["Rule of Thirds", "Symmetry", "Leading Lines", "Pattern"],
    answer: 0,
    explanation: "The horizon sits near the top third line. The mountain peaks align with the intersection points. Rule of thirds creates natural focal weight.",
    bookSource: "Ch. 16",
  },
  {
    id: "comp-street",
    photo: "1449824913935-59a10b8d2000",
    title: "City Street",
    question: "What composition technique creates depth here?",
    options: ["Symmetry", "Framing", "Leading Lines", "Negative Space"],
    answer: 2,
    explanation: "The road, buildings, and traffic lanes converge toward a vanishing point, creating a strong sense of depth and drawing the eye into the scene.",
    bookSource: "Ch. 16",
  },
  {
    id: "comp-flower",
    photo: "1490730141103-6cac27aaab94",
    title: "Flower Close-up",
    question: "Why does this image feel so focused?",
    options: ["Center Composition", "Rule of Thirds", "Negative Space", "Leading Lines"],
    answer: 0,
    explanation: "The subject is placed deliberately at the center, breaking the rule of thirds. Center composition creates a bold, confrontational focal point that demands attention.",
    bookSource: "Ch. 16",
  },
  {
    id: "comp-skyline",
    photo: "1480714378408-67cf0d13bc1b",
    title: "City Skyline",
    question: "How is the visual weight distributed?",
    options: ["Symmetry", "Rule of Thirds", "Framing", "Dynamic Tension"],
    answer: 1,
    explanation: "The skyline occupies the lower third while the dramatic sky fills the upper two thirds. This classic ratio gives the sky room to dominate emotionally.",
    bookSource: "Ch. 16",
  },
];

// ── Blind Judge Data ─────────────────────────────────────────

const blindJudges = [
  {
    id: "blind-waterfall",
    photo: "1470071459604-3b5ec3a7fe05",
    title: "Dramatic Waterfall",
    reveal: "This location receives over 2 million visitors per year. It is one of Iceland's most photographed waterfalls.",
    reflection: "Did you judge the photograph's quality — or the location's fame? Popularity of a subject does not equal quality of its capture.",
    bookSource: "Ch. 149 — Anchoring Effect",
  },
  {
    id: "blind-abstract",
    photo: "1550859492-d5da9d8e45f3",
    title: "Soft Gradient",
    reveal: "This image was sold as a fine art print for $18,000 at a Chelsea gallery in New York.",
    reflection: "Price creates authority. Would knowing the market value have changed your initial response? The book warns against letting external anchors replace internal perception.",
    bookSource: "Ch. 149 — Anchoring Effect",
  },
  {
    id: "blind-street",
    photo: "1449824913935-59a10b8d2000",
    title: "City Street",
    reveal: "This street photo received 234,000 likes on Instagram and was featured by National Geographic.",
    reflection: "Social proof is a powerful anchor. Would those numbers have inflated your rating? Herd signals can confirm or distort — the question is whether you noticed before the numbers arrived.",
    bookSource: "Ch. 150 — Herd Bias",
  },
  {
    id: "blind-leaves",
    photo: "1490750967868-88aa4f44baee",
    title: "Autumn Scene",
    reveal: "This was taken with a basic smartphone camera during a casual afternoon walk. No editing, no professional lens.",
    reflection: "Equipment does not determine beauty. Did you assume it required a professional setup? Great perception can come from any tool.",
    bookSource: "Ch. 148 — Confirmation Bias",
  },
  {
    id: "blind-interior",
    photo: "1479839672679-a46483c0e7c8",
    title: "Modern Interior",
    reveal: "This space is a 3D rendering — it does not exist as a physical room. It was made entirely in software.",
    reflection: "We judge spaces as real even when they are simulations. What does 'authentic' mean when digital fabrication is indistinguishable from reality?",
    bookSource: "Ch. 74 — Aesthetic Ethics in AI",
  },
  {
    id: "blind-coffee",
    photo: "1495474472287-4d71bcdd2085",
    title: "Coffee Moment",
    reveal: "This is among the 100 most downloaded free stock photos in the world. It has been used in thousands of ads, blogs, and presentations.",
    reflection: "Familiarity breeds comfort, but also blindness. When you have seen something everywhere, can you still see it? The book calls this the availability trap.",
    bookSource: "Ch. 152 — Availability Trap",
  },
];

// ── Boss Battle Data ─────────────────────────────────────────

const bossDeck = [
  {
    boss: "Echo Chamber",
    title: "Confirmation Bias",
    photo: "1507003211169-0a1dd7228f2d",
    prompt: "You already love a photographer. Their new series feels weaker, but your circle praises it. What is the strongest move?",
    choices: [
      "Assume the series is strong because people with taste already approved it.",
      "Search for the sharpest criticism, then list three strengths and three weaknesses before deciding.",
      "Skip judgment entirely because taste is always subjective anyway.",
      "Wait for a bigger account to tell you the correct take.",
    ],
    answer: 1,
    explanation: "The book treats taste as reasoned judgment, not loyalty. Seeking disconfirming evidence weakens the echo chamber and strengthens your independent perception.",
  },
  {
    boss: "First Impression Kraken",
    title: "Anchoring Effect",
    photo: "1479839672679-a46483c0e7c8",
    prompt: "A chair is introduced as a luxury design icon before you sit in it. How do you resist the anchor?",
    choices: [
      "Accept that price and reputation are part of quality, so they should lead your verdict.",
      "Rate comfort, proportion, and material first without brand context — then compare afterward.",
      "Ignore all context forever and refuse to learn any history about any object.",
      "Ask social media whether it is worth liking.",
    ],
    answer: 1,
    explanation: "A blind first pass separates direct perception from external prestige. Context enriches — but it should inform, not trap, the initial judgment.",
  },
  {
    boss: "Crowd Siren",
    title: "Herd Bias",
    photo: "1490730141103-6cac27aaab94",
    prompt: "An artwork becomes the most photographed piece in the exhibition. Your own reaction is flat. What should you do?",
    choices: [
      "Take the social proof as evidence that your reaction must be wrong.",
      "Reject it harder, because popular things are usually shallow.",
      "Form a private judgment first, then compare it with public enthusiasm and explain the gap.",
      "Copy the crowd so your taste stays socially safe.",
    ],
    answer: 2,
    explanation: "The goal is neither blind conformity nor contrarian performance. Independent judgment comes first; social comparison comes later as learning, not as correction.",
  },
  {
    boss: "Guru Golem",
    title: "Authority Effect",
    photo: "1465056836041-7f43ac27dcb5",
    prompt: "A famous critic dismisses a film that deeply moved you. What is the most disciplined response?",
    choices: [
      "Drop your response because the expert is more qualified than you.",
      "Attack the critic personally for ruining your experience.",
      "Keep your feeling, study the critic's reasons, and test whether their criteria reveal something you missed.",
      "Only trust critics who already agree with your taste.",
    ],
    answer: 2,
    explanation: "Critical thinking integrates feeling and analysis. Authority can expand your view without erasing your experience. The point is dialogue, not surrender.",
  },
  {
    boss: "Feed Hydra",
    title: "Availability Trap",
    photo: "1525909002-1b05e0c869d8",
    prompt: "Your taste archive is filled with whatever the algorithm showed you most often. How do you reopen the field?",
    choices: [
      "Lean harder into the feed because repetition proves relevance.",
      "Sample intentionally outside your loop and tag what feels different rather than instantly better.",
      "Delete everything and start from zero every weekend.",
      "Assume the archive is already diverse if it feels busy.",
    ],
    answer: 1,
    explanation: "The book recommends active search, diversity, and deliberate curation. Availability is beaten by intentional exposure — not by passive abundance or destructive resets.",
  },
];

// ── Daily Challenge Data ─────────────────────────────────────

const dailyChallenges = [
  {
    day: 0,
    title: "Light Watch",
    theme: "Sunday",
    photo: "1465056836041-7f43ac27dcb5",
    prompt: "Observe how light changes one object or space around you today. Describe the quality of the light — is it warm or cool? Harsh or soft? What mood does it create?",
    skill: "perception",
    bookSource: "Ch. 19 — Light and Shadow",
  },
  {
    day: 1,
    title: "Color Census",
    theme: "Monday",
    photo: "1525909002-1b05e0c869d8",
    prompt: "Name the 3 dominant colors in your immediate surroundings. Are they harmonious or clashing? Was the combination intentional or accidental?",
    skill: "perception",
    bookSource: "Ch. 17 — Color Perception",
  },
  {
    day: 2,
    title: "Frame Game",
    theme: "Tuesday",
    photo: "1486325212027-8081e485255e",
    prompt: "Find a natural frame in your environment — a window, doorway, arch, or gap between objects. What does it contain? How does the frame change what you see inside it?",
    skill: "expression",
    bookSource: "Ch. 16 — Composition",
  },
  {
    day: 3,
    title: "Texture Touch",
    theme: "Wednesday",
    photo: "1490750967868-88aa4f44baee",
    prompt: "Touch three different surfaces near you. Rank them from roughest to smoothest. Which texture feels most honest to its material? Which feels most pleasant?",
    skill: "perception",
    bookSource: "Ch. 31-35 — Material Aesthetics",
  },
  {
    day: 4,
    title: "Silence & Noise",
    theme: "Thursday",
    photo: "1489515217757-5fd1be406fef",
    prompt: "Find the most peaceful and the most chaotic spot accessible to you. Spend one minute in each. What makes one calming and the other stimulating? Is it visual, auditory, or spatial?",
    skill: "reflection",
    bookSource: "Ch. 9 — Staying Sensitive",
  },
  {
    day: 5,
    title: "Object Story",
    theme: "Friday",
    photo: "1495474472287-4d71bcdd2085",
    prompt: "Pick one everyday object near you. Without mentioning brand, price, or who made it — describe what makes it well or poorly designed. Focus on shape, proportion, material, and feel.",
    skill: "judgment",
    bookSource: "Ch. 1 — What Is Taste?",
  },
  {
    day: 6,
    title: "Week in Review",
    theme: "Saturday",
    photo: "1518531933037-91b2f5f229cc",
    prompt: "What was the most beautiful moment you noticed this week? What was the most aesthetically jarring? What pattern can you spot in what attracts and repels you?",
    skill: "reflection",
    bookSource: "Ch. 47 — Daily Aesthetic Recording",
  },
];

// ── Badge Definitions ────────────────────────────────────────

const badgeDefs = [
  { id: "first-duel", icon: "🤺", title: "First Duel", desc: "Complete your first Taste Duel.", check: function(s) { return s.exercisesCompleted.tasteDuel > 0; } },
  { id: "sharp-eye", icon: "👁️", title: "Sharp Eye", desc: "Score 5 correct in Composition Eye.", check: function(s) { return s.exercisesCompleted.compositionCorrect >= 5; } },
  { id: "bias-breaker", icon: "⚔️", title: "Bias Breaker", desc: "Win a Boss Battle with a perfect score.", check: function(s) { return s.bossWins >= 1; } },
  { id: "blind-judge", icon: "🎭", title: "Honest Judge", desc: "Complete 3 Blind Judge exercises.", check: function(s) { return s.exercisesCompleted.blindJudge >= 3; } },
  { id: "daily-streak-3", icon: "🔥", title: "On Fire", desc: "Maintain a 3-day activity streak.", check: function(s) { return s.streak >= 3; } },
  { id: "collector", icon: "🗂️", title: "Collector", desc: "Save 5 items to your archive.", check: function(s) { return s.archiveItems.length >= 5; } },
  { id: "all-rounder", icon: "🌟", title: "All-Rounder", desc: "Raise all four skills to 20+.", check: function(s) { return Object.values(s.skills).every(function(v) { return v >= 20; }); } },
  { id: "level-5", icon: "🏆", title: "Taste Apprentice", desc: "Reach Level 5.", check: function(s) { return Math.floor(s.xp / LEVEL_XP) + 1 >= 5; } },
];

// ── State Management ─────────────────────────────────────────

function defaultState() {
  return {
    xp: 0,
    streak: 0,
    lastActivityDate: "",
    skills: { perception: 0, judgment: 0, expression: 0, reflection: 0 },
    exercisesCompleted: {
      tasteDuel: 0,
      compositionEye: 0,
      compositionCorrect: 0,
      blindJudge: 0,
      bossBattle: 0,
    },
    bossWins: 0,
    dailyEntries: [],
    archiveItems: [],
    completedDuelIds: [],
    completedCompIds: [],
    completedBlindIds: [],
    completedDailyDates: [],
  };
}

function loadState() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    var parsed = JSON.parse(raw);
    var base = defaultState();
    return {
      xp: parsed.xp || base.xp,
      streak: parsed.streak || base.streak,
      lastActivityDate: parsed.lastActivityDate || base.lastActivityDate,
      skills: Object.assign({}, base.skills, parsed.skills || {}),
      exercisesCompleted: Object.assign({}, base.exercisesCompleted, parsed.exercisesCompleted || {}),
      bossWins: parsed.bossWins || base.bossWins,
      dailyEntries: Array.isArray(parsed.dailyEntries) ? parsed.dailyEntries : [],
      archiveItems: Array.isArray(parsed.archiveItems) ? parsed.archiveItems : [],
      completedDuelIds: Array.isArray(parsed.completedDuelIds) ? parsed.completedDuelIds : [],
      completedCompIds: Array.isArray(parsed.completedCompIds) ? parsed.completedCompIds : [],
      completedBlindIds: Array.isArray(parsed.completedBlindIds) ? parsed.completedBlindIds : [],
      completedDailyDates: Array.isArray(parsed.completedDailyDates) ? parsed.completedDailyDates : [],
    };
  } catch (e) {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

var state = loadState();

function addXP(amount) {
  state.xp += amount;
}

function addSkills(rewards) {
  Object.keys(rewards).forEach(function(key) {
    if (state.skills[key] !== undefined) {
      state.skills[key] = Math.min(100, state.skills[key] + rewards[key]);
    }
  });
}

function registerActivity() {
  var today = todayKey();
  var yesterday = dateKey(-1);
  if (state.lastActivityDate === today) return;
  state.streak = state.lastActivityDate === yesterday ? state.streak + 1 : 1;
  state.lastActivityDate = today;
}

function getLevel() { return Math.floor(state.xp / LEVEL_XP) + 1; }
function getLevelProgress() { return (state.xp % LEVEL_XP) / LEVEL_XP; }

function getSignature() {
  var skills = state.skills;
  var top = Object.keys(skills).reduce(function(a, b) { return skills[a] >= skills[b] ? a : b; });
  var map = { perception: "Sharp Observer", judgment: "Critical Thinker", expression: "Creative Voice", reflection: "Deep Reflector" };
  return map[top] || "Explorer";
}

// ── Navigation ───────────────────────────────────────────────

var currentTab = "home";
var viewContainer = document.getElementById("viewContainer");
var exerciseOverlay = document.getElementById("exerciseOverlay");
var tabBar = document.getElementById("tabBar");
var toastEl = document.getElementById("toast");
var rewardPopup = document.getElementById("rewardPopup");

tabBar.addEventListener("click", function(e) {
  var tab = e.target.closest("[data-tab]");
  if (!tab) return;
  switchTab(tab.dataset.tab);
});

function switchTab(tab) {
  currentTab = tab;
  tabBar.querySelectorAll(".tab-item").forEach(function(el) {
    el.classList.toggle("active", el.dataset.tab === tab);
  });
  renderView();
  viewContainer.scrollTop = 0;
}

function renderView() {
  switch (currentTab) {
    case "home": renderHome(); break;
    case "play": renderPlay(); break;
    case "daily": renderDaily(); break;
    case "collection": renderCollection(); break;
    case "profile": renderProfile(); break;
  }
}

// ── View: Home ───────────────────────────────────────────────

function renderHome() {
  var level = getLevel();
  var sig = getSignature();
  var todayDuels = getAvailableDuels();
  var featured = todayDuels.length > 0 ? todayDuels[0] : tasteDuels[0];

  viewContainer.innerHTML =
    '<div class="view-home">' +
      '<div class="home-hero">' +
        '<div class="home-hero-content">' +
          '<p class="home-level">Level ' + level + ' — ' + esc(sig) + '</p>' +
          '<h1>Ready to<br>train today?</h1>' +
        '</div>' +
        '<div class="home-stats">' +
          '<div class="home-stat"><strong>' + state.xp + '</strong><span>XP</span></div>' +
          '<div class="home-stat"><strong>' + state.streak + '</strong><span>Streak</span></div>' +
          '<div class="home-stat"><strong>' + getTodayExerciseCount() + '</strong><span>Today</span></div>' +
        '</div>' +
      '</div>' +

      '<div class="home-section fade-up fade-up-delay-1">' +
        '<h2 class="home-section-title">Today\'s Pick</h2>' +
        '<button class="home-featured" data-action="start-duel" data-duel-id="' + featured.id + '">' +
          '<img class="home-featured-img" src="' + photoUrl(featured.photoA, 800, 400) + '" alt="" loading="lazy" />' +
          '<div class="home-featured-body">' +
            '<span class="home-featured-tag">Taste Duel</span>' +
            '<h3>' + esc(featured.labelA) + ' vs ' + esc(featured.labelB) + '</h3>' +
            '<p>' + esc(featured.prompt) + '</p>' +
          '</div>' +
        '</button>' +
      '</div>' +

      '<div class="home-quick-actions fade-up fade-up-delay-2">' +
        '<button class="home-action" data-action="go-play"><span class="home-action-icon">🎯</span><span>Play</span></button>' +
        '<button class="home-action" data-action="go-daily"><span class="home-action-icon">📸</span><span>Daily</span></button>' +
        '<button class="home-action" data-action="go-collection"><span class="home-action-icon">🗂️</span><span>Archive</span></button>' +
      '</div>' +

      '<div class="home-section fade-up fade-up-delay-3">' +
        '<h2 class="home-section-title">Your Four Muscles</h2>' +
        '<div class="home-skills-grid">' +
          renderSkillCard("Perception", state.skills.perception) +
          renderSkillCard("Judgment", state.skills.judgment) +
          renderSkillCard("Expression", state.skills.expression) +
          renderSkillCard("Reflection", state.skills.reflection) +
        '</div>' +
      '</div>' +
    '</div>';

  viewContainer.querySelector("[data-action='start-duel']").addEventListener("click", function() {
    openExercise("taste-duel");
  });
  viewContainer.querySelector("[data-action='go-play']").addEventListener("click", function() { switchTab("play"); });
  viewContainer.querySelector("[data-action='go-daily']").addEventListener("click", function() { switchTab("daily"); });
  viewContainer.querySelector("[data-action='go-collection']").addEventListener("click", function() { switchTab("collection"); });
}

function renderSkillCard(name, value) {
  return '<div class="home-skill-card">' +
    '<div class="home-skill-header"><span>' + name + '</span><strong>' + value + '</strong></div>' +
    '<div class="skill-track"><div class="skill-fill" style="width:' + value + '%"></div></div>' +
  '</div>';
}

function getTodayExerciseCount() {
  var today = todayKey();
  var count = 0;
  if (state.completedDailyDates.indexOf(today) >= 0) count++;
  state.completedDuelIds.forEach(function() { count++; });
  return count;
}

// ── View: Play ───────────────────────────────────────────────

function renderPlay() {
  var duel = tasteDuels[0];
  var comp = compositionQuizzes[0];
  var blind = blindJudges[0];

  viewContainer.innerHTML =
    '<div class="view-play">' +
      '<div class="play-header">' +
        '<h1>Exercises</h1>' +
        '<p>Train perception, judgment, and expression with real photos</p>' +
      '</div>' +
      '<div class="exercise-grid">' +

        '<button class="exercise-card fade-up" data-exercise="taste-duel">' +
          '<div class="exercise-preview">' +
            '<img src="' + photoUrl(duel.photoA, 400, 300) + '" alt="" loading="lazy" />' +
            '<div class="preview-divider"></div>' +
            '<img src="' + photoUrl(duel.photoB, 400, 300) + '" alt="" loading="lazy" />' +
            '<span class="preview-label preview-label-a">A</span>' +
            '<span class="preview-label preview-label-b">B</span>' +
          '</div>' +
          '<div class="exercise-info">' +
            '<span class="exercise-tag judgment">Judgment</span>' +
            '<h3>Taste Duel</h3>' +
            '<p>Two photos. One choice. Explain why one resonates more.</p>' +
            '<div class="exercise-meta"><span>~2 min</span><span>+40 XP</span></div>' +
          '</div>' +
        '</button>' +

        '<button class="exercise-card fade-up fade-up-delay-1" data-exercise="composition-eye">' +
          '<div class="exercise-preview single">' +
            '<img src="' + photoUrl(comp.photo, 800, 300) + '" alt="" loading="lazy" />' +
          '</div>' +
          '<div class="exercise-info">' +
            '<span class="exercise-tag perception">Perception</span>' +
            '<h3>Composition Eye</h3>' +
            '<p>Identify the composition principles at work in each photo.</p>' +
            '<div class="exercise-meta"><span>~2 min</span><span>+35 XP</span></div>' +
          '</div>' +
        '</button>' +

        '<button class="exercise-card fade-up fade-up-delay-2" data-exercise="blind-judge">' +
          '<div class="exercise-preview single">' +
            '<img src="' + photoUrl(blind.photo, 800, 300) + '" alt="" loading="lazy" />' +
          '</div>' +
          '<div class="exercise-info">' +
            '<span class="exercise-tag reflection">Reflection</span>' +
            '<h3>Blind Judge</h3>' +
            '<p>Rate a photo with no context. Then discover what you missed.</p>' +
            '<div class="exercise-meta"><span>~3 min</span><span>+45 XP</span></div>' +
          '</div>' +
        '</button>' +

        '<button class="exercise-card fade-up fade-up-delay-3" data-exercise="boss-battle">' +
          '<div class="exercise-preview boss-preview">' +
            '<div class="boss-icon">⚔️</div>' +
          '</div>' +
          '<div class="exercise-info">' +
            '<span class="exercise-tag expression">Critical Thinking</span>' +
            '<h3>Bias Boss Battle</h3>' +
            '<p>Five rounds against the cognitive traps that flatten taste.</p>' +
            '<div class="exercise-meta"><span>~5 min</span><span>+90 XP</span></div>' +
          '</div>' +
        '</button>' +

      '</div>' +
    '</div>';

  viewContainer.querySelectorAll("[data-exercise]").forEach(function(btn) {
    btn.addEventListener("click", function() {
      openExercise(btn.dataset.exercise);
    });
  });
}

// ── View: Daily ──────────────────────────────────────────────

function renderDaily() {
  var day = new Date().getDay();
  var challenge = dailyChallenges[day];
  var today = todayKey();
  var doneToday = state.completedDailyDates.indexOf(today) >= 0;
  var todayEntry = state.dailyEntries.find(function(e) { return e.date === today; });

  viewContainer.innerHTML =
    '<div class="view-daily">' +
      '<div class="daily-header">' +
        '<h1>Daily Challenge</h1>' +
        '<p>A new perception mission every day</p>' +
      '</div>' +
      '<div class="daily-card fade-up">' +
        '<img class="daily-card-img" src="' + photoUrl(challenge.photo) + '" alt="" loading="lazy" />' +
        '<div class="daily-card-body">' +
          '<p class="daily-card-day">' + esc(challenge.theme) + ' — ' + esc(challenge.title) + '</p>' +
          '<h2>' + esc(challenge.title) + '</h2>' +
          '<p>' + esc(challenge.prompt) + '</p>' +
          '<p style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:16px">From the book: ' + esc(challenge.bookSource) + '</p>' +
          (doneToday ?
            '<div class="daily-done-badge">✓ Completed today</div>' +
            (todayEntry ? '<div class="daily-entry"><div class="daily-entry-text">' + esc(todayEntry.text) + '</div></div>' : '')
          :
            '<div class="daily-form" id="dailyForm">' +
              '<textarea id="dailyInput" placeholder="Write your observation here..." rows="4"></textarea>' +
              '<button class="btn btn-primary btn-block" id="dailySubmit">Submit Response</button>' +
            '</div>'
          ) +
        '</div>' +
      '</div>' +
      renderDailyHistory() +
    '</div>';

  if (!doneToday) {
    document.getElementById("dailySubmit").addEventListener("click", submitDaily);
  }
}

function submitDaily() {
  var input = document.getElementById("dailyInput");
  var text = input.value.trim();
  if (!text) { showToast("Write your observation first."); return; }

  var today = todayKey();
  var day = new Date().getDay();
  var challenge = dailyChallenges[day];

  state.dailyEntries.unshift({ date: today, text: text, title: challenge.title, theme: challenge.theme });
  state.dailyEntries = state.dailyEntries.slice(0, 30);
  if (state.completedDailyDates.indexOf(today) < 0) {
    state.completedDailyDates.push(today);
  }

  var skillReward = {};
  skillReward[challenge.skill] = 8;
  addXP(30);
  addSkills(skillReward);
  registerActivity();
  saveState();
  showToast("+30 XP — Daily challenge complete!");
  renderDaily();
}

function renderDailyHistory() {
  if (state.dailyEntries.length === 0) return '';
  var html = '<div class="daily-history fade-up fade-up-delay-1"><h3 class="daily-history-title">Past Entries</h3>';
  state.dailyEntries.slice(0, 5).forEach(function(entry) {
    html += '<div class="daily-entry">' +
      '<div class="daily-entry-date">' + esc(entry.theme || "") + ' — ' + esc(entry.date) + '</div>' +
      '<div class="daily-entry-text">' + esc(entry.text) + '</div>' +
    '</div>';
  });
  html += '</div>';
  return html;
}

// ── View: Collection ─────────────────────────────────────────

function renderCollection() {
  var items = state.archiveItems;

  if (items.length === 0) {
    viewContainer.innerHTML =
      '<div class="view-collection">' +
        '<div class="collection-header"><h1>Your Archive</h1><p>Photos saved from exercises build your taste profile</p></div>' +
        '<div class="collection-empty fade-up">' +
          '<div class="collection-empty-icon">🖼️</div>' +
          '<h3>No saved photos yet</h3>' +
          '<p>When you complete exercises, you can save photos that resonate with you. Your archive reveals patterns in what moves you.</p>' +
          '<button class="btn btn-primary" style="margin-top:16px" data-action="go-play">Start Playing</button>' +
        '</div>' +
      '</div>';
    viewContainer.querySelector("[data-action='go-play']").addEventListener("click", function() { switchTab("play"); });
    return;
  }

  var tagCounts = {};
  items.forEach(function(item) {
    (item.tags || []).forEach(function(tag) {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  var topTag = Object.keys(tagCounts).sort(function(a, b) { return tagCounts[b] - tagCounts[a]; })[0] || "variety";

  viewContainer.innerHTML =
    '<div class="view-collection">' +
      '<div class="collection-header"><h1>Your Archive</h1><p>' + items.length + ' saved photo' + (items.length === 1 ? '' : 's') + '</p></div>' +
      '<div class="collection-insight fade-up">' +
        '<h3>Your taste leans toward: ' + esc(topTag) + '</h3>' +
        '<p>Patterns emerge as you save more. Keep playing exercises to discover what consistently moves you.</p>' +
      '</div>' +
      '<div class="collection-grid">' +
        items.map(function(item, i) {
          return '<div class="collection-item fade-up fade-up-delay-' + Math.min(i, 4) + '">' +
            '<img class="collection-item-img" src="' + photoUrl(item.photoId, 400, 300) + '" alt="" loading="lazy" />' +
            '<div class="collection-item-body">' +
              '<h4>' + esc(item.title) + '</h4>' +
              (item.note ? '<p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.4;margin-bottom:4px">' + esc(item.note.substring(0, 80)) + '</p>' : '') +
              '<div class="collection-item-tags">' + (item.tags || []).map(function(t) { return '<span class="collection-tag">' + esc(t) + '</span>'; }).join("") + '</div>' +
              '<div class="collection-item-source">' + esc(item.source || "") + '</div>' +
            '</div>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</div>';
}

// ── View: Profile ────────────────────────────────────────────

function renderProfile() {
  var level = getLevel();
  var progress = getLevelProgress();
  var sig = getSignature();
  var xpToNext = LEVEL_XP - (state.xp % LEVEL_XP);
  var totalExercises = state.exercisesCompleted.tasteDuel + state.exercisesCompleted.compositionEye + state.exercisesCompleted.blindJudge + state.exercisesCompleted.bossBattle;

  viewContainer.innerHTML =
    '<div class="view-profile">' +
      '<div class="profile-hero fade-up">' +
        '<div class="profile-ring" style="--progress:' + Math.max(0.02, progress).toFixed(3) + 'turn"><span>Lv.' + level + '</span></div>' +
        '<h2>' + esc(sig) + '</h2>' +
        '<p>Level ' + level + ' — ' + state.xp + ' total XP</p>' +
        '<div class="profile-xp-bar"><div class="profile-xp-fill" style="width:' + (progress * 100).toFixed(1) + '%"></div></div>' +
        '<div class="profile-xp-label"><span>' + (state.xp % LEVEL_XP) + ' / ' + LEVEL_XP + '</span><span>' + xpToNext + ' XP to next level</span></div>' +
      '</div>' +

      '<div class="profile-stats fade-up fade-up-delay-1">' +
        '<div class="profile-stat"><strong>' + state.streak + '</strong><span>Day Streak</span></div>' +
        '<div class="profile-stat"><strong>' + totalExercises + '</strong><span>Exercises</span></div>' +
        '<div class="profile-stat"><strong>' + state.archiveItems.length + '</strong><span>Archived</span></div>' +
      '</div>' +

      '<div class="profile-section fade-up fade-up-delay-2">' +
        '<h3 class="profile-section-title">Skill Progress</h3>' +
        '<div class="profile-skills">' +
          renderProfileSkill("Perception", state.skills.perception, "How much nuance you notice before labels arrive.") +
          renderProfileSkill("Judgment", state.skills.judgment, "How well you compare, defend, and revise choices.") +
          renderProfileSkill("Expression", state.skills.expression, "How clearly you articulate taste into language.") +
          renderProfileSkill("Reflection", state.skills.reflection, "How consistently you convert experience into insight.") +
        '</div>' +
      '</div>' +

      '<div class="profile-section fade-up fade-up-delay-3">' +
        '<h3 class="profile-section-title">Achievements</h3>' +
        '<div class="badge-grid">' +
          badgeDefs.map(function(badge) {
            var unlocked = badge.check(state);
            return '<div class="badge-card ' + (unlocked ? 'unlocked' : '') + '">' +
              '<div class="badge-icon">' + badge.icon + '</div>' +
              '<h4>' + esc(badge.title) + '</h4>' +
              '<p>' + esc(badge.desc) + '</p>' +
            '</div>';
          }).join("") +
        '</div>' +
      '</div>' +
    '</div>';
}

function renderProfileSkill(name, value, desc) {
  return '<div class="profile-skill">' +
    '<div class="profile-skill-row"><span>' + name + '</span><strong>' + value + ' / 100</strong></div>' +
    '<div class="skill-track"><div class="skill-fill" style="width:' + value + '%"></div></div>' +
    '<p style="font-size:0.8rem;color:var(--text-secondary);margin-top:6px;line-height:1.4">' + esc(desc) + '</p>' +
  '</div>';
}

// ── Exercise System ──────────────────────────────────────────

var exerciseSession = null;

function openExercise(type) {
  switch (type) {
    case "taste-duel": startTasteDuel(); break;
    case "composition-eye": startCompositionEye(); break;
    case "blind-judge": startBlindJudge(); break;
    case "boss-battle": startBossBattle(); break;
  }
}

function showOverlay() {
  exerciseOverlay.classList.add("active");
}

function closeOverlay() {
  exerciseOverlay.classList.remove("active");
  exerciseSession = null;
  renderView();
}

// ── Exercise: Taste Duel ─────────────────────────────────────

function getAvailableDuels() {
  var seed = hashString(todayKey());
  return seededShuffle(tasteDuels.slice(), seed);
}

function startTasteDuel() {
  var duels = getAvailableDuels();
  exerciseSession = {
    type: "taste-duel",
    rounds: duels.slice(0, 3),
    currentRound: 0,
    phase: "choose",
    chosen: null,
    totalXP: 0,
    totalSkills: { perception: 0, judgment: 0, expression: 0, reflection: 0 },
  };
  renderTasteDuelRound();
  showOverlay();
}

function renderTasteDuelRound() {
  var s = exerciseSession;
  if (s.currentRound >= s.rounds.length) {
    renderExerciseComplete("Taste Duel Complete", s.totalXP, s.totalSkills);
    return;
  }

  var duel = s.rounds[s.currentRound];
  exerciseOverlay.innerHTML =
    '<div class="exercise-screen">' +
      '<div class="exercise-topbar">' +
        '<button class="exercise-close" data-action="close">&times;</button>' +
        '<span class="exercise-topbar-title">Taste Duel</span>' +
        '<span class="exercise-topbar-progress">' + (s.currentRound + 1) + ' / ' + s.rounds.length + '</span>' +
      '</div>' +
      '<div class="exercise-body" id="duelBody">' +
        '<p class="duel-prompt">' + esc(duel.prompt) + '</p>' +
        '<div class="duel-photos">' +
          '<button class="duel-photo-btn" data-choice="a">' +
            '<img src="' + photoUrl(duel.photoA) + '" alt="' + esc(duel.labelA) + '" loading="lazy" />' +
            '<span class="duel-photo-label">A</span>' +
          '</button>' +
          '<button class="duel-photo-btn" data-choice="b">' +
            '<img src="' + photoUrl(duel.photoB) + '" alt="' + esc(duel.labelB) + '" loading="lazy" />' +
            '<span class="duel-photo-label">B</span>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</div>';

  exerciseOverlay.querySelector("[data-action='close']").addEventListener("click", closeOverlay);
  exerciseOverlay.querySelectorAll(".duel-photo-btn").forEach(function(btn) {
    btn.addEventListener("click", function() { duelChoose(btn.dataset.choice); });
  });
}

function duelChoose(choice) {
  exerciseSession.chosen = choice;
  exerciseSession.phase = "explain";

  var duel = exerciseSession.rounds[exerciseSession.currentRound];
  var body = document.getElementById("duelBody");
  var btns = body.querySelectorAll(".duel-photo-btn");
  btns.forEach(function(btn) {
    if (btn.dataset.choice === choice) {
      btn.classList.add("selected");
    } else {
      btn.classList.add("dimmed");
    }
  });

  var explainHTML =
    '<div class="duel-explain">' +
      '<p>Why did you choose <strong>' + esc(choice === "a" ? duel.labelA : duel.labelB) + '</strong>?</p>' +
      '<textarea id="duelReason" placeholder="In one sentence..."></textarea>' +
      '<button class="btn btn-primary btn-block" id="duelSubmitReason">Share Your Reason</button>' +
      '<button class="btn btn-secondary btn-block btn-sm" id="duelSkipReason">Skip</button>' +
    '</div>';
  body.insertAdjacentHTML("beforeend", explainHTML);

  document.getElementById("duelSubmitReason").addEventListener("click", function() { duelShowInsight(true); });
  document.getElementById("duelSkipReason").addEventListener("click", function() { duelShowInsight(false); });
}

function duelShowInsight(hasReason) {
  exerciseSession.phase = "insight";
  var s = exerciseSession;
  var duel = s.rounds[s.currentRound];
  var pA = s.chosen === "a" ? duel.percentA : (100 - duel.percentA);
  var pB = 100 - pA;
  var reasonText = "";
  var reasonEl = document.getElementById("duelReason");
  if (reasonEl) reasonText = reasonEl.value.trim();

  var xp = hasReason && reasonText ? 45 : 30;
  var skills = { judgment: 6, perception: 4 };
  if (hasReason && reasonText) { skills.expression = 4; }
  s.totalXP += xp;
  Object.keys(skills).forEach(function(k) { s.totalSkills[k] = (s.totalSkills[k] || 0) + skills[k]; });

  var body = document.getElementById("duelBody");
  var explain = body.querySelector(".duel-explain");
  if (explain) explain.remove();

  var insightHTML =
    '<div class="duel-insight">' +
      '<div class="duel-result-bar">' +
        '<div class="duel-result-a ' + (s.chosen === "a" ? "chosen" : "") + '" style="width:' + pA + '%">' + esc(duel.labelA) + ' ' + pA + '%</div>' +
        '<div class="duel-result-b ' + (s.chosen === "b" ? "chosen" : "") + '" style="width:' + pB + '%">' + esc(duel.labelB) + ' ' + pB + '%</div>' +
      '</div>' +
      '<div class="insight-card">' +
        '<span class="insight-source">From the book — ' + esc(duel.bookSource) + '</span>' +
        '<p class="insight-text">' + esc(duel.insight) + '</p>' +
      '</div>' +
      '<div class="duel-save-row">' +
        '<button class="btn btn-secondary btn-sm" data-action="save-photo" data-photo="' + (s.chosen === "a" ? duel.photoA : duel.photoB) + '" data-title="' + esc(s.chosen === "a" ? duel.titleA : duel.titleB) + '" data-tags="' + esc(duel.tags.join(",")) + '">Save to Archive</button>' +
        '<button class="btn btn-primary btn-sm" style="flex:1" id="duelNext">' + (s.currentRound < s.rounds.length - 1 ? "Next Duel" : "Finish") + '</button>' +
      '</div>' +
    '</div>';
  body.insertAdjacentHTML("beforeend", insightHTML);

  body.querySelector("[data-action='save-photo']").addEventListener("click", function(e) {
    var btn = e.currentTarget;
    saveToArchive(btn.dataset.photo, btn.dataset.title, btn.dataset.tags.split(","), "Taste Duel");
    btn.textContent = "Saved ✓";
    btn.disabled = true;
  });

  document.getElementById("duelNext").addEventListener("click", function() {
    s.currentRound++;
    s.chosen = null;
    s.phase = "choose";
    renderTasteDuelRound();
  });
}

// ── Exercise: Composition Eye ────────────────────────────────

function startCompositionEye() {
  var quizzes = seededShuffle(compositionQuizzes.slice(), hashString(todayKey() + "comp"));
  exerciseSession = {
    type: "composition-eye",
    rounds: quizzes.slice(0, 3),
    currentRound: 0,
    correctCount: 0,
    totalXP: 0,
    totalSkills: { perception: 0, judgment: 0, expression: 0, reflection: 0 },
  };
  renderCompRound();
  showOverlay();
}

function renderCompRound() {
  var s = exerciseSession;
  if (s.currentRound >= s.rounds.length) {
    state.exercisesCompleted.compositionEye++;
    state.exercisesCompleted.compositionCorrect += s.correctCount;
    addXP(s.totalXP);
    addSkills(s.totalSkills);
    registerActivity();
    saveState();
    renderExerciseComplete("Composition Eye Complete", s.totalXP, s.totalSkills, s.correctCount + "/" + s.rounds.length + " correct");
    return;
  }

  var quiz = s.rounds[s.currentRound];
  exerciseOverlay.innerHTML =
    '<div class="exercise-screen">' +
      '<div class="exercise-topbar">' +
        '<button class="exercise-close" data-action="close">&times;</button>' +
        '<span class="exercise-topbar-title">Composition Eye</span>' +
        '<span class="exercise-topbar-progress">' + (s.currentRound + 1) + ' / ' + s.rounds.length + '</span>' +
      '</div>' +
      '<div class="exercise-body" id="compBody">' +
        '<img class="comp-photo" src="' + photoUrl(quiz.photo) + '" alt="" loading="lazy" />' +
        '<p class="comp-question">' + esc(quiz.question) + '</p>' +
        '<div class="comp-options">' +
          quiz.options.map(function(opt, i) {
            return '<button class="comp-option" data-option="' + i + '">' + esc(opt) + '</button>';
          }).join("") +
        '</div>' +
      '</div>' +
    '</div>';

  exerciseOverlay.querySelector("[data-action='close']").addEventListener("click", closeOverlay);
  exerciseOverlay.querySelectorAll(".comp-option").forEach(function(btn) {
    btn.addEventListener("click", function() { compAnswer(parseInt(btn.dataset.option)); });
  });
}

function compAnswer(chosen) {
  var s = exerciseSession;
  var quiz = s.rounds[s.currentRound];
  var correct = chosen === quiz.answer;

  if (correct) {
    s.correctCount++;
    s.totalXP += 40;
    s.totalSkills.perception += 6;
    s.totalSkills.judgment += 3;
  } else {
    s.totalXP += 15;
    s.totalSkills.perception += 2;
  }

  var body = document.getElementById("compBody");
  body.querySelectorAll(".comp-option").forEach(function(btn, i) {
    btn.disabled = true;
    if (i === quiz.answer) btn.classList.add("correct");
    if (i === chosen && !correct) btn.classList.add("wrong");
  });

  var explHTML =
    '<div class="comp-explanation">' +
      '<div class="insight-card">' +
        '<span class="insight-source">' + (correct ? "Correct!" : "Not quite") + ' — ' + esc(quiz.bookSource) + '</span>' +
        '<p class="insight-text">' + esc(quiz.explanation) + '</p>' +
      '</div>' +
      '<div style="display:flex;gap:10px;margin-top:12px">' +
        '<button class="btn btn-secondary btn-sm" data-action="save-photo" data-photo="' + quiz.photo + '" data-title="' + esc(quiz.title) + '" data-tags="composition">Save to Archive</button>' +
        '<button class="btn btn-primary btn-sm" style="flex:1" id="compNext">' + (s.currentRound < s.rounds.length - 1 ? "Next Photo" : "Finish") + '</button>' +
      '</div>' +
    '</div>';
  body.insertAdjacentHTML("beforeend", explHTML);

  body.querySelector("[data-action='save-photo']").addEventListener("click", function(e) {
    var btn = e.currentTarget;
    saveToArchive(btn.dataset.photo, btn.dataset.title, btn.dataset.tags.split(","), "Composition Eye");
    btn.textContent = "Saved ✓";
    btn.disabled = true;
  });

  document.getElementById("compNext").addEventListener("click", function() {
    s.currentRound++;
    renderCompRound();
  });
}

// ── Exercise: Blind Judge ────────────────────────────────────

function startBlindJudge() {
  var judges = seededShuffle(blindJudges.slice(), hashString(todayKey() + "blind"));
  exerciseSession = {
    type: "blind-judge",
    rounds: judges.slice(0, 2),
    currentRound: 0,
    phase: "rate",
    rating: 0,
    totalXP: 0,
    totalSkills: { perception: 0, judgment: 0, expression: 0, reflection: 0 },
  };
  renderBlindRound();
  showOverlay();
}

function renderBlindRound() {
  var s = exerciseSession;
  if (s.currentRound >= s.rounds.length) {
    state.exercisesCompleted.blindJudge++;
    addXP(s.totalXP);
    addSkills(s.totalSkills);
    registerActivity();
    saveState();
    renderExerciseComplete("Blind Judge Complete", s.totalXP, s.totalSkills);
    return;
  }

  s.phase = "rate";
  s.rating = 0;
  var judge = s.rounds[s.currentRound];

  exerciseOverlay.innerHTML =
    '<div class="exercise-screen">' +
      '<div class="exercise-topbar">' +
        '<button class="exercise-close" data-action="close">&times;</button>' +
        '<span class="exercise-topbar-title">Blind Judge</span>' +
        '<span class="exercise-topbar-progress">' + (s.currentRound + 1) + ' / ' + s.rounds.length + '</span>' +
      '</div>' +
      '<div class="exercise-body" id="blindBody">' +
        '<img class="blind-photo" src="' + photoUrl(judge.photo) + '" alt="" loading="lazy" />' +
        '<p class="blind-prompt">No context. No likes. No artist name. Just you and this image.</p>' +
        '<div class="star-rating" id="starRating">' +
          [1,2,3,4,5].map(function(n) {
            return '<button class="star-btn" data-star="' + n + '">★</button>';
          }).join("") +
        '</div>' +
        '<div class="blind-explain">' +
          '<textarea id="blindImpression" placeholder="What is your honest first reaction?"></textarea>' +
          '<button class="btn btn-primary btn-block" id="blindRevealBtn">Reveal the Context</button>' +
        '</div>' +
      '</div>' +
    '</div>';

  exerciseOverlay.querySelector("[data-action='close']").addEventListener("click", closeOverlay);

  document.querySelectorAll("#starRating .star-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      s.rating = parseInt(btn.dataset.star);
      document.querySelectorAll("#starRating .star-btn").forEach(function(b, i) {
        b.classList.toggle("active", i < s.rating);
      });
    });
  });

  document.getElementById("blindRevealBtn").addEventListener("click", blindReveal);
}

function blindReveal() {
  var s = exerciseSession;
  if (s.rating === 0) { showToast("Rate the image first — tap the stars."); return; }

  var judge = s.rounds[s.currentRound];
  var impression = (document.getElementById("blindImpression").value || "").trim();
  var xp = impression ? 50 : 35;
  var skills = { judgment: 8, reflection: 6 };
  if (impression) skills.expression = 4;
  s.totalXP += xp;
  Object.keys(skills).forEach(function(k) { s.totalSkills[k] = (s.totalSkills[k] || 0) + skills[k]; });

  var body = document.getElementById("blindBody");
  var form = body.querySelector(".blind-explain");
  var stars = body.querySelector(".star-rating");
  var prompt = body.querySelector(".blind-prompt");
  if (form) form.remove();
  if (stars) stars.remove();
  if (prompt) prompt.remove();

  var revealHTML =
    '<div class="blind-reveal">' +
      '<p style="text-align:center;color:var(--text-secondary)">Your rating: ' + '★'.repeat(s.rating) + '☆'.repeat(5 - s.rating) + '</p>' +
      (impression ? '<p style="text-align:center;font-style:italic;color:var(--text-secondary)">"' + esc(impression) + '"</p>' : '') +
      '<div class="reveal-card">' +
        '<h3>The Context You Didn\'t Have</h3>' +
        '<p>' + esc(judge.reveal) + '</p>' +
      '</div>' +
      '<div class="insight-card">' +
        '<span class="insight-source">' + esc(judge.bookSource) + '</span>' +
        '<p class="insight-text">' + esc(judge.reflection) + '</p>' +
      '</div>' +
      '<p class="reflection-prompt">Would knowing this have changed your rating? That gap is where bias lives — and where growth begins.</p>' +
      '<div style="display:flex;gap:10px">' +
        '<button class="btn btn-secondary btn-sm" data-action="save-photo" data-photo="' + judge.photo + '" data-title="' + esc(judge.title) + '" data-tags="bias,reflection">Save to Archive</button>' +
        '<button class="btn btn-primary btn-sm" style="flex:1" id="blindNext">' + (s.currentRound < s.rounds.length - 1 ? "Next Photo" : "Finish") + '</button>' +
      '</div>' +
    '</div>';
  body.insertAdjacentHTML("beforeend", revealHTML);

  body.querySelector("[data-action='save-photo']").addEventListener("click", function(e) {
    var btn = e.currentTarget;
    saveToArchive(btn.dataset.photo, btn.dataset.title, btn.dataset.tags.split(","), "Blind Judge");
    btn.textContent = "Saved ✓";
    btn.disabled = true;
  });

  document.getElementById("blindNext").addEventListener("click", function() {
    s.currentRound++;
    renderBlindRound();
  });
}

// ── Exercise: Boss Battle ────────────────────────────────────

function startBossBattle() {
  exerciseSession = {
    type: "boss-battle",
    rounds: bossDeck,
    currentRound: 0,
    correctCount: 0,
    answered: false,
    totalXP: 0,
    totalSkills: { perception: 0, judgment: 0, expression: 0, reflection: 0 },
  };
  renderBossRound();
  showOverlay();
}

function renderBossRound() {
  var s = exerciseSession;
  if (s.currentRound >= s.rounds.length) {
    var won = s.correctCount === s.rounds.length;
    if (won) state.bossWins++;
    state.exercisesCompleted.bossBattle++;
    addXP(s.totalXP);
    addSkills(s.totalSkills);
    registerActivity();
    saveState();
    renderExerciseComplete(
      won ? "Boss Defeated!" : "Battle Over",
      s.totalXP,
      s.totalSkills,
      s.correctCount + "/" + s.rounds.length + " hits"
    );
    return;
  }

  var round = s.rounds[s.currentRound];
  var health = Math.max(0, 100 - s.correctCount * 20);
  s.answered = false;

  exerciseOverlay.innerHTML =
    '<div class="exercise-screen">' +
      '<div class="exercise-topbar">' +
        '<button class="exercise-close" data-action="close">&times;</button>' +
        '<span class="exercise-topbar-title">Boss Battle</span>' +
        '<span class="exercise-topbar-progress">Round ' + (s.currentRound + 1) + ' / ' + s.rounds.length + '</span>' +
      '</div>' +
      '<div class="exercise-body" id="bossBody">' +
        '<div class="boss-header">' +
          '<p class="boss-title">' + esc(round.boss) + '</p>' +
          '<h2 class="boss-name">' + esc(round.title) + '</h2>' +
          '<div class="health-track"><div class="health-fill" style="width:' + health + '%"></div></div>' +
          '<p class="health-label">Boss Health: ' + health + '%</p>' +
        '</div>' +
        '<p class="boss-prompt">' + esc(round.prompt) + '</p>' +
        '<div class="boss-choices">' +
          round.choices.map(function(c, i) {
            return '<button class="boss-choice" data-choice="' + i + '">' + esc(c) + '</button>';
          }).join("") +
        '</div>' +
      '</div>' +
    '</div>';

  exerciseOverlay.querySelector("[data-action='close']").addEventListener("click", closeOverlay);
  exerciseOverlay.querySelectorAll(".boss-choice").forEach(function(btn) {
    btn.addEventListener("click", function() { bossAnswer(parseInt(btn.dataset.choice)); });
  });
}

function bossAnswer(chosen) {
  var s = exerciseSession;
  if (s.answered) return;
  s.answered = true;

  var round = s.rounds[s.currentRound];
  var correct = chosen === round.answer;

  if (correct) {
    s.correctCount++;
    s.totalXP += 20;
    s.totalSkills.judgment += 4;
    s.totalSkills.reflection += 2;
    showToast("Direct hit! Bias weakened.");
  } else {
    s.totalXP += 5;
    s.totalSkills.reflection += 1;
    showToast("The boss held ground. Read the explanation.");
  }

  var body = document.getElementById("bossBody");
  body.querySelectorAll(".boss-choice").forEach(function(btn, i) {
    btn.disabled = true;
    if (i === round.answer) btn.classList.add("correct");
    if (i === chosen && !correct) btn.classList.add("wrong");
  });

  var fbHTML =
    '<div class="boss-feedback">' + esc(round.explanation) + '</div>' +
    '<button class="btn btn-primary btn-block" style="margin-top:12px" id="bossNext">' +
      (s.currentRound < s.rounds.length - 1 ? "Next Round" : "Resolve Battle") +
    '</button>';
  body.insertAdjacentHTML("beforeend", fbHTML);

  document.getElementById("bossNext").addEventListener("click", function() {
    s.currentRound++;
    renderBossRound();
  });
}

// ── Exercise Complete Screen ─────────────────────────────────

function renderExerciseComplete(title, xp, skills, subtitle) {
  if (exerciseSession && exerciseSession.type === "taste-duel") {
    state.exercisesCompleted.tasteDuel++;
    addXP(xp);
    addSkills(skills);
    registerActivity();
    saveState();
  }

  var skillChips = Object.keys(skills).filter(function(k) { return skills[k] > 0; }).map(function(k) {
    return '<span class="skill-reward-chip">+' + skills[k] + ' ' + k.charAt(0).toUpperCase() + k.slice(1) + '</span>';
  }).join("");

  exerciseOverlay.innerHTML =
    '<div class="exercise-screen">' +
      '<div class="exercise-topbar">' +
        '<button class="exercise-close" data-action="close">&times;</button>' +
        '<span class="exercise-topbar-title">Complete</span>' +
        '<span></span>' +
      '</div>' +
      '<div class="exercise-complete">' +
        '<div class="complete-icon">✦</div>' +
        '<h2>' + esc(title) + '</h2>' +
        (subtitle ? '<p class="complete-subtitle">' + esc(subtitle) + '</p>' : '') +
        '<div class="xp-reward">+' + xp + ' XP</div>' +
        '<div class="skill-rewards">' + skillChips + '</div>' +
        '<div class="complete-actions">' +
          '<button class="btn btn-primary btn-block" data-action="close">Done</button>' +
        '</div>' +
      '</div>' +
    '</div>';

  exerciseOverlay.querySelector("[data-action='close']").addEventListener("click", closeOverlay);
}

// ── Save to Archive ──────────────────────────────────────────

function saveToArchive(photoId, title, tags, source) {
  state.archiveItems.unshift({
    id: Date.now() + "-" + Math.random().toString(16).slice(2, 8),
    photoId: photoId,
    title: title,
    tags: tags,
    source: source,
    note: "",
    savedAt: new Date().toISOString(),
  });
  state.archiveItems = state.archiveItems.slice(0, 50);
  saveState();
  showToast("Saved to your archive!");
}

// ── Toast ────────────────────────────────────────────────────

var toastTimer = null;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { toastEl.classList.remove("visible"); }, 2400);
}

// ── Utilities ────────────────────────────────────────────────

function esc(val) {
  return String(val)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function todayKey() {
  var d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function dateKey(offset) {
  var d = new Date();
  d.setDate(d.getDate() + offset);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function hashString(val) {
  var hash = 0;
  for (var i = 0; i < val.length; i++) {
    hash = (hash << 5) - hash + val.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function seededShuffle(arr, seed) {
  var s = seed || 1;
  for (var i = arr.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    var j = Math.floor((s / 233280) * (i + 1));
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr;
}

// ── Init ─────────────────────────────────────────────────────

renderView();
