document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("cs-profile-modal");
  if (!modal) return;

  const modalImg = modal.querySelector(".cs-profile-modal-img");
  const modalPlaceholder = modal.querySelector(".cs-profile-modal-placeholder");
  const modalName = modal.querySelector(".cs-profile-modal-name");
  const modalTitle = modal.querySelector(".cs-profile-modal-title");
  const modalBio = modal.querySelector(".cs-profile-modal-bio");

  let lastFocused = null;

  const openModal = (profile) => {
    const img = profile.querySelector(".cs-profile-toggle img");
    const placeholder = profile.querySelector(
      ".cs-profile-toggle .cs-profile-placeholder"
    );

    if (img) {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalImg.hidden = false;
      modalPlaceholder.hidden = true;
    } else if (placeholder) {
      modalPlaceholder.textContent = placeholder.textContent;
      modalPlaceholder.hidden = false;
      modalImg.hidden = true;
    }

    modalName.textContent = profile.querySelector(".cs-profile-name").textContent;
    modalTitle.textContent = profile.querySelector(".cs-profile-title").textContent;
    modalBio.innerHTML = profile.querySelector(".cs-profile-bio").innerHTML;

    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("cs-modal-open");
    modal.querySelector(".cs-profile-modal-close").focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("cs-modal-open");
    if (lastFocused) lastFocused.focus();
  };

  document.querySelectorAll(".cs-profile-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      openModal(toggle.closest(".cs-profile"));
    });
  });

  modal.querySelectorAll("[data-modal-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });
});
