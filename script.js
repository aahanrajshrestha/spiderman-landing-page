// THIS IS JAVASCRIPT: It goes inside script.js
document.addEventListener("DOMContentLoaded", () => {
  
  // Mobile Nav Navigation
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (menuBtn && navLinks) {
    const menuBtnIcon = menuBtn.querySelector("i");
    const allNavLinks = document.querySelectorAll(".nav__links a");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    allNavLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
      });
    });
  }

  const targetDate = new Date("2026-07-31T00:00:00").getTime();

  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      const countdownContainer = document.querySelector(".footer__countdown");
      if (countdownContainer) {
        countdownContainer.innerHTML = "<div class='countdown__timer'>Now Playing In Theatres</div>";
      }
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const daysBox = document.getElementById("days");
    const hoursBox = document.getElementById("hours");
    const minutesBox = document.getElementById("minutes");
    const secondsBox = document.getElementById("seconds");

    if (daysBox && hoursBox && minutesBox && secondsBox) {
      daysBox.innerText = String(days).padStart(2, '0');
      hoursBox.innerText = String(hours).padStart(2, '0');
      minutesBox.innerText = String(minutes).padStart(2, '0');
      secondsBox.innerText = String(seconds).padStart(2, '0');
    }
  }, 1000);

});