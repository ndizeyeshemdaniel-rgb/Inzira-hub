/* =====================================================
   INZIRA HUB JAVASCRIPT
===================================================== */


/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

  setTimeout(() => {

    const loader =
      document.getElementById("loader");

    if (loader) {

      loader.classList.add("hide");

    }

  }, 1200);

});



/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

  const nav =
    document.getElementById("navigation");

  if (!nav) return;

  nav.classList.toggle("open");

}



/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

document.querySelectorAll("#navigation a")
.forEach(link => {

  link.addEventListener("click", () => {

    const nav =
      document.getElementById("navigation");

    nav.classList.remove("open");

  });

});



/* =====================================================
   LANGUAGE
===================================================== */

function changeLanguage() {

  const selector =
    document.getElementById("languageSelector");

  const language =
    selector.value;

  localStorage.setItem(
    "inziraLanguage",
    language
  );

  if (language === "rw") {

    alert(
      "Kinyarwanda mode selected. Full multilingual AI responses will be activated when the AI backend is connected."
    );

  }

  if (language === "fr") {

    alert(
      "Mode français sélectionné. Les réponses IA complètes seront activées lorsque le backend IA sera connecté."
    );

  }

  if (language === "en") {

    alert(
      "English mode selected."
    );

  }

}



/* =====================================================
   RESTORE LANGUAGE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const saved =
    localStorage.getItem(
      "inziraLanguage"
    );

  const selector =
    document.getElementById(
      "languageSelector"
    );

  if (saved && selector) {

    selector.value = saved;

  }

});



/* =====================================================
   CHAT
===================================================== */

function sendMessage() {

  const input =
    document.getElementById(
      "chatInput"
    );

  const messages =
    document.getElementById(
      "chatMessages"
    );

  if (!input || !messages) return;

  const text =
    input.value.trim();

  if (!text) return;


  /* USER MESSAGE */

  const user =
    document.createElement("div");

  user.className =
    "user-message";

  user.textContent =
    text;

  messages.appendChild(user);


  /* DEMO AI RESPONSE */

  setTimeout(() => {

    const ai =
      document.createElement("div");

    ai.className =
      "ai-message";

    ai.textContent =
      "I received your idea! This Inzira Chat interface is ready for connection to a secure AI backend. Your real AI response will appear here after the API is connected.";

    messages.appendChild(ai);

    messages.scrollTop =
      messages.scrollHeight;

  }, 600);


  input.value = "";

}



/* =====================================================
   MODAL
===================================================== */

function showComingSoon(feature) {

  const modal =
    document.getElementById("modal");

  const title =
    document.getElementById("modalTitle");

  const text =
    document.getElementById("modalText");

  title.textContent =
    feature;

  text.textContent =
    "The frontend for " +
    feature +
    " is ready. The production AI engine will be connected through a secure backend.";

  modal.classList.add("show");

}



function closeModal() {

  const modal =
    document.getElementById("modal");

  modal.classList.remove("show");

}



/* =====================================================
   TUTORIALS
===================================================== */

function openTutorial(name) {

  const modal =
    document.getElementById("modal");

  const title =
    document.getElementById("modalTitle");

  const text =
    document.getElementById("modalText");

  title.textContent =
    name;

  text.textContent =
    "This tutorial is part of Inzira Academy. The next production version will contain video lessons, written steps, interactive exercises and a Try It Yourself button.";

  modal.classList.add("show");

}



/* =====================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
===================================================== */

const modal =
  document.getElementById("modal");

if (modal) {

  modal.addEventListener(
    "click",
    function(event) {

      if (event.target === modal) {

        closeModal();

      }

    }
  );

}



/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      closeModal();

    }

  }
);
