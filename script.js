// Smooth scroll funktsioon noole jaoks
document.addEventListener("DOMContentLoaded", function () {
  const scrollArrow = document.querySelector(".scroll-arrow");

  if (scrollArrow) {
    scrollArrow.addEventListener("click", function (e) {
      e.preventDefault();

      // Leia sihtsektion
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Smooth scroll aniimatsiooni
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }

  // Kuninga ikoon klik animatsioon
  const logo = document.querySelector(".logo");

  if (logo) {
    logo.addEventListener("click", function () {
      // Eemalda animatsioon klass, et saaks uuesti triggitada
      this.classList.remove("spin-animation");

      // Force reflow, et animatsioon käivituks uuesti
      void this.offsetWidth;

      // Lisa animatsioon klass
      this.classList.add("spin-animation");

      // Eemalda klass animatsiooni lõppemisel
      setTimeout(() => {
        this.classList.remove("spin-animation");
      }, 600);
    });
  }
});
