
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".close");

openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
