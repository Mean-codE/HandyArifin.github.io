document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const sectionId = this.dataset.section;
      const section = document.getElementById(sectionId);
      const offsetTop = section.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });
});
