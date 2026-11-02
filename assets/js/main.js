(function () {
  const burger = document.querySelector(".hamburger");
  const menu = document.querySelector(".mob-menu");
  if (burger && menu) {
    burger.addEventListener("click", () => {
      const open = menu.hasAttribute("hidden");
      if (open) menu.removeAttribute("hidden");
      else menu.setAttribute("hidden", "");
    });
  }
  document.querySelectorAll(".quote-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks — connect this form to your dispatch CRM.");
    });
  });
})();
