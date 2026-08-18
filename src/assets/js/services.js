document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cs-price-category").forEach((details) => {
    const summary = details.querySelector(":scope > summary");
    const content = details.querySelector(":scope > .cs-price-content");
    if (!summary || !content) return;

    let animation = null;
    let isClosing = false;
    let isExpanding = false;

    summary.addEventListener("click", (event) => {
      event.preventDefault();
      details.style.overflow = "hidden";

      if (isClosing || !details.open) {
        openDetails();
      } else if (isExpanding || details.open) {
        closeDetails();
      }
    });

    function openDetails() {
      details.style.height = `${details.offsetHeight}px`;
      details.open = true;
      window.requestAnimationFrame(() => expand());
    }

    function expand() {
      isExpanding = true;
      const startHeight = `${details.offsetHeight}px`;
      const endHeight = `${summary.offsetHeight + content.offsetHeight}px`;

      if (animation) animation.cancel();

      animation = details.animate(
        { height: [startHeight, endHeight] },
        { duration: 250, easing: "ease-out" }
      );
      animation.onfinish = () => onAnimationFinish(true);
      animation.oncancel = () => (isExpanding = false);
    }

    function closeDetails() {
      isClosing = true;
      const startHeight = `${details.offsetHeight}px`;
      const endHeight = `${summary.offsetHeight}px`;

      if (animation) animation.cancel();

      animation = details.animate(
        { height: [startHeight, endHeight] },
        { duration: 250, easing: "ease-out" }
      );
      animation.onfinish = () => onAnimationFinish(false);
      animation.oncancel = () => (isClosing = false);
    }

    function onAnimationFinish(open) {
      details.open = open;
      animation = null;
      isClosing = false;
      isExpanding = false;
      details.style.height = "";
      details.style.overflow = "";
    }
  });
});
