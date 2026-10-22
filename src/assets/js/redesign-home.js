(() => {
    const revealEls = document.querySelectorAll("[data-reveal]");
    if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-shown");
                        io.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
        );
        revealEls.forEach((el) => io.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add("is-shown"));
    }

    document.querySelectorAll("[data-rail]").forEach((rail) => {
        const track = rail.querySelector(".cs-rail-track");
        const prev = rail.querySelector(".cs-rail-prev");
        const next = rail.querySelector(".cs-rail-next");
        const progress = rail.querySelector(".cs-rail-progress-thumb");
        if (!track || !prev || !next) return;

        const measure = () => {
            prev.disabled = track.scrollLeft < 8;
            next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
            rail.classList.toggle("cs-rail-scrolled", track.scrollLeft > 8);
            rail.classList.toggle("cs-rail-at-end", next.disabled);
            if (progress) {
                const visibleFraction = Math.min(1, track.clientWidth / track.scrollWidth);
                const scrollable = track.scrollWidth - track.clientWidth;
                const scrolledFraction = scrollable > 0 ? track.scrollLeft / scrollable : 0;
                progress.style.width = visibleFraction * 100 + "%";
                progress.style.transform = `translateX(${(scrolledFraction * (1 - visibleFraction) * 100) / visibleFraction}%)`;
            }
        };

        const nudge = (dir) => {
            track.scrollBy({ left: dir * Math.max(280, track.clientWidth * 0.7), behavior: "smooth" });
        };

        prev.addEventListener("click", () => nudge(-1));
        next.addEventListener("click", () => nudge(1));
        track.addEventListener("scroll", measure, { passive: true });
        measure();
    });
})();
