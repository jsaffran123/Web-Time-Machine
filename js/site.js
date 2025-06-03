// index.js - purpose and description here
// Author: Your Name
// Date:

// Home page navigation buttons 

  const story = "Time didn’t slow down. It didn’t shatter. It stopped. Completely.\nYou now stand outside the river of time.\nStep carefully. The past will tempt you. The future will test you.\nBut remember—time only stopped because you touched it.";
  const textElement = document.getElementById("introText");
  let i = 0;

  function typeStory() {
    if (i < story.length) {
      textElement.innerHTML += story.charAt(i) === '\n' ? "<br>" : story.charAt(i);
      i++;
      setTimeout(typeStory, 45);
    } else {
      setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("cutscene").style.display = "flex";

        setTimeout(() => {
          document.getElementById("cutscene").style.display = "none";
          showMainContent();
        }, 3000);
      }, 1000);
    }
  }

  function showMainContent() {
    document.querySelector(".title").style.display = "block";
    document.querySelector(".felx-container").style.display = "block";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      // First time visiting — play intro
      sessionStorage.setItem("hasSeenIntro", "true");
      document.querySelector(".title").style.display = "none";
      document.querySelector(".felx-container").style.display = "none";
      typeStory();
    } else {
      // Skip intro
      document.getElementById("intro").style.display = "none";
      document.getElementById("cutscene").style.display = "none";
      showMainContent();
    }
  });



