(() => {
    const nav = document.querySelector("#cs-navigation");
    if (!nav) return;

    const onScroll = () => nav.classList.toggle("cs-scrolled", window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const toggle = nav.querySelector(".cs-toggle");
    const navList = nav.querySelector(".cs-nav-list");
    if (!toggle || !navList) return;

    const closeMenu = () => {
        nav.classList.remove("cs-active");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open Menu");
    };

    const openMenu = () => {
        nav.classList.add("cs-active");
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Close Menu");
    };

    toggle.addEventListener("click", () => {
        nav.classList.contains("cs-active") ? closeMenu() : openMenu();
    });

    navList.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });
})();
