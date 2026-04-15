const filterButtons = document.querySelectorAll(".filter-btn");
const petCards = document.querySelectorAll("#pets-grid .pet-card");

if (filterButtons.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      petCards.forEach((card) => {
        const size = card.dataset.size;

        if (filter === "all" || filter === size) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}