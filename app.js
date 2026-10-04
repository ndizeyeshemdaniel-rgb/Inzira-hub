"use strict";

/*
==================================================
INZIRA HUB
Optimized frontend JavaScript
==================================================
*/


/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader?.classList.add("hidden");
  }, 250);
});


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

menuButton?.addEventListener("click", () => {
  mainNav?.classList.toggle("open");
});


/* Close mobile menu after navigation */

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav?.classList.remove("open");
  });
});


/* =========================
   MODAL SYSTEM
========================= */

const modals = {
  chat: document.getElementById("chatModal"),
  tool: document.getElementById("toolModal"),
  tutorial: document.getElementById("tutorialModal")
};

function closeModal() {
  Object.values(modals).forEach(modal => {
    modal?.classList.remove("active");
  });

  document.body.style.overflow = "";
}


/* Close when clicking outside */

Object.values(modals).forEach(modal => {

  modal?.addEventListener("click", event => {

    if (event.target === modal) {
      closeModal();
    }

  });

});


/* Close with Escape */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeModal();
  }

});


/* =========================
   INZIRA AI
========================= */

function openChat() {

  closeModal();

  modals.chat?.classList.add("active");

  document.body.style.overflow = "hidden";

  setTimeout(() => {
    document.getElementById("chatInput")?.focus();
  }, 100);

}


function sendMessage() {

  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatMessages");

  if (!input || !messages) return;

  const text = input.value.trim();

  if (!text) return;


  /* User message */

  const userMessage = document.createElement("div");

  userMessage.className = "message user";
  userMessage.textContent = text;

  messages.appendChild(userMessage);

  input.value = "";

  messages.scrollTop = messages.scrollHeight;


  /*
  --------------------------------------------------
  DEMO RESPONSE

  Replace this section later with your secure
  backend/API request.

  NEVER put a private AI API key directly in
  this JavaScript file.
  --------------------------------------------------
  */

  const response = generateDemoResponse(text);

  setTimeout(() => {

    const aiMessage = document.createElement("div");

    aiMessage.className = "message ai";
    aiMessage.textContent = response;

    messages.appendChild(aiMessage);

    messages.scrollTop = messages.scrollHeight;

  }, 350);

}


function generateDemoResponse(text) {

  const lower = text.toLowerCase();

  if (
    lower.includes("hello") ||
    lower.includes("hi") ||
    lower.includes("hey")
  ) {
    return "Hello! 👋 Welcome to Inzira Hub. What would you like to create or learn?";
  }

  if (
    lower.includes("image") ||
    lower.includes("picture")
  ) {
    return "I can help you develop an AI image idea or write a detailed image prompt.";
  }

  if (
    lower.includes("video") ||
    lower.includes("movie")
  ) {
    return "I can help you plan scenes, scripts, camera movements and video prompts.";
  }

  if (
    lower.includes("code") ||
    lower.includes("website")
  ) {
    return "I can help you plan a website, understand code or build a project step by step.";
  }

  if (
    lower.includes("business")
  ) {
    return "Let's turn your idea into a business concept, plan, brand or marketing strategy.";
  }

  if (
    lower.includes("learn")
  ) {
    return "Great! Tell me what you want to learn and I'll help you break it into simple steps.";
  }

  return "That's an interesting idea. Inzira AI can help you develop it step by step. Tell me more about what you want to create.";
}


/* Enter key sends chat */

document.getElementById("chatInput")?.addEventListener("keydown", event => {

  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }

});


/* =========================
   TOOLS
========================= */

function openTool(toolName) {

  const content = document.getElementById("toolContent");

  if (!content) return;

  const descriptions = {

    "Inzira AI":
      "Your intelligent assistant for questions, ideas, learning, writing and problem solving.",

    "Inzira Chat":
      "A conversational AI experience designed to make communication simple and useful.",

    "Inzira Image":
      "Create visual concepts, image prompts, designs and creative ideas.",

    "Inzira Studio":
      "Develop videos, movies, advertisements, music videos and stories.",

    "Inzira Voice":
      "Explore voice-based AI experiences and future voice tools.",

    "Inzira Translate":
      "Translate and work between Kinyarwanda, English and French.",

    "Inzira Learn":
      "Learn coding, AI, technology, business and digital skills.",

    "Business":
      "Build business ideas, plans, marketing concepts and strategies.",

    "Music":
      "Develop lyrics, song concepts, music projects and creative ideas.",

    "Documents":
      "Work with documents, reports, notes and written projects.",

    "Code":
      "Learn programming and develop websites and software.",

    "Design":
      "Create ideas for digital designs and creative experiences."

  };


  const description =
    descriptions[toolName] ||
    "Explore this Inzira Hub experience.";


  content.innerHTML = `
    <div class="section-label">INZIRA HUB TOOL</div>

    <h2 style="font-size:2.5rem; margin-bottom:15px;">
      ${escapeHTML(toolName)}
    </h2>

    <p style="color:#999; margin-bottom:30px;">
      ${escapeHTML(description)}
    </p>

    <div style="
      padding:20px;
      border:1px solid #252525;
      border-radius:15px;
      background:#090909;
      margin-bottom:20px;
    ">
      <strong style="color:#d4af37;">
        🚧 Experience in development
      </strong>

      <p style="color:#888; margin-top:8px;">
        This section is ready for connection to the
        Inzira Hub backend and AI services.
      </p>
    </div>

    <button
      class="primary-btn"
      onclick="closeModal(); openChat();"
    >
      Ask Inzira AI →
    </button>
  `;


  closeModal();

  modals.tool?.classList.add("active");

  document.body.style.overflow = "hidden";
}


/* =========================
   TUTORIALS
========================= */

function showTutorial(title) {

  const content = document.getElementById("tutorialContent");

  if (!content) return;


  const tutorialData = {

    "How to use AI": [
      "Start with a clear goal.",
      "Give the AI enough context.",
      "Explain what format you want.",
      "Review the result and improve your prompt."
    ],

    "Creating AI Images": [
      "Describe the subject.",
      "Describe the environment.",
      "Choose a visual style.",
      "Describe lighting and camera details.",
      "Review and improve the prompt."
    ],

    "Making Videos": [
      "Start with your story.",
      "Divide the story into scenes.",
      "Describe characters and locations.",
      "Add camera movement.",
      "Add dialogue or voiceover."
    ],

    "Learning to Code": [
      "Start with HTML.",
      "Learn CSS.",
      "Learn JavaScript.",
      "Build small projects.",
      "Keep improving your projects."
    ]

  };


  const steps =
    tutorialData[title] ||
    ["More tutorial content will be available soon."];


  content.innerHTML = `
    <div class="section-label">INZIRA TUTORIAL</div>

    <h2 style="font-size:2.3rem; margin-bottom:25px;">
      ${escapeHTML(title)}
    </h2>

    <div>
      ${steps.map((step, index) => `
        <div style="
          display:flex;
          gap:15px;
          padding:15px 0;
          border-bottom:1px solid #222;
        ">
          <strong style="color:#d4af37;">
            ${String(index + 1).padStart(2, "0")}
          </strong>

          <span style="color:#bbb;">
            ${escapeHTML(step)}
          </span>
        </div>
      `).join("")}
    </div>
  `;


  closeModal();

  modals.tutorial?.classList.add("active");

  document.body.style.overflow = "hidden";
}


/* =========================
   COMING SOON
========================= */

function comingSoon(feature) {

  const content = document.getElementById("toolContent");

  if (!content) return;

  content.innerHTML = `
    <div class="section-label">INZIRA HUB</div>

    <h2 style="font-size:2.4rem;">
      ${escapeHTML(feature)}
    </h2>

    <p style="color:#999; margin:20px 0;">
      This feature is being developed and will be
      connected to the Inzira Hub platform.
    </p>

    <button class="primary-btn" onclick="closeModal(); openChat();">
      Explore Inzira AI →
    </button>
  `;


  closeModal();

  modals.tool?.classList.add("active");

  document.body.style.overflow = "hidden";
}


/* =========================
   LANGUAGE SELECTOR
========================= */

const languageSelect = document.getElementById("languageSelect");

languageSelect?.addEventListener("change", event => {

  const language = event.target.value;

  /*
  This currently demonstrates language selection.
  A complete multilingual system can later load
  translations from a JSON file.
  */

  if (language === "rw") {
    showToast("Kinyarwanda mode selected 🇷🇼");
  }

  else if (language === "fr") {
    showToast("Mode français sélectionné 🇫🇷");
  }

  else {
    showToast("English mode selected 🇬🇧");
  }

});


/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(message) {

  let toast = document.getElementById("inziraToast");

  if (!toast) {

    toast = document.createElement("div");

    toast.id = "inziraToast";

    toast.style.cssText = `
      position:fixed;
      bottom:25px;
      left:50%;
      transform:translateX(-50%);
      z-index:5000;
      background:#111;
      color:white;
      border:1px solid rgba(212,175,55,.4);
      padding:12px 18px;
      border-radius:10px;
      font-size:13px;
      box-shadow:0 10px 30px rgba(0,0,0,.4);
    `;

    document.body.appendChild(toast);
  }


  toast.textContent = message;
  toast.style.opacity = "1";


  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.style.opacity = "0";
  }, 2200);

}


/* =========================
   SECURITY / SAFE TEXT
========================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================
   PERFORMANCE
========================= */

/*
Avoid expensive scroll listeners.

We only add a small visual state to the
navbar when the user scrolls.
*/

let scrollTicking = false;

window.addEventListener("scroll", () => {

  if (scrollTicking) return;

  scrollTicking = true;

  requestAnimationFrame(() => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }

    scrollTicking = false;

  });

}, { passive: true });


/* =========================
   GLOBAL FUNCTIONS
========================= */

window.openChat = openChat;
window.sendMessage = sendMessage;
window.closeModal = closeModal;
window.openTool = openTool;
window.showTutorial = showTutorial;
window.comingSoon = comingSoon;
