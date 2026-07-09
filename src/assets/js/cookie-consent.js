const CONSENT_KEY = "cookieConsent";

function loadGatedContent() {
    document.querySelectorAll("[data-consent-src]").forEach((el) => {
        if (!el.src) el.src = el.getAttribute("data-consent-src");
        el.closest(".cs-map-wrapper")?.classList.add("cs-consent-given");
    });
}

(() => {
    const banner = document.querySelector("#cs-cookie-banner");
    const consent = localStorage.getItem(CONSENT_KEY);

    if (consent === "accepted") {
        loadGatedContent();
    }

    document.querySelectorAll("[data-consent-load]").forEach((button) => {
        button.addEventListener("click", () => {
            localStorage.setItem(CONSENT_KEY, "accepted");
            loadGatedContent();
            if (banner) banner.hidden = true;
        });
    });

    if (consent || !banner) return;

    banner.hidden = false;

    banner.querySelector(".cs-cookie-accept").addEventListener("click", () => {
        localStorage.setItem(CONSENT_KEY, "accepted");
        loadGatedContent();
        banner.hidden = true;
    });

    banner.querySelector(".cs-cookie-decline").addEventListener("click", () => {
        localStorage.setItem(CONSENT_KEY, "declined");
        banner.hidden = true;
    });
})();
