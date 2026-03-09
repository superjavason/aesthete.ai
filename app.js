const STORAGE_KEY = "taste-quest-state-v1";
const DAILY_QUEST_COUNT = 3;
const LEVEL_XP = 180;

const learningPaths = [
  {
    id: "visual",
    name: "Visual Scout",
    focus: "Perception first",
    description:
      "Best for users who want to sharpen seeing, sensing, and noticing through images, spaces, and objects.",
  },
  {
    id: "thinking",
    name: "Thought Architect",
    focus: "Judgment first",
    description:
      "Best for users who want deeper reasoning, slower judgment, and stronger critical language.",
  },
  {
    id: "balanced",
    name: "Balanced Explorer",
    focus: "Whole-system growth",
    description:
      "Best for users who want a steady rotation of observation, reflection, experimentation, and review.",
  },
];

const worldData = [
  {
    id: "signal",
    number: "World 01",
    title: "Signal over noise",
    description:
      "Players learn to resist algorithmic autopilot and recover aesthetic sovereignty through slower attention.",
    source: "Ch. 1, 6, 9",
    type: "Mindset",
    tags: ["delay judgment", "independent choice", "attention hygiene"],
  },
  {
    id: "atelier",
    number: "World 02",
    title: "The sensory atelier",
    description:
      "A rotating set of perception drills for color, rhythm, composition, material, light, and sound.",
    source: "Ch. 16-20, 31-35",
    type: "Practice",
    tags: ["micro-observation", "everyday beauty", "multisensory play"],
  },
  {
    id: "forge",
    number: "World 03",
    title: "Expression forge",
    description:
      "Players translate taste into words, moodboards, and tiny acts of making so intuition becomes sharable.",
    source: "Ch. 21-25, 45, 85",
    type: "Creation",
    tags: ["naming", "analogy", "micro-creation"],
  },
  {
    id: "archive",
    number: "World 04",
    title: "Archive lab",
    description:
      "A personal corpus builder that transforms scattered references into patterns, tags, and reusable prompts.",
    source: "Ch. 57, 72",
    type: "System",
    tags: ["tagging", "pattern finding", "taste memory"],
  },
  {
    id: "arena",
    number: "World 05",
    title: "Bias arena",
    description:
      "Boss battles teach how confirmation bias, anchoring, and herd instincts distort aesthetic judgment.",
    source: "Ch. 148-152",
    type: "Challenge",
    tags: ["anti-echo chamber", "critical thinking", "mind reset"],
  },
  {
    id: "observatory",
    number: "World 06",
    title: "Reflection observatory",
    description:
      "Journals, trend cards, and streaks let players see how their taste changes across time rather than guessing.",
    source: "Ch. 47, 50, 153-155",
    type: "Growth",
    tags: ["daily journal", "weekly review", "visible progress"],
  },
];

const bookParts = [
  {
    id: "foundations",
    label: "Part I",
    name: "Cognitive Foundations",
    summary: "Understand what taste is before trying to train it.",
  },
  {
    id: "training",
    label: "Part II",
    name: "Structured Training",
    summary: "Turn taste into repeatable drills across seeing, language, and daily life.",
  },
  {
    id: "ai",
    label: "Part III",
    name: "AI and Taste",
    summary: "Use machines as tools without surrendering judgment to them.",
  },
  {
    id: "media",
    label: "Part IV",
    name: "Media and Communication",
    summary: "Read contemporary media with stronger aesthetic literacy.",
  },
  {
    id: "uiux",
    label: "Part V",
    name: "UI and UX Aesthetics",
    summary: "Treat digital products as one of the main aesthetic arenas of today.",
  },
  {
    id: "material",
    label: "Part VI",
    name: "Material World",
    summary: "Train taste through packaging, space, architecture, and image.",
  },
  {
    id: "deepening",
    label: "Part VII",
    name: "Cognitive Deepening",
    summary: "Study bias, identity, metacognition, and the long arc of personal taste.",
  },
  {
    id: "finale",
    label: "Part VIII",
    name: "Finale",
    summary: "Close the loop and prepare the next chapter of your own practice.",
  },
];

const routeGuides = [
  {
    id: "full-map",
    title: "Full map",
    description:
      "Browse the platform as a complete atlas of the book’s core route across all eight parts.",
    source: "Platform mode",
  },
  {
    id: "beginner-path",
    title: "Beginner path",
    description:
      "Start from foundations, then move into training and reflection. Inspired by the book’s guidance for new readers.",
    source: "README — beginners",
  },
  {
    id: "creator-path",
    title: "Creator path",
    description:
      "Jump into expressive, design-oriented, and practice-heavy chapters while keeping the foundations in view.",
    source: "README — creative workers",
  },
  {
    id: "ai-path",
    title: "AI explorer",
    description:
      "Follow the route for readers interested in AI, but keep judgment and ethics in the center.",
    source: "README — AI readers",
  },
  {
    id: "sprint-path",
    title: "One-week sprint",
    description:
      "A compressed skeleton route built around the book’s own one-week chapter recommendation.",
    source: "README — one week",
  },
];

const chapterAtlas = [
  {
    id: "ch-001",
    number: 1,
    source: "Ch. 1",
    title: "What Is Taste? Why Everyone Needs It",
    partId: "foundations",
    promise: "Taste is judgment grounded in knowledge, not just preference or prestige.",
    play: "Observe one everyday object without using brand, price, or popularity as criteria.",
    challenge: "Describe line, material, proportion, and feeling in plain language.",
    routes: ["beginner-path", "creator-path", "ai-path", "sprint-path"],
    rewards: { xp: 24, perception: 4, judgment: 8 },
  },
  {
    id: "ch-003",
    number: 3,
    source: "Ch. 3",
    title: "Aesthetics and Cognitive Science",
    partId: "foundations",
    promise: "Learn how the brain turns pattern, emotion, and memory into beauty judgments.",
    play: "Notice one reaction your body has before you explain it intellectually.",
    challenge: "Separate the immediate sensation from the later interpretation.",
    routes: ["beginner-path", "ai-path"],
    rewards: { xp: 22, perception: 5, reflection: 7 },
  },
  {
    id: "ch-008",
    number: 8,
    source: "Ch. 8",
    title: "Ways of Seeing as a Case Study",
    partId: "foundations",
    promise: "Train yourself to see visual culture as ideology, framing, and power rather than neutral display.",
    play: "Look at one image and ask what kind of seeing it teaches you to repeat.",
    challenge: "Describe the hidden point of view built into the image.",
    routes: ["beginner-path", "sprint-path"],
    rewards: { xp: 24, judgment: 6, reflection: 6 },
  },
  {
    id: "ch-009",
    number: 9,
    source: "Ch. 9",
    title: "Staying Sensitive in an Age of Overload",
    partId: "foundations",
    promise: "Protect attention so subtle value still has a chance to be felt.",
    play: "Reduce feed noise for one session and replace it with one deliberate encounter.",
    challenge: "Identify what is loud, what is merely repetitive, and what is actually meaningful.",
    routes: ["beginner-path", "ai-path"],
    rewards: { xp: 24, judgment: 6, reflection: 6 },
  },
  {
    id: "ch-015",
    number: 15,
    source: "Ch. 15",
    title: "One-Year Learning Roadmap",
    partId: "foundations",
    promise: "Map taste growth as a long game with modules, blind spots, and chosen priorities.",
    play: "Answer the route questions: strength, blind spot, dependency, and one-year goal.",
    challenge: "Choose a path that is realistic enough to survive the second week.",
    routes: ["beginner-path", "sprint-path"],
    rewards: { xp: 26, judgment: 5, reflection: 8 },
  },
  {
    id: "ch-016",
    number: 16,
    source: "Ch. 16",
    title: "Composition: From Rule to Breakthrough",
    partId: "training",
    promise: "See how framing and arrangement create force, calm, hierarchy, and surprise.",
    play: "Take three photos of the same scene with different compositional logic.",
    challenge: "Explain what changes emotionally when the frame changes.",
    routes: ["beginner-path", "creator-path"],
    rewards: { xp: 24, perception: 8, expression: 3 },
  },
  {
    id: "ch-021",
    number: 21,
    source: "Ch. 21",
    title: "Rhetoric as the Shape of Thought",
    partId: "training",
    promise: "Use language as a precision tool for shaping aesthetic thought, not decoration alone.",
    play: "Rewrite one vague opinion into a sharper aesthetic claim with evidence.",
    challenge: "Replace empty praise with a concrete rhetorical observation.",
    routes: ["beginner-path", "creator-path"],
    rewards: { xp: 24, expression: 8, judgment: 4 },
  },
  {
    id: "ch-030",
    number: 30,
    source: "Ch. 30",
    title: "Metacognition: Thinking About Your Thinking",
    partId: "training",
    promise: "Catch yourself in the act of judging, not only after the judgment is over.",
    play: "Name the assumptions and mood you brought into one aesthetic encounter today.",
    challenge: "Notice whether your reaction came from the work or from your state.",
    routes: ["beginner-path", "ai-path", "sprint-path"],
    rewards: { xp: 26, judgment: 5, reflection: 8 },
  },
  {
    id: "ch-045",
    number: 45,
    source: "Ch. 45",
    title: "From Viewer to Maker",
    partId: "training",
    promise: "Taste deepens when you move from watching form to wrestling with form.",
    play: "Make a tiny thing today: a caption, a sketch, a layout, a playlist, or a framing study.",
    challenge: "Reflect on how making changes what you notice when you consume.",
    routes: ["creator-path", "sprint-path"],
    rewards: { xp: 26, expression: 7, reflection: 5 },
  },
  {
    id: "ch-047",
    number: 47,
    source: "Ch. 47",
    title: "A Daily Aesthetic Recording Method",
    partId: "training",
    promise: "Turn fleeting moments into a repeatable evidence trail of what moves you.",
    play: "Record one moment, one challenge, one discovery, one reflection, one intention.",
    challenge: "Keep the entry honest, concrete, and short enough to repeat tomorrow.",
    routes: ["beginner-path"],
    rewards: { xp: 26, reflection: 9, expression: 4 },
  },
  {
    id: "ch-050",
    number: 50,
    source: "Ch. 50",
    title: "Bring the Method into Daily Life",
    partId: "training",
    promise: "Make taste a way of living rather than a special event for cultured moments only.",
    play: "Redesign one routine so beauty and attention become the default, not the exception.",
    challenge: "Create a system you can keep even on a chaotic week.",
    routes: ["beginner-path", "creator-path"],
    rewards: { xp: 24, perception: 4, reflection: 8 },
  },
  {
    id: "ch-052",
    number: 52,
    source: "Ch. 52",
    title: "Questions, Obstacles, and the Next Direction",
    partId: "training",
    promise: "Anticipate resistance, confusion, and plateaus so the practice can survive real life.",
    play: "Write your own top three obstacles and the smallest response system for each.",
    challenge: "Solve for continuity, not for an ideal week that never comes.",
    routes: ["beginner-path", "sprint-path"],
    rewards: { xp: 24, reflection: 8, judgment: 4 },
  },
  {
    id: "ch-054",
    number: 54,
    source: "Ch. 54",
    title: "What Is AI-Assisted Aesthetics",
    partId: "ai",
    promise: "Define the proper relationship between human judgment and machine assistance.",
    play: "List what AI can accelerate for you and what it must never decide for you.",
    challenge: "Keep utility and sovereignty distinct.",
    routes: ["ai-path"],
    rewards: { xp: 22, judgment: 7, reflection: 5 },
  },
  {
    id: "ch-057",
    number: 57,
    source: "Ch. 57",
    title: "Build a Personal Taste Corpus with AI",
    partId: "ai",
    promise: "Move from random collecting to a searchable, meaningful archive of references.",
    play: "Tag one saved reference by style, color, mood, and personal use.",
    challenge: "Explain why this item belongs in your corpus and not just your pile.",
    routes: ["creator-path", "ai-path"],
    rewards: { xp: 24, perception: 6, judgment: 5 },
  },
  {
    id: "ch-063",
    number: 63,
    source: "Ch. 63",
    title: "How AI Can Build Aesthetic Ability in Education",
    partId: "ai",
    promise: "Use AI for access and feedback without letting it flatten culture, body, or dialogue.",
    play: "Split one lesson into what AI should do and what only humans should do.",
    challenge: "Protect social, embodied, and critical dimensions of learning.",
    routes: ["ai-path"],
    rewards: { xp: 24, judgment: 6, reflection: 6 },
  },
  {
    id: "ch-072",
    number: 72,
    source: "Ch. 72",
    title: "Your Personal AI Taste Toolbox",
    partId: "ai",
    promise: "Assemble tools that serve your standards instead of steering them.",
    play: "Design a tiny workflow: discover, compare, save, reflect.",
    challenge: "Remove one tool or step that only adds noise.",
    routes: ["creator-path", "ai-path"],
    rewards: { xp: 24, judgment: 5, expression: 4, reflection: 4 },
  },
  {
    id: "ch-074",
    number: 74,
    source: "Ch. 74",
    title: "Aesthetic Ethics in the AI Era",
    partId: "ai",
    promise: "Keep efficiency, originality, fairness, and responsibility in the same frame.",
    play: "Audit one AI-generated output for quality, bias, and authorship ethics.",
    challenge: "Say what is useful, what is suspect, and what is missing.",
    routes: ["ai-path"],
    rewards: { xp: 26, judgment: 8, reflection: 6 },
  },
  {
    id: "ch-081",
    number: 81,
    source: "Ch. 81",
    title: "Crossing the Fog of Algorithms",
    partId: "ai",
    promise: "Close the AI section by recovering the human role of discernment inside abundance.",
    play: "Summarize your AI stance in one sentence: what you let it amplify and what you keep in your own hands.",
    challenge: "End the section with a rule, not just a feeling.",
    routes: ["ai-path", "sprint-path"],
    rewards: { xp: 26, judgment: 8, reflection: 6 },
  },
  {
    id: "ch-085",
    number: 85,
    source: "Ch. 85",
    title: "Aesthetic Principles for Content Creation",
    partId: "media",
    promise: "Move from passive consumption to deliberate making with taste and restraint.",
    play: "Take one piece of content you made and edit it for clarity, rhythm, and emotional honesty.",
    challenge: "Cut anything that only begs for attention without deepening the idea.",
    routes: ["creator-path"],
    rewards: { xp: 24, expression: 8, judgment: 4 },
  },
  {
    id: "ch-089",
    number: 89,
    source: "Ch. 89",
    title: "Game Design as Interactive Aesthetics",
    partId: "media",
    promise: "Understand mechanics, narrative, and emotion as a single aesthetic system.",
    play: "Design a micro-mechanic with no more than three rules and predict the feeling it creates.",
    challenge: "Explain how the rule set itself becomes style.",
    routes: ["creator-path"],
    rewards: { xp: 26, expression: 6, judgment: 6 },
  },
  {
    id: "ch-090",
    number: 90,
    source: "Ch. 90",
    title: "The Aesthetic Dimension of Media Literacy",
    partId: "media",
    promise: "See persuasion, framing, and emotional engineering instead of only content surfaces.",
    play: "Break down one piece of media into message, aesthetic strategy, and emotional leverage.",
    challenge: "Separate truth value from seductive presentation.",
    routes: ["ai-path", "creator-path"],
    rewards: { xp: 24, judgment: 8, reflection: 4 },
  },
  {
    id: "ch-093",
    number: 93,
    source: "Ch. 93",
    title: "UX Beyond Usability",
    partId: "uiux",
    promise: "Good digital experiences are functional, but the memorable ones also have rhythm and dignity.",
    play: "Audit one app screen for utility, emotional tone, and aesthetic friction.",
    challenge: "Name what is usable yet still aesthetically dead.",
    routes: ["creator-path"],
    rewards: { xp: 24, perception: 5, judgment: 6 },
  },
  {
    id: "ch-099",
    number: 99,
    source: "Ch. 99",
    title: "The Aesthetics of AI Interfaces",
    partId: "uiux",
    promise: "Design conversations with machines that feel trustworthy, legible, and humane.",
    play: "Improve one AI interface by changing tone, expectation setting, or feedback clarity.",
    challenge: "Reduce intimidation without making the system vague.",
    routes: ["creator-path", "ai-path"],
    rewards: { xp: 24, expression: 5, judgment: 5, reflection: 4 },
  },
  {
    id: "ch-112",
    number: 112,
    source: "Ch. 112",
    title: "Foundations of Architectural Aesthetics",
    partId: "material",
    promise: "Read space not only as shelter but as an art of scale, proportion, and movement.",
    play: "Walk through one space and track how your body and mood change from zone to zone.",
    challenge: "Explain the emotional structure of the space without hiding behind jargon.",
    routes: ["creator-path"],
    rewards: { xp: 24, perception: 8, reflection: 4 },
  },
  {
    id: "ch-122",
    number: 122,
    source: "Ch. 122",
    title: "Photography Basics: Painting with Light and Time",
    partId: "material",
    promise: "Treat photography as a discipline of light, patience, framing, and timing.",
    play: "Capture the same subject at two different times of day and compare the emotional result.",
    challenge: "Say what time changed that angle alone could not.",
    routes: ["creator-path"],
    rewards: { xp: 24, perception: 8, expression: 3 },
  },
  {
    id: "ch-137",
    number: 137,
    source: "Ch. 137",
    title: "Seeing How You See",
    partId: "deepening",
    promise: "Make the act of aesthetic perception itself visible to consciousness.",
    play: "Observe one work while narrating your shifts in focus, emotion, and interpretation.",
    challenge: "Notice the moment your attention narrows or widens.",
    routes: ["beginner-path"],
    rewards: { xp: 26, reflection: 9, judgment: 4 },
  },
  {
    id: "ch-145",
    number: 145,
    source: "Ch. 145",
    title: "Personal Aesthetic Signature",
    partId: "deepening",
    promise: "Move from random taste fragments toward a recognizable pattern that still stays open.",
    play: "List five qualities that recur across your favorite works, objects, spaces, and sounds.",
    challenge: "Find a signature without turning it into a cage.",
    routes: ["creator-path"],
    rewards: { xp: 26, expression: 7, reflection: 6 },
  },
  {
    id: "ch-148",
    number: 148,
    source: "Ch. 148",
    title: "Confirmation Bias and the Echo Chamber of Taste",
    partId: "deepening",
    promise: "Learn how your taste can harden into self-confirming loyalty.",
    play: "Search for the strongest criticism of something you love and the strongest defense of something you dismiss.",
    challenge: "Keep your identity separate from your preference long enough to learn.",
    routes: ["beginner-path", "ai-path"],
    rewards: { xp: 26, judgment: 8, reflection: 6 },
  },
  {
    id: "ch-152",
    number: 152,
    source: "Ch. 152",
    title: "Critical Thinking in Aesthetics",
    partId: "deepening",
    promise: "Integrate feeling, analysis, evidence, and openness into one style of judgment.",
    play: "Run one judgment through four stages: feeling, noticing bias, analysis, integration.",
    challenge: "Stay warm enough to feel and clear enough to test.",
    routes: ["beginner-path", "ai-path"],
    rewards: { xp: 28, judgment: 8, reflection: 8 },
  },
  {
    id: "ch-155",
    number: 155,
    source: "Ch. 155",
    title: "Growth Tracking and Visualization",
    partId: "deepening",
    promise: "Make subtle development visible so motivation can survive the slow pace of real growth.",
    play: "Choose one input metric, one output metric, and one change metric for your taste practice.",
    challenge: "Track enough to learn, not so much that the system kills the joy.",
    routes: ["beginner-path"],
    rewards: { xp: 26, reflection: 8, judgment: 4 },
  },
  {
    id: "ch-156",
    number: 156,
    source: "Ch. 156",
    title: "Final Summary and Outlook",
    partId: "finale",
    promise: "Close the book by turning its method into your next self-directed chapter.",
    play: "Write the rule set for the next 30 days of your own aesthetic life.",
    challenge: "Keep the closing insight active after the book is over.",
    routes: ["sprint-path"],
    rewards: { xp: 30, reflection: 8, expression: 5 },
  },
];

const lessonLibrary = {
  "ch-001": {
    quote:
      "Taste is not a luxury label. It is judgment grounded in knowledge, exercised under conditions of distraction and pressure.",
    opening:
      "The opening chapter draws a hard line between liking and judging. In the book’s framework, taste is not proved by saying you prefer something. It is proved by perceiving meaningful difference, delaying easy prestige cues, and explaining why a choice holds up.",
    insights: [
      {
        title: "Preference is immediate; taste is argued",
        body:
          "The chapter insists that 'I like it' is only the start. Taste adds a reference frame, evidence, and the courage to stand apart from the algorithmic feed.",
      },
      {
        title: "AI makes judgment more important, not less",
        body:
          "When machines can generate endless polished output, the scarce human value shifts from production to selection. The key question becomes what deserves your attention.",
      },
      {
        title: "Aesthetic sovereignty has to be defended",
        body:
          "The chapter frames taste as resistance against outsourcing judgment. The point is not to reject tools, but to stop letting them decide what counts as worthy.",
      },
    ],
    reflection:
      "Where in your recent choices did convenience replace judgment? Name one situation in which you accepted the feed’s answer too quickly.",
    coach:
      "Study this chapter slowly. Its job is to reset your definition of taste before you build anything on top of it.",
  },
  "ch-008": {
    quote:
      "We do not simply see images. We see through labels, institutions, money, power, and the habits that taught us how to look.",
    opening:
      "This case-study chapter uses John Berger’s Ways of Seeing to show that visual culture is never neutral. Looking may come before language, but interpretation is thoroughly shaped by the stories, status signals, and ideologies wrapped around what is seen.",
    insights: [
      {
        title: "Language recodes vision",
        body:
          "The same image feels different when it is introduced as priceless art, student work, luxury branding, or low-status content. Context changes the seeing, not just the later opinion.",
      },
      {
        title: "Reproduction changes meaning",
        body:
          "In the age of copies, screenshots, reposts, and AI generation, meaning becomes mobile. The chapter argues that placement and framing now matter as much as original making.",
      },
      {
        title: "Critical seeing asks what the image is serving",
        body:
          "Who is being imagined as the ideal viewer? What values are being sold? What is outside the frame? These questions turn passive looking into an active reading practice.",
      },
    ],
    reflection:
      "Pick one image that instantly charms you. What authority, aspiration, or ideology comes bundled with that charm?",
    coach:
      "Use this lesson whenever you feel hypnotized by beautiful surfaces. It is designed to interrupt visual obedience.",
  },
  "ch-015": {
    quote:
      "Cognition is the map, training is the journey. The route matters because taste grows by repeated, structured contact rather than occasional inspiration.",
    opening:
      "The roadmap chapter turns the first part of the book into a navigable plan. Instead of vague self-improvement, it asks you to locate strengths, blind spots, dependencies, and aims so that practice becomes directional.",
    insights: [
      {
        title: "Taste has layers",
        body:
          "The chapter ties together physiology, emotion, culture, and personal history. A judgment is never purely one thing, which is why reflection matters so much.",
      },
      {
        title: "Choose a route, not a fantasy",
        body:
          "Visual, thinking, and balanced paths appear in the chapter because different learners need different front doors. The practical lesson is to pick a route that your actual life can sustain.",
      },
      {
        title: "Build a support system early",
        body:
          "Books, archives, tools, and discussion partners are presented as infrastructure. The chapter treats growth as something the environment can support or sabotage.",
      },
    ],
    reflection:
      "What is your current blind spot: a medium, a difficulty, or an overdependence on recommendation systems?",
    coach:
      "If you are drifting between too many interests, come back here and choose a route again with more honesty.",
  },
  "ch-030": {
    quote:
      "Metacognition is the ability to step out of automatic thought long enough to examine the quality of your own judgment.",
    opening:
      "This chapter introduces metacognition as a crucial threshold for taste. The first reaction still matters, but the book argues that mature judgment begins when you can observe your own reaction, test it, and decide whether it deserves to lead.",
    insights: [
      {
        title: "Taste includes monitoring",
        body:
          "The chapter distinguishes direct reaction from reflective examination. Aesthetic maturity means asking what evidence, mood, and assumptions are shaping the reaction.",
      },
      {
        title: "Bias is easier to correct when you can see it forming",
        body:
          "Anchoring, confirmation bias, and emotional shortcutting work best when they remain invisible. Metacognitive questions make those invisible pressures legible.",
      },
      {
        title: "Planning, monitoring, and evaluating are trainable",
        body:
          "The chapter frames better judgment as a system of deliberate moves: choose a strategy, check whether it is working, and evaluate what to do differently next time.",
      },
    ],
    reflection:
      "Recall one recent 'I just know' reaction. What would a second-order question have been in that moment?",
    coach:
      "Whenever you feel either overconfident or unusually resistant, this chapter is a good place to reopen.",
  },
  "ch-045": {
    quote:
      "Creation changes perception. Making even a clumsy thing teaches you more about form than long periods of purely passive looking.",
    opening:
      "This chapter argues that taste deepens when you cross the line from spectator to maker. It lowers the intimidation barrier around creativity and treats making as a way of understanding, not only a way of producing polished work.",
    insights: [
      {
        title: "Making reveals hidden difficulty",
        body:
          "The chapter compares viewing with doing: painting reveals brush decisions, writing reveals constraint, and composing reveals the labor hidden behind elegance.",
      },
      {
        title: "Perfectionism blocks contact with form",
        body:
          "A major obstacle named here is the need to be good before starting. The book counters this by treating completion and repetition as more educational than impressive first outputs.",
      },
      {
        title: "Small practice beats heroic ambition",
        body:
          "The chapter recommends tiny, consistent creative acts because they are sustainable, informative, and less likely to collapse under self-consciousness.",
      },
    ],
    reflection:
      "What medium would teach you the most right now precisely because you are still awkward in it?",
    coach:
      "Use this chapter whenever consumption becomes too smooth and your senses need resistance again.",
  },
  "ch-047": {
    quote:
      "Aesthetic experience evaporates quickly. Recording it is not bureaucracy but a way to stop losing your own evidence.",
    opening:
      "The daily recording method chapter turns reflection into a durable habit. It suggests that memory is too unreliable to carry your taste journey alone, so the platform turns the chapter’s structure into the journal system.",
    insights: [
      {
        title: "Records preserve the texture of the moment",
        body:
          "Without notes, the day collapses into a vague feeling. Recording fixes a more honest version of what you noticed before later narratives rewrite it.",
      },
      {
        title: "Patterns only appear across entries",
        body:
          "One note is anecdote. A sequence of notes reveals attraction, avoidance, fatigue, and recurring bias. That is why repetition matters more than literary brilliance here.",
      },
      {
        title: "The template keeps the practice light",
        body:
          "Moment, challenge, discovery, reflection, intention: the chapter uses this compact structure to keep the habit realistic even on difficult days.",
      },
    ],
    reflection:
      "Which part of the day usually goes unrecorded even though it may contain the strongest aesthetic signal?",
    coach:
      "If reflection feels heavy, make the entry smaller rather than skipping it. The chapter explicitly prefers continuity over performance.",
  },
  "ch-057": {
    quote:
      "A pile of saved references is not yet a corpus. A corpus begins when collection becomes searchable, comparable, and personally meaningful.",
    opening:
      "This chapter moves from casual saving to a designed archive. It argues that AI can assist pattern finding, but only if your own criteria, tags, and questions are present inside the system.",
    insights: [
      {
        title: "AI can organize, but not personalize your standards",
        body:
          "Automatic labels can identify color, objects, or style patterns, yet the book insists that your own reactions and use cases still need to be tagged by hand.",
      },
      {
        title: "Connection matters more than accumulation",
        body:
          "The chapter values relationships between references: concept links, tonal echoes, and recurring motifs. An archive should help you notice structure, not just volume.",
      },
      {
        title: "Curation includes pruning",
        body:
          "A healthy corpus is edited, not endlessly enlarged. The book warns against hoarding and recommends routine review to keep the archive sharp.",
      },
    ],
    reflection:
      "What does one saved item in your archive actually teach you? If it teaches nothing, why is it still there?",
    coach:
      "Read this chapter together with your own archive habits open in front of you. The lesson becomes clearer when the clutter is visible.",
  },
  "ch-081": {
    quote:
      "AI is a mirror, not a god. Its real value lies in expanding possibility while leaving the final act of judgment to humans.",
    opening:
      "This concluding chapter of the AI section gathers the big claims into a usable stance. It asks the reader to convert scattered insight into principles for living and working among algorithms without surrendering authorship or discernment.",
    insights: [
      {
        title: "Technology is neutral only in abstraction",
        body:
          "The chapter insists that the ethics of use matter more than the glamour of the tool. Access, fairness, labor, and originality all remain live questions at the point of use.",
      },
      {
        title: "Human value clarifies when automation expands",
        body:
          "The more AI can generate, the more human significance concentrates around meaning, context, embodied experience, and the urge to create for reasons, not just results.",
      },
      {
        title: "Sovereignty requires active habits",
        body:
          "The chapter recommends active search, doubt toward recommendation systems, manual practice, and personal standards as recurring acts of defense.",
      },
    ],
    reflection:
      "Write one rule that defines what AI may amplify for you and one thing you refuse to outsource.",
    coach:
      "This lesson works best as a personal manifesto exercise, not merely a summary to agree with abstractly.",
  },
  "ch-089": {
    quote:
      "Game aesthetics live in the rule set. Mechanics are not neutral containers for art; they are part of the art itself.",
    opening:
      "The game design chapter is important because it proves that interaction can carry aesthetic weight. It treats mechanics, narrative, sound, and emotional pacing as an integrated system rather than separate departments.",
    insights: [
      {
        title: "Mechanics produce feeling",
        body:
          "The chapter shows that challenge, pace, reward, and emergence are not technical add-ons. They create tension, flow, discovery, and attachment.",
      },
      {
        title: "Narrative can be linear, branching, environmental, or emergent",
        body:
          "Games widen the idea of storytelling by making the player partly responsible for how meaning appears and is remembered.",
      },
      {
        title: "Ethics belong inside aesthetic design",
        body:
          "The chapter explicitly questions addictive loops, representation, and manipulative retention. A beautiful system can still be morally corrosive.",
      },
    ],
    reflection:
      "What emotion does your favorite game create through rules rather than through plot alone?",
    coach:
      "This chapter is especially useful for product, service, and education design because it makes interaction legible as form.",
  },
  "ch-148": {
    quote:
      "Taste can become an echo chamber when identity and preference fuse too tightly for criticism to enter.",
    opening:
      "The confirmation-bias chapter marks a turning point where the book becomes more suspicious of the self. Its claim is not that you should distrust all taste, but that any strong preference can begin protecting itself against growth.",
    insights: [
      {
        title: "Liking distorts attention",
        body:
          "The chapter explains how we search for confirming evidence, soften the flaws of favored work, and exaggerate the weaknesses of disliked styles.",
      },
      {
        title: "Identity makes bias feel moral",
        body:
          "Once a taste becomes part of who you think you are, disagreement starts to feel like threat rather than information. The book warns against this fusion.",
      },
      {
        title: "The antidote is active opposition",
        body:
          "You are asked to search for real criticism of what you love and real strengths in what you reject. Growth comes from contact with tension, not from protected agreement.",
      },
    ],
    reflection:
      "Where do you become defensive faster: when someone critiques what you love, or when they praise what you dislike?",
    coach:
      "This is the right chapter whenever you notice yourself becoming loyal before becoming curious.",
  },
  "ch-152": {
    quote:
      "Critical thinking in aesthetics is not cold detachment. It is a way of letting feeling and analysis refine each other.",
    opening:
      "This integrative chapter argues that mature taste neither drowns in emotion nor hides from emotion behind pseudo-objectivity. The task is to move through experience, awareness, analysis, and synthesis without losing warmth.",
    insights: [
      {
        title: "The book’s four-stage method is usable",
        body:
          "First feel the work, then notice your own condition, then test evidence and alternatives, then arrive at a judgment that remains open to revision.",
      },
      {
        title: "Bias work is environmental as well as mental",
        body:
          "The chapter lists strategies for attention, social dialogue, delay, blind testing, and source diversity because cleaner judgment requires cleaner conditions too.",
      },
      {
        title: "Warm skepticism is stronger than cynicism",
        body:
          "The chapter resists two dead ends at once: naive surrender and performative disbelief. It invites a patient 'maybe, but let me test that' posture.",
      },
    ],
    reflection:
      "Which stage do you usually skip: feeling honestly, noticing bias, testing evidence, or integrating the result?",
    coach:
      "Use this lesson as a recurring protocol. It is more valuable as a method than as a one-time argument.",
  },
  "ch-155": {
    quote:
      "Growth becomes motivating when it is visible enough to notice but light enough to maintain.",
    opening:
      "The growth-tracking chapter reframes measurement as part of the art of practice. Instead of sterile metrics, it asks what forms of evidence make development visible without reducing taste to numbers alone.",
    insights: [
      {
        title: "Track inputs, outputs, and changes",
        body:
          "The chapter distinguishes what you consume, what you produce, and what actually shifts in your preferences or capacities. This keeps the record multidimensional.",
      },
      {
        title: "Qualitative data matters",
        body:
          "Tags, moods, recurring values, and written insight are treated as essential because numbers alone cannot capture aesthetic development.",
      },
      {
        title: "Dashboards should serve reflection",
        body:
          "Timelines, maps, and charts are recommended not to gamify everything blindly, but to surface patterns that would otherwise disappear into memory fog.",
      },
    ],
    reflection:
      "What is one metric that would clarify your growth, and one metric that would only make you perform for the system?",
    coach:
      "Use this lesson to keep the platform honest. Track enough to learn, not enough to flatten the practice.",
  },
};

const questPool = [
  {
    id: "object-autopsy",
    title: "Object autopsy",
    description:
      "Observe one everyday object for five minutes without using brand, price, or prestige as criteria. Describe line, material, proportion, and mood.",
    source: "Ch. 1",
    loop: "Perception",
    minutes: 8,
    paths: ["visual", "balanced"],
    rewards: { xp: 40, perception: 10, judgment: 4 },
  },
  {
    id: "contrast-hunt",
    title: "Contrast hunt",
    description:
      "Collect three examples of contrast today: visual, spatial, or verbal. Write one sentence about why the contrast works.",
    source: "Ch. 16-20",
    loop: "Perception",
    minutes: 10,
    paths: ["visual", "balanced"],
    rewards: { xp: 45, perception: 10, expression: 4 },
  },
  {
    id: "moodboard-compression",
    title: "Moodboard compression",
    description:
      "Build a tiny moodboard with only three references. Force yourself to cut the rest and write the hidden pattern that connects the survivors.",
    source: "Ch. 57",
    loop: "Expression",
    minutes: 12,
    paths: ["visual", "balanced"],
    rewards: { xp: 50, expression: 8, judgment: 6 },
  },
  {
    id: "anti-anchor",
    title: "Blind first impression",
    description:
      "Look at something once without reading author, price, likes, or reviews. Record your own response first, then compare after context arrives.",
    source: "Ch. 149, 152",
    loop: "Judgment",
    minutes: 8,
    paths: ["thinking", "balanced"],
    rewards: { xp: 45, judgment: 10, reflection: 4 },
  },
  {
    id: "steelman-dislike",
    title: "Steelman your dislike",
    description:
      "Choose a work or style you normally reject. Name three real strengths before you allow yourself to criticize it.",
    source: "Ch. 148, 152",
    loop: "Judgment",
    minutes: 10,
    paths: ["thinking", "balanced"],
    rewards: { xp: 50, judgment: 10, reflection: 6 },
  },
  {
    id: "slow-argument",
    title: "Slow argument",
    description:
      "Write a four-sentence judgment: what works, what does not, what evidence supports it, and what might change your mind in a year.",
    source: "Ch. 26-30, 152",
    loop: "Expression",
    minutes: 14,
    paths: ["thinking", "balanced"],
    rewards: { xp: 55, expression: 10, judgment: 8 },
  },
  {
    id: "ritual-redesign",
    title: "Ritual redesign",
    description:
      "Take one boring part of the day and redesign it with light, sound, timing, or objects so it feels more intentional.",
    source: "Ch. 31-35, 50",
    loop: "Perception",
    minutes: 12,
    paths: ["visual", "thinking", "balanced"],
    rewards: { xp: 45, perception: 6, expression: 8 },
  },
  {
    id: "commute-score",
    title: "Commute score",
    description:
      "Treat your commute as a field recording. Capture one color palette, one sound texture, and one design failure worth fixing.",
    source: "Ch. 47, 50",
    loop: "Reflection",
    minutes: 9,
    paths: ["visual", "balanced"],
    rewards: { xp: 42, perception: 8, reflection: 6 },
  },
  {
    id: "cross-cultural-bridge",
    title: "Cross-cultural bridge",
    description:
      "Compare two works from different cultures. Name one shared principle and one meaningful difference without ranking them too quickly.",
    source: "Ch. 14, 62, 136",
    loop: "Judgment",
    minutes: 15,
    paths: ["thinking", "balanced"],
    rewards: { xp: 55, judgment: 8, reflection: 8 },
  },
  {
    id: "micro-critique",
    title: "Micro critique",
    description:
      "Record a 60-second voice note or short paragraph explaining why a piece moved you. Do not use vague words like nice or cool.",
    source: "Ch. 1, 21-25, 153",
    loop: "Expression",
    minutes: 7,
    paths: ["thinking", "balanced"],
    rewards: { xp: 40, expression: 8, reflection: 4 },
  },
  {
    id: "archive-prune",
    title: "Archive prune",
    description:
      "Delete or reject one saved reference that no longer matches your standards, then explain what changed in your taste.",
    source: "Ch. 57, 155",
    loop: "Reflection",
    minutes: 6,
    paths: ["visual", "thinking", "balanced"],
    rewards: { xp: 40, judgment: 6, reflection: 8 },
  },
  {
    id: "body-check",
    title: "Body check",
    description:
      "Notice one tactile or spatial experience today and write how your body reacted before your mind found the words.",
    source: "Ch. 12, 44, 78",
    loop: "Reflection",
    minutes: 8,
    paths: ["visual", "balanced"],
    rewards: { xp: 40, perception: 8, reflection: 8 },
  },
];

const bossDeck = [
  {
    boss: "Echo Chamber",
    title: "Confirmation Bias",
    prompt:
      "You already love a photographer. Their new series feels weaker, but your favorite circle praises it. What is the strongest next move?",
    choices: [
      "Assume the series is strong because people with taste already approved it.",
      "Search for the sharpest criticism, then write three strengths and three weaknesses before deciding.",
      "Skip judgment entirely because taste is always subjective anyway.",
      "Wait for a bigger account to tell you what the right take is.",
    ],
    answer: 1,
    explanation:
      "The book treats taste as reasoned judgment, not loyalty. Seeking disconfirming evidence weakens the echo chamber.",
  },
  {
    boss: "First Impression Kraken",
    title: "Anchoring Effect",
    prompt:
      "A chair is introduced to you as a luxury icon before you sit in it. How do you resist the anchor?",
    choices: [
      "Accept that price and reputation are part of design quality, so they should lead the verdict.",
      "Rate comfort, proportion, and material first without brand or price, then compare with the context afterward.",
      "Ignore all context forever and refuse to learn any history about the object.",
      "Ask social media whether it is worth liking.",
    ],
    answer: 1,
    explanation:
      "A blind first pass separates direct perception from external prestige. Context matters, but it should not trap the first judgment.",
  },
  {
    boss: "Crowd Siren",
    title: "Herd Bias",
    prompt:
      "An artwork becomes the most photographed piece in the exhibition. Your own reaction is flat. What should you do?",
    choices: [
      "Take the social proof as evidence that your reaction must be wrong.",
      "Reject it harder, because popular things are usually shallow.",
      "Form a private judgment first, then compare it with public enthusiasm and explain the gap.",
      "Copy the crowd so your taste stays socially safe.",
    ],
    answer: 2,
    explanation:
      "The goal is neither blind conformity nor contrarian performance. Independent judgment comes first; social comparison comes later.",
  },
  {
    boss: "Guru Golem",
    title: "Authority Effect",
    prompt:
      "A famous critic dismisses a film that deeply moved you. What is the most disciplined response?",
    choices: [
      "Drop your own response because the expert is more qualified than you.",
      "Attack the critic personally for ruining your feeling.",
      "Keep your feeling, study the critic’s reasons, and test whether their criteria reveal something you missed.",
      "Only trust critics who already agree with your taste.",
    ],
    answer: 2,
    explanation:
      "Critical thinking in the book is an integration of feeling and analysis. Authority can expand your view without replacing your experience.",
  },
  {
    boss: "Feed Hydra",
    title: "Availability Trap",
    prompt:
      "Your taste archive is filled with whatever the algorithm showed you most often this week. How do you reopen the field?",
    choices: [
      "Lean harder into the feed because repetition proves relevance.",
      "Sample intentionally outside your recommendation loop and tag what feels different rather than instantly better.",
      "Delete everything and start from zero every weekend.",
      "Assume the archive is already diverse enough if it feels busy.",
    ],
    answer: 1,
    explanation:
      "The book recommends active search, diversity, and archive design. Availability is beaten by deliberate exposure, not by passive abundance.",
  },
];

const archiveTags = [
  "contrast",
  "restraint",
  "warmth",
  "rhythm",
  "texture",
  "asymmetry",
  "clarity",
  "mystery",
  "play",
];

const signatureMap = {
  contrast: "Contrast Hunter",
  restraint: "Quiet Minimalist",
  warmth: "Atmosphere Keeper",
  rhythm: "Rhythm Listener",
  texture: "Material Detective",
  asymmetry: "Dynamic Composer",
  clarity: "Clarity Editor",
  mystery: "Depth Diver",
  play: "Curious Trickster",
  visual: "Sight Seeker",
  thinking: "Pattern Strategist",
  balanced: "Field Cartographer",
};

const defaultBattleState = () => ({
  started: false,
  finished: false,
  index: 0,
  correctCount: 0,
  answeredChoice: null,
});

const state = loadState();
let battleState = defaultBattleState();

const elements = {
  heroXp: document.getElementById("heroXp"),
  heroStreak: document.getElementById("heroStreak"),
  heroSignature: document.getElementById("heroSignature"),
  heroTodayDone: document.getElementById("heroTodayDone"),
  heroLevel: document.getElementById("heroLevel"),
  heroRing: document.getElementById("heroRing"),
  worldGrid: document.getElementById("worldGrid"),
  routePicker: document.getElementById("routePicker"),
  atlasRouteName: document.getElementById("atlasRouteName"),
  atlasRouteDescription: document.getElementById("atlasRouteDescription"),
  atlasRouteProgressBar: document.getElementById("atlasRouteProgressBar"),
  atlasStudiedCount: document.getElementById("atlasStudiedCount"),
  atlasRouteCount: document.getElementById("atlasRouteCount"),
  atlasNextChapter: document.getElementById("atlasNextChapter"),
  partFilter: document.getElementById("partFilter"),
  chapterCatalog: document.getElementById("chapterCatalog"),
  chapterSpotlight: document.getElementById("chapterSpotlight"),
  lessonReader: document.getElementById("lessonReader"),
  lessonSidebarMeta: document.getElementById("lessonSidebarMeta"),
  lessonNoteForm: document.getElementById("lessonNoteForm"),
  lessonNoteInput: document.getElementById("lessonNoteInput"),
  pathSelector: document.getElementById("pathSelector"),
  questDeck: document.getElementById("questDeck"),
  bossName: document.getElementById("bossName"),
  bossTitle: document.getElementById("bossTitle"),
  bossHealth: document.getElementById("bossHealth"),
  battleProgress: document.getElementById("battleProgress"),
  battlePrompt: document.getElementById("battlePrompt"),
  battleChoices: document.getElementById("battleChoices"),
  battleFeedback: document.getElementById("battleFeedback"),
  battleAdvance: document.getElementById("battleAdvance"),
  journalForm: document.getElementById("journalForm"),
  journalFeed: document.getElementById("journalFeed"),
  archiveForm: document.getElementById("archiveForm"),
  archiveInsight: document.getElementById("archiveInsight"),
  archiveList: document.getElementById("archiveList"),
  tagOptions: document.getElementById("tagOptions"),
  skillBars: document.getElementById("skillBars"),
  growthInsight: document.getElementById("growthInsight"),
  badgeGrid: document.getElementById("badgeGrid"),
  toast: document.getElementById("toast"),
};

init();

function init() {
  renderWorlds();
  renderTagOptions();
  wireEvents();
  ensureSelectedChapter();
  render();
}

function wireEvents() {
  elements.battleAdvance.addEventListener("click", handleBattleAdvance);

  elements.lessonNoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const chapter = getSelectedChapter();
    if (!chapter) {
      return;
    }

    const note = elements.lessonNoteInput.value.trim();
    if (!note) {
      showToast("Write one takeaway before saving.");
      return;
    }

    const isFirstNote = !state.chapterNotes[chapter.id];
    state.chapterNotes[chapter.id] = note;

    if (isFirstNote && !state.notedChapters[chapter.id]) {
      state.notedChapters[chapter.id] = new Date().toISOString();
      applyRewards({ xp: 14, expression: 4, reflection: 4 });
      registerActivity();
    }

    saveState();
    showToast(`Takeaway saved for ${chapter.source}.`);
    renderLessonStudio();
    renderHero();
    renderSkills();
    renderGrowthInsight();
    renderBadges();
  });

  elements.journalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const entry = {
      id: createId(),
      createdAt: new Date().toISOString(),
      moment: formData.get("moment").trim(),
      challenge: formData.get("challenge").trim(),
      discovery: formData.get("discovery").trim(),
      reflection: formData.get("reflection").trim(),
      intention: formData.get("intention").trim(),
    };

    state.journalEntries.unshift(entry);
    state.journalEntries = state.journalEntries.slice(0, 8);
    applyRewards({ xp: 35, reflection: 10, expression: 8 });
    registerActivity();
    saveState();
    event.currentTarget.reset();
    showToast("Journal entry saved. Reflection earns momentum.");
    render();
  });

  elements.archiveForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selectedTags = archiveTags.filter((tag) => formData.getAll("tags").includes(tag));

    if (selectedTags.length === 0) {
      showToast("Choose at least one quality for the archive item.");
      return;
    }

    const item = {
      id: createId(),
      createdAt: new Date().toISOString(),
      title: formData.get("title").trim(),
      medium: formData.get("medium"),
      note: formData.get("note").trim(),
      tags: selectedTags,
    };

    state.archiveItems.unshift(item);
    state.archiveItems = state.archiveItems.slice(0, 9);
    applyRewards({ xp: 25, perception: 8, judgment: 5 });
    registerActivity();
    saveState();
    event.currentTarget.reset();
    renderTagOptions();
    showToast("Archive item stored. Your corpus just got sharper.");
    render();
  });
}

function render() {
  renderHero();
  renderAtlas();
  renderLessonStudio();
  renderPaths();
  renderQuests();
  renderBattle();
  renderJournalFeed();
  renderArchive();
  renderSkills();
  renderBadges();
  renderGrowthInsight();
}

function renderHero() {
  const level = Math.floor(state.xp / LEVEL_XP) + 1;
  const progress = ((state.xp % LEVEL_XP) / LEVEL_XP).toFixed(3);

  elements.heroXp.textContent = String(state.xp);
  elements.heroStreak.textContent = `${state.streak} day${state.streak === 1 ? "" : "s"}`;
  elements.heroSignature.textContent = getSignature();
  elements.heroTodayDone.textContent = `${getTodayCompletedCount()} / ${DAILY_QUEST_COUNT}`;
  elements.heroLevel.textContent = `Lv. ${level}`;
  elements.heroRing.style.setProperty("--progress", `${Math.max(0.04, Number(progress))}turn`);
}

function renderWorlds() {
  elements.worldGrid.innerHTML = worldData
    .map(
      (world) => `
        <article class="world-card">
          <div class="world-top">
            <span class="world-number">${escapeHtml(world.number)}</span>
            <span class="world-pill">${escapeHtml(world.type)}</span>
          </div>
          <h3>${escapeHtml(world.title)}</h3>
          <p>${escapeHtml(world.description)}</p>
          <small>${escapeHtml(world.source)}</small>
          <div class="world-tags">
            ${world.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderAtlas() {
  const activeRoute = getActiveRoute();
  const visibleChapters = getVisibleAtlasChapters();
  ensureSelectedChapter(visibleChapters);
  const routeChapters = getRouteChapters();
  const studiedRouteChapters = routeChapters.filter((chapter) => isChapterStudied(chapter.id));
  const nextChapter = routeChapters.find((chapter) => !isChapterStudied(chapter.id));
  const routeProgress = routeChapters.length === 0 ? 0 : (studiedRouteChapters.length / routeChapters.length) * 100;

  elements.routePicker.innerHTML = routeGuides
    .map(
      (route) => `
        <button
          class="route-card ${state.selectedRoute === route.id ? "active" : ""}"
          type="button"
          data-route-id="${route.id}"
        >
          <strong>${escapeHtml(route.title)}</strong>
          <span>${escapeHtml(route.source)}</span>
          <small>${escapeHtml(route.description)}</small>
        </button>
      `
    )
    .join("");

  elements.routePicker.querySelectorAll("[data-route-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedRoute = button.dataset.routeId;
      ensureSelectedChapter();
      saveState();
      showToast(`Atlas route switched to ${button.querySelector("strong").textContent}.`);
      render();
    });
  });

  elements.atlasRouteName.textContent = activeRoute.title;
  elements.atlasRouteDescription.textContent = activeRoute.description;
  elements.atlasRouteProgressBar.style.width = `${routeProgress}%`;
  elements.atlasStudiedCount.textContent = String(studiedRouteChapters.length);
  elements.atlasRouteCount.textContent = String(routeChapters.length);
  elements.atlasNextChapter.textContent = nextChapter ? nextChapter.source : "Complete";

  const filterButtons = [
    {
      id: "all",
      label: "All parts",
      summary: "Show every part in the chosen route.",
    },
    ...bookParts.map((part) => ({
      id: part.id,
      label: `${part.label} — ${part.name}`,
      summary: part.summary,
    })),
  ];

  elements.partFilter.innerHTML = filterButtons
    .map(
      (part) => `
        <button
          class="part-chip ${state.selectedPart === part.id ? "active" : ""}"
          type="button"
          data-part-id="${part.id}"
          title="${escapeHtml(part.summary)}"
        >
          ${escapeHtml(part.label)}
        </button>
      `
    )
    .join("");

  elements.partFilter.querySelectorAll("[data-part-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedPart = button.dataset.partId;
      ensureSelectedChapter();
      saveState();
      render();
    });
  });

  if (visibleChapters.length === 0) {
    elements.chapterCatalog.innerHTML = `
      <div class="empty-state">
        No chapters match this route and part filter. Switch part or route to reopen the map.
      </div>
    `;
    elements.chapterSpotlight.innerHTML = `
      <div class="empty-state">
        Select another part to see a spotlight chapter.
      </div>
    `;
    return;
  }

  elements.chapterCatalog.innerHTML = visibleChapters
    .map((chapter) => {
      const part = getPartMeta(chapter.partId);
      const studied = isChapterStudied(chapter.id);
      return `
        <button
          class="chapter-card ${studied ? "studied" : ""} ${state.selectedChapterId === chapter.id ? "active" : ""}"
          type="button"
          data-chapter-id="${chapter.id}"
        >
          <div class="chapter-card-top">
            <span class="chapter-number">${escapeHtml(chapter.source)}</span>
            <span class="chapter-state">${studied ? "Studied" : "Open"}</span>
          </div>
          <h3>${escapeHtml(chapter.title)}</h3>
          <p>${escapeHtml(chapter.promise)}</p>
          <div class="chapter-card-meta">
            <span>${escapeHtml(part.label)}</span>
            <span>${escapeHtml(part.name)}</span>
          </div>
        </button>
      `;
    })
    .join("");

  elements.chapterCatalog.querySelectorAll("[data-chapter-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedChapterId = button.dataset.chapterId;
      saveState();
      render();
    });
  });

  renderAtlasSpotlight(getSelectedChapter());
}

function renderAtlasSpotlight(chapter) {
  if (!chapter) {
    elements.chapterSpotlight.innerHTML = `
      <div class="empty-state">
        Choose a chapter from the atlas to see why it matters and how to practice it.
      </div>
    `;
    return;
  }

  const part = getPartMeta(chapter.partId);
  const studied = isChapterStudied(chapter.id);
  const rewardChips = Object.entries(chapter.rewards)
    .map(([key, value]) => `<span class="reward-chip">+${value} ${escapeHtml(key.toUpperCase())}</span>`)
    .join("");

  elements.chapterSpotlight.innerHTML = `
    <div class="spotlight-header">
      <div>
        <p class="section-kicker">Chapter spotlight</p>
        <h3>${escapeHtml(chapter.title)}</h3>
      </div>
      <span class="spotlight-part">${escapeHtml(part.label)}</span>
    </div>

    <div class="spotlight-meta">
      <span>${escapeHtml(chapter.source)}</span>
      <span>${escapeHtml(part.name)}</span>
      <span>${studied ? "Already studied" : "Ready to study"}</span>
    </div>

    <div class="spotlight-block">
      <h4>Why it matters</h4>
      <p>${escapeHtml(chapter.promise)}</p>
    </div>

    <div class="spotlight-block">
      <h4>How the platform turns it into play</h4>
      <p>${escapeHtml(chapter.play)}</p>
    </div>

    <div class="spotlight-block">
      <h4>Study challenge</h4>
      <p>${escapeHtml(chapter.challenge)}</p>
    </div>

    <div class="spotlight-rewards">${rewardChips}</div>

    <button
      class="button primary"
      type="button"
      data-study-chapter-button="true"
      ${studied ? "disabled" : ""}
    >
      ${studied ? "Chapter already studied" : "Mark chapter as studied"}
    </button>
  `;

  const studyButton = elements.chapterSpotlight.querySelector("[data-study-chapter-button='true']");
  if (studyButton && !studied) {
    studyButton.addEventListener("click", () => completeChapterStudy(chapter.id));
  }
}

function renderLessonStudio() {
  const chapter = getSelectedChapter();

  if (!chapter) {
    elements.lessonReader.innerHTML = `
      <div class="empty-state">
        Choose a chapter in the atlas to open the lesson studio.
      </div>
    `;
    elements.lessonSidebarMeta.innerHTML = `
      <div class="empty-state">
        Lesson tools will appear here when a chapter is selected.
      </div>
    `;
    elements.lessonNoteInput.value = "";
    return;
  }

  const lesson = getLessonContent(chapter);
  const studied = isChapterStudied(chapter.id);
  const note = state.chapterNotes[chapter.id] || "";
  const savedTakeawayCount = Object.keys(state.chapterNotes).length;
  const part = getPartMeta(chapter.partId);

  elements.lessonReader.innerHTML = `
    <div class="lesson-reader-shell">
      <div class="lesson-reader-header">
        <div>
          <p class="section-kicker">Lesson studio</p>
          <h3>${escapeHtml(chapter.title)}</h3>
        </div>
        <div class="lesson-reader-meta">
          <span>${escapeHtml(chapter.source)}</span>
          <span>${escapeHtml(part.name)}</span>
          <span>${studied ? "Studied" : "Not yet studied"}</span>
        </div>
      </div>

      <blockquote class="lesson-quote">${escapeHtml(lesson.quote)}</blockquote>

      <div class="lesson-reading-block">
        <h4>Core reading</h4>
        <p>${escapeHtml(lesson.opening)}</p>
      </div>

      <div class="lesson-card-grid">
        ${lesson.insights
          .map(
            (item) => `
              <article class="lesson-card">
                <h4>${escapeHtml(item.title)}</h4>
                <p>${escapeHtml(item.body)}</p>
              </article>
            `
          )
          .join("")}
      </div>

      <div class="lesson-reading-block">
        <h4>Reflection prompt</h4>
        <p>${escapeHtml(lesson.reflection)}</p>
      </div>

      <div class="lesson-reading-block">
        <h4>Coach note</h4>
        <p>${escapeHtml(lesson.coach)}</p>
      </div>
    </div>
  `;

  elements.lessonSidebarMeta.innerHTML = `
    <p class="section-kicker">Lesson stats</p>
    <h3>${escapeHtml(chapter.source)} learning state</h3>
    <div class="lesson-side-metrics">
      <div class="lesson-side-metric">
        <span>Status</span>
        <strong>${studied ? "Studied" : "Open"}</strong>
      </div>
      <div class="lesson-side-metric">
        <span>Saved takeaways</span>
        <strong>${savedTakeawayCount}</strong>
      </div>
      <div class="lesson-side-metric">
        <span>Practice focus</span>
        <strong>${escapeHtml(chapter.challenge)}</strong>
      </div>
    </div>
    <div class="lesson-side-note">
      <p>
        The lesson studio turns atlas entries into study material. Use the takeaway box to make each chapter change your own standards, not just your memory.
      </p>
    </div>
  `;

  elements.lessonNoteInput.value = note;
}

function getLessonContent(chapter) {
  if (lessonLibrary[chapter.id]) {
    return lessonLibrary[chapter.id];
  }

  const part = getPartMeta(chapter.partId);

  return {
    quote: `${chapter.source} belongs to ${part.name} and pushes taste through one deliberate move: ${chapter.promise}`,
    opening:
      "This chapter has not been expanded into a handcrafted studio note yet, but the platform can still turn its role in the book into a usable reading frame.",
    insights: [
      {
        title: "Chapter promise",
        body: chapter.promise,
      },
      {
        title: "Turn it into practice",
        body: chapter.play,
      },
      {
        title: "Protect the difficulty",
        body: chapter.challenge,
      },
    ],
    reflection: `If you completed this chapter seriously, what would change in the way you notice, judge, or express something this week?`,
    coach:
      "Use the spotlight summary first, then write one takeaway in your own words so the lesson becomes active rather than abstract.",
  };
}

function renderPaths() {
  elements.pathSelector.innerHTML = learningPaths
    .map(
      (path) => `
        <button class="path-card ${state.selectedPath === path.id ? "active" : ""}" data-path-id="${path.id}" type="button">
          <strong>${escapeHtml(path.name)}</strong>
          <div class="quest-meta">${escapeHtml(path.focus)}</div>
          <small>${escapeHtml(path.description)}</small>
        </button>
      `
    )
    .join("");

  elements.pathSelector.querySelectorAll("[data-path-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedPath = button.dataset.pathId;
      saveState();
      showToast(`Path switched to ${button.querySelector("strong").textContent}.`);
      render();
    });
  });
}

function renderQuests() {
  const todayQuests = getDailyQuests();
  const completedIds = getTodayCompletedQuestIds();

  elements.questDeck.innerHTML = todayQuests
    .map((quest) => {
      const completed = completedIds.includes(quest.id);
      const rewardChips = Object.entries(quest.rewards)
        .map(([key, value]) => `<span class="reward-chip">+${value} ${escapeHtml(key.toUpperCase())}</span>`)
        .join("");

      return `
        <article class="quest-card ${completed ? "completed" : ""}">
          <div class="quest-topline">
            <span class="quest-tag">${escapeHtml(quest.loop)}</span>
            <span class="quest-meta">${quest.minutes} min</span>
          </div>
          <div>
            <h3>${escapeHtml(quest.title)}</h3>
            <p>${escapeHtml(quest.description)}</p>
          </div>
          <div class="quest-footer">
            <div>
              <div class="quest-meta">Source</div>
              <strong>${escapeHtml(quest.source)}</strong>
            </div>
          </div>
          <div class="quest-reward">${rewardChips}</div>
          <button
            class="button primary"
            type="button"
            data-quest-id="${quest.id}"
            ${completed ? "disabled" : ""}
          >
            ${completed ? "Completed today" : "Claim quest"}
          </button>
        </article>
      `;
    })
    .join("");

  elements.questDeck.querySelectorAll("[data-quest-id]").forEach((button) => {
    button.addEventListener("click", () => completeQuest(button.dataset.questId));
  });
}

function completeQuest(questId) {
  const today = getTodayKey();
  const completedIds = getTodayCompletedQuestIds();

  if (completedIds.includes(questId)) {
    return;
  }

  const quest = getDailyQuests().find((item) => item.id === questId);
  if (!quest) {
    return;
  }

  state.completedQuestsByDay[today] = [...completedIds, questId];
  applyRewards(quest.rewards);
  registerActivity();

  if (
    state.completedQuestsByDay[today].length === DAILY_QUEST_COUNT &&
    !state.dailyClearBonusByDay[today]
  ) {
    state.dailyClearBonusByDay[today] = true;
    applyRewards({ xp: 60, reflection: 8, judgment: 4 });
    showToast("Daily run cleared. You earned a full-cycle bonus.");
  } else {
    showToast(`Quest cleared: ${quest.title}.`);
  }

  saveState();
  render();
}

function completeChapterStudy(chapterId) {
  if (isChapterStudied(chapterId)) {
    return;
  }

  const chapter = chapterAtlas.find((item) => item.id === chapterId);
  if (!chapter) {
    return;
  }

  state.studiedChapters[chapterId] = new Date().toISOString();
  applyRewards(chapter.rewards);
  registerActivity();
  saveState();
  showToast(`${chapter.source} logged as studied.`);
  render();
}

function renderBattle() {
  const current = bossDeck[battleState.index] || bossDeck[0];
  const health = Math.max(0, 100 - battleState.correctCount * 20);

  elements.bossName.textContent = current.boss;
  elements.bossTitle.textContent = current.title;
  elements.bossHealth.style.width = `${health}%`;

  if (!battleState.started) {
    elements.battleProgress.textContent = "Five-round tactical challenge";
    elements.battlePrompt.textContent =
      "Step into the arena and answer each situation the way the book would train you to think.";
    elements.battleChoices.innerHTML = "";
    elements.battleFeedback.textContent =
      "Boss fights reward slow judgment, bias detection, and the ability to protect your own perception from prestige, hype, and habit.";
    elements.battleAdvance.textContent = "Begin boss fight";
    return;
  }

  if (battleState.finished) {
    const won = battleState.correctCount === bossDeck.length;
    elements.battleProgress.textContent = `Battle finished — ${battleState.correctCount} / ${bossDeck.length} clean hits`;
    elements.battlePrompt.textContent = won
      ? "Boss defeated. Taste wins when feeling and criticism work together."
      : "The boss escaped with some health. Run it again to build sharper resistance.";
    elements.battleChoices.innerHTML = "";
    elements.battleFeedback.textContent = won
      ? "You used the full anti-bias toolkit: independent judgment, evidence seeking, context without surrender, and deliberate exposure."
      : "A partial win still teaches something. Repetition is part of the method: detect the trap, test a better move, repeat until it becomes natural.";
    elements.battleAdvance.textContent = "Restart boss fight";
    return;
  }

  elements.battleProgress.textContent = `Round ${battleState.index + 1} of ${bossDeck.length}`;
  elements.battlePrompt.textContent = current.prompt;

  elements.battleChoices.innerHTML = current.choices
    .map((choice, index) => {
      const classes = getChoiceClasses(index, current.answer);
      return `
        <button
          class="choice-button ${classes}"
          type="button"
          data-choice-index="${index}"
          ${battleState.answeredChoice !== null ? "disabled" : ""}
        >
          ${escapeHtml(choice)}
        </button>
      `;
    })
    .join("");

  elements.battleChoices.querySelectorAll("[data-choice-index]").forEach((button) => {
    button.addEventListener("click", () => answerBattleChoice(Number(button.dataset.choiceIndex)));
  });

  elements.battleFeedback.textContent =
    battleState.answeredChoice === null
      ? "Choose the move that protects aesthetic sovereignty rather than outsourcing judgment."
      : current.explanation;
  elements.battleAdvance.textContent =
    battleState.answeredChoice === null
      ? "Choose an answer first"
      : battleState.index === bossDeck.length - 1
        ? "Resolve battle"
        : "Next round";
}

function handleBattleAdvance() {
  if (!battleState.started) {
    battleState = {
      started: true,
      finished: false,
      index: 0,
      correctCount: 0,
      answeredChoice: null,
    };
    renderBattle();
    return;
  }

  if (battleState.finished) {
    battleState = defaultBattleState();
    renderBattle();
    return;
  }

  if (battleState.answeredChoice === null) {
    showToast("Pick the move you want to make in this round.");
    return;
  }

  if (battleState.index === bossDeck.length - 1) {
    battleState.finished = true;
    finalizeBossFight();
    render();
    return;
  }

  battleState.index += 1;
  battleState.answeredChoice = null;
  renderBattle();
}

function answerBattleChoice(choiceIndex) {
  if (battleState.answeredChoice !== null || battleState.finished) {
    return;
  }

  battleState.answeredChoice = choiceIndex;

  const round = bossDeck[battleState.index];
  if (choiceIndex === round.answer) {
    battleState.correctCount += 1;
    showToast("Direct hit. Bias weakened.");
  } else {
    showToast("The boss held ground. Read the explanation and try again next run.");
  }

  renderBattle();
}

function finalizeBossFight() {
  const today = getTodayKey();
  const won = battleState.correctCount === bossDeck.length;

  if (won) {
    if (!state.bossVictoriesByDay[today]) {
      state.bossVictoriesByDay[today] = true;
      state.bossWins += 1;
      applyRewards({ xp: 90, judgment: 12, reflection: 8 });
      registerActivity();
      showToast("Boss defeated. Judgment gained a major boost.");
    } else {
      showToast("Boss defeated again. The daily reward was already claimed.");
    }
  } else {
    state.bossRuns += 1;
  }

  saveState();
}

function renderJournalFeed() {
  if (state.journalEntries.length === 0) {
    elements.journalFeed.innerHTML = `
      <div class="empty-state">
        Your journal is still empty. The first entry is the first proof that today’s taste did not vanish without a trace.
      </div>
    `;
    return;
  }

  elements.journalFeed.innerHTML = state.journalEntries
    .slice(0, 3)
    .map(
      (entry) => `
        <article class="feed-card">
          <h3>${escapeHtml(entry.moment)}</h3>
          <p><strong>Challenge:</strong> ${escapeHtml(entry.challenge)}</p>
          <p><strong>Discovery:</strong> ${escapeHtml(entry.discovery)}</p>
          <p><strong>Next:</strong> ${escapeHtml(entry.intention)}</p>
          <time>${formatDate(entry.createdAt)}</time>
        </article>
      `
    )
    .join("");
}

function renderArchive() {
  if (state.archiveItems.length === 0) {
    elements.archiveInsight.innerHTML = `
      <h3>No archive pattern yet</h3>
      <p>
        Add references with tags. The platform will surface your recurring preferences and suggest the next stretch zone.
      </p>
    `;
    elements.archiveList.innerHTML = `
      <div class="empty-state">
        Your archive is empty. Start with one object, one space, or one sound that taught you something about your own standards.
      </div>
    `;
    return;
  }

  const tagCounts = getTagCounts();
  const topTag = getTopKey(tagCounts);
  const mediumCounts = countBy(state.archiveItems, "medium");
  const topMedium = getTopKey(mediumCounts);
  const sameMediumRatio = mediumCounts[topMedium] / state.archiveItems.length;
  const stretchText =
    sameMediumRatio > 0.55
      ? `Most of your archive lives in ${topMedium}. A good stretch quest is to save something from a different medium tomorrow.`
      : "Your archive is already mixed. Now look for the pattern that links unlike things across media.";

  elements.archiveInsight.innerHTML = `
    <h3>${escapeHtml(signatureMap[topTag] || "Pattern Seeker")}</h3>
    <p>
      Your archive currently leans toward <strong>${escapeHtml(topTag)}</strong> and appears most often in
      <strong>${escapeHtml(topMedium)}</strong>.
      ${escapeHtml(stretchText)}
    </p>
  `;

  elements.archiveList.innerHTML = state.archiveItems
    .slice(0, 5)
    .map(
      (item) => `
        <article class="archive-card">
          <div class="archive-card-header">
            <h3>${escapeHtml(item.title)}</h3>
            <span class="archive-meta">${escapeHtml(item.medium)}</span>
          </div>
          <p>${escapeHtml(item.note)}</p>
          <div class="archive-tags">
            ${item.tags.map((tag) => `<span class="archive-tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <time>${formatDate(item.createdAt)}</time>
        </article>
      `
    )
    .join("");
}

function renderTagOptions() {
  elements.tagOptions.innerHTML = archiveTags
    .map(
      (tag) => `
        <label class="tag-option">
          <input type="checkbox" name="tags" value="${tag}" />
          <span>${escapeHtml(capitalize(tag))}</span>
        </label>
      `
    )
    .join("");
}

function renderSkills() {
  const skills = [
    {
      key: "perception",
      title: "Perception",
      description: "How much nuance you catch before labels take over.",
    },
    {
      key: "judgment",
      title: "Judgment",
      description: "How well you compare, defend, and revise aesthetic choices.",
    },
    {
      key: "expression",
      title: "Expression",
      description: "How clearly you can articulate taste and turn it into form.",
    },
    {
      key: "reflection",
      title: "Reflection",
      description: "How consistently you convert experience into insight.",
    },
  ];

  elements.skillBars.innerHTML = skills
    .map((skill) => {
      const value = state.skills[skill.key];
      return `
        <article class="skill-card">
          <div class="skill-row">
            <div>
              <strong>${skill.title}</strong>
              <span>${escapeHtml(skill.description)}</span>
            </div>
            <strong>${value}/100</strong>
          </div>
          <div class="skill-track">
            <div class="skill-fill" style="width: ${value}%"></div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderGrowthInsight() {
  const strongest = getTopKey(state.skills);
  const weakest = getLowestKey(state.skills);
  const totalQuestCompletions = getTotalQuestCompletions();
  const studiedChapterCount = Object.keys(state.studiedChapters).length;
  const takeawayCount = Object.keys(state.chapterNotes).length;
  const message =
    totalQuestCompletions === 0 && studiedChapterCount === 0
      ? "You are at the awakening stage. The first win is not intensity but consistency: study one chapter, complete one quest, then record one reflection."
      : `You have studied ${studiedChapterCount} atlas chapter${studiedChapterCount === 1 ? "" : "s"} and saved ${takeawayCount} takeaway${takeawayCount === 1 ? "" : "s"}. Your strongest muscle is ${strongest}, while ${weakest} is the current stretch zone. Keep reading and practicing in tandem so the knowledge does not stay abstract.`;

  elements.growthInsight.innerHTML = `
    <h3>Current read on your growth</h3>
    <p>${escapeHtml(message)}</p>
  `;
}

function renderBadges() {
  const studiedChapterCount = Object.keys(state.studiedChapters).length;
  const takeawayCount = Object.keys(state.chapterNotes).length;
  const badges = [
    {
      title: "Observer Mode",
      description: "Reach 30 perception by practicing close attention.",
      unlocked: state.skills.perception >= 30,
    },
    {
      title: "Sovereign Judge",
      description: "Complete 6 quests to prove taste is a practice, not a claim.",
      unlocked: getTotalQuestCompletions() >= 6,
    },
    {
      title: "Archive Keeper",
      description: "Store 4 tagged references in the taste archive.",
      unlocked: state.archiveItems.length >= 4,
    },
    {
      title: "Reflective Engine",
      description: "Write 3 journal entries that turn memory into evidence.",
      unlocked: state.journalEntries.length >= 3,
    },
    {
      title: "Bias Breaker",
      description: "Win one full boss fight in the arena.",
      unlocked: state.bossWins >= 1,
    },
    {
      title: "Integrator",
      description: "Raise every skill to at least 25 points.",
      unlocked: Object.values(state.skills).every((value) => value >= 25),
    },
    {
      title: "Curriculum Walker",
      description: "Mark 8 atlas chapters as truly studied.",
      unlocked: studiedChapterCount >= 8,
    },
    {
      title: "Route Finisher",
      description: "Complete the one-week sprint route.",
      unlocked: getRouteChapters("sprint-path").every((chapter) => isChapterStudied(chapter.id)),
    },
    {
      title: "Margin Writer",
      description: "Save 5 chapter takeaways in the lesson studio.",
      unlocked: takeawayCount >= 5,
    },
  ];

  elements.badgeGrid.innerHTML = badges
    .map(
      (badge) => `
        <article class="badge-card ${badge.unlocked ? "unlocked" : ""}">
          <span class="badge-state">${badge.unlocked ? "Unlocked" : "Locked"}</span>
          <h3>${escapeHtml(badge.title)}</h3>
          <p>${escapeHtml(badge.description)}</p>
        </article>
      `
    )
    .join("");
}

function getDailyQuests() {
  const basePool = questPool.filter(
    (quest) => quest.paths.includes(state.selectedPath) || quest.paths.includes("balanced")
  );
  const seed = hashString(`${getTodayKey()}-${state.selectedPath}`);
  const shuffled = seededShuffle(basePool, seed);
  return shuffled.slice(0, DAILY_QUEST_COUNT);
}

function getTodayCompletedQuestIds() {
  return state.completedQuestsByDay[getTodayKey()] || [];
}

function getTodayCompletedCount() {
  return getTodayCompletedQuestIds().length;
}

function getTotalQuestCompletions() {
  return Object.values(state.completedQuestsByDay).reduce((sum, items) => sum + items.length, 0);
}

function getActiveRoute() {
  return routeGuides.find((route) => route.id === state.selectedRoute) || routeGuides[0];
}

function getRouteChapters(routeId = state.selectedRoute) {
  if (routeId === "full-map") {
    return chapterAtlas;
  }

  return chapterAtlas.filter((chapter) => chapter.routes.includes(routeId));
}

function getVisibleAtlasChapters() {
  return getRouteChapters().filter((chapter) => {
    return state.selectedPart === "all" ? true : chapter.partId === state.selectedPart;
  });
}

function getPartMeta(partId) {
  return bookParts.find((part) => part.id === partId) || bookParts[0];
}

function ensureSelectedChapter(chapters = getVisibleAtlasChapters()) {
  if (chapters.length === 0) {
    state.selectedChapterId = "";
    return;
  }

  const selectedStillVisible = chapters.some((chapter) => chapter.id === state.selectedChapterId);
  if (!state.selectedChapterId || !selectedStillVisible) {
    state.selectedChapterId = chapters[0].id;
  }
}

function getSelectedChapter() {
  return chapterAtlas.find((chapter) => chapter.id === state.selectedChapterId) || null;
}

function isChapterStudied(chapterId) {
  return Boolean(state.studiedChapters[chapterId]);
}

function applyRewards(rewards) {
  state.xp += rewards.xp || 0;
  Object.keys(state.skills).forEach((skill) => {
    state.skills[skill] = clamp(state.skills[skill] + (rewards[skill] || 0), 0, 100);
  });
}

function registerActivity() {
  const today = getTodayKey();
  const yesterday = getDateKey(-1);

  if (state.lastActivityDate === today) {
    return;
  }

  if (state.lastActivityDate === yesterday) {
    state.streak += 1;
  } else {
    state.streak = 1;
  }

  state.lastActivityDate = today;
}

function getSignature() {
  if (state.archiveItems.length === 0) {
    return signatureMap[state.selectedPath];
  }

  const topTag = getTopKey(getTagCounts());
  return signatureMap[topTag] || signatureMap[state.selectedPath];
}

function getTagCounts() {
  const counts = {};
  archiveTags.forEach((tag) => {
    counts[tag] = 0;
  });

  state.archiveItems.forEach((item) => {
    item.tags.forEach((tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });

  return counts;
}

function getChoiceClasses(index, answerIndex) {
  if (battleState.answeredChoice === null) {
    return "";
  }

  if (index === answerIndex) {
    return "correct";
  }

  if (index === battleState.answeredChoice) {
    return "wrong";
  }

  return "";
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    elements.toast.classList.remove("visible");
  }, 2200);
}

function loadState() {
  const fallback = {
    selectedRoute: "full-map",
    selectedPart: "all",
    selectedChapterId: "ch-001",
    selectedPath: "balanced",
    xp: 0,
    streak: 0,
    lastActivityDate: "",
    completedQuestsByDay: {},
    dailyClearBonusByDay: {},
    bossVictoriesByDay: {},
    bossWins: 0,
    bossRuns: 0,
    studiedChapters: {},
    chapterNotes: {},
    notedChapters: {},
    skills: {
      perception: 0,
      judgment: 0,
      expression: 0,
      reflection: 0,
    },
    journalEntries: [],
    archiveItems: [],
  };

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return fallback;
    }

    const parsed = JSON.parse(raw);
    return {
      ...fallback,
      ...parsed,
      skills: {
        ...fallback.skills,
        ...(parsed.skills || {}),
      },
      journalEntries: Array.isArray(parsed.journalEntries) ? parsed.journalEntries : [],
      archiveItems: Array.isArray(parsed.archiveItems) ? parsed.archiveItems : [],
      studiedChapters: parsed.studiedChapters || {},
      chapterNotes: parsed.chapterNotes || {},
      notedChapters: parsed.notedChapters || {},
      completedQuestsByDay: parsed.completedQuestsByDay || {},
      dailyClearBonusByDay: parsed.dailyClearBonusByDay || {},
      bossVictoriesByDay: parsed.bossVictoriesByDay || {},
    };
  } catch (error) {
    console.error("Failed to load Taste Quest state.", error);
    return fallback;
  }
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function createId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function seededShuffle(list, seed) {
  const copy = [...list];
  let randomSeed = seed || 1;

  for (let index = copy.length - 1; index > 0; index -= 1) {
    randomSeed = (randomSeed * 9301 + 49297) % 233280;
    const swapIndex = Math.floor((randomSeed / 233280) * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function getTodayKey() {
  return formatDayKey(new Date());
}

function getDateKey(offset) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return formatDayKey(date);
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(dateString));
}

function countBy(items, key) {
  return items.reduce((accumulator, item) => {
    const value = item[key];
    accumulator[value] = (accumulator[value] || 0) + 1;
    return accumulator;
  }, {});
}

function getTopKey(record) {
  return Object.entries(record).sort((left, right) => right[1] - left[1])[0][0];
}

function getLowestKey(record) {
  return Object.entries(record).sort((left, right) => left[1] - right[1])[0][0];
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatDayKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
