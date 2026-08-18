(() => {
    const nav = document.querySelector("#cs-navigation");
    if (!nav) return;

    const onScroll = () => nav.classList.toggle("cs-scrolled", window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const toggle = nav.querySelector(".cs-toggle");
    const navList = nav.querySelector(".cs-nav-list");
    if (!toggle || !navList) return;

    const dropdown = nav.querySelector(".cs-dropdown");
    const dropdownToggle = nav.querySelector(".cs-dropdown-toggle");

    const closeDropdown = () => {
        if (!dropdown || !dropdownToggle) return;
        dropdown.classList.remove("cs-dropdown-active");
        dropdownToggle.setAttribute("aria-expanded", "false");
    };

    const openDropdown = () => {
        dropdown.classList.add("cs-dropdown-active");
        dropdownToggle.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
        nav.classList.remove("cs-active");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open Menu");
        closeDropdown();
    };

    const openMenu = () => {
        nav.classList.add("cs-active");
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Close Menu");
    };

    toggle.addEventListener("click", () => {
        nav.classList.contains("cs-active") ? closeMenu() : openMenu();
    });

    navList.querySelectorAll(".cs-nav-link:not(.cs-dropdown-toggle), .cs-dropdown-link").forEach((link) =>
        link.addEventListener("click", closeMenu)
    );

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

    if (dropdown && dropdownToggle) {
        dropdownToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdown.classList.contains("cs-dropdown-active") ? closeDropdown() : openDropdown();
        });

        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target)) closeDropdown();
        });
    }
})();
