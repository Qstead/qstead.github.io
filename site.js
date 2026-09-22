// ============================================================
// EDIT THIS BLOCK: your contact details appear across all pages.
// ============================================================
const SITE = {
  email: "jefferydlow@yahoo.com",
  phone: "(619) 718-1853",
  phoneLink: "+16197181853", // digits only, with country code
  formAction: "https://formspree.io/f/FORM-ID", // from formspree.io (see README)
};

// ---- Fill in contact details everywhere ----
document.querySelectorAll('[data-site="email"]').forEach((el) => {
  el.textContent = SITE.email;
  el.href = "mailto:" + SITE.email;
});
document.querySelectorAll('[data-site="phone"]').forEach((el) => {
  el.textContent = SITE.phone;
  el.href = "tel:" + SITE.phoneLink;
});
document.querySelectorAll('[data-site="linkedin"]').forEach((el) => {
  el.href = SITE.linkedin;
});
document.querySelectorAll('[data-site="year"]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// ---- Mobile menu ----
const btn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");
if (btn && menu) {
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    })
  );
}

// ---- Contact form: Formspree when configured, otherwise opens an email draft ----
const form = document.getElementById("contact-form");
if (form) {
  form.action = SITE.formAction;
  const status = document.getElementById("form-status");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    if (data.get("_gotcha")) return; // spam trap
    const configured = !SITE.formAction.includes("FORM-ID");
    if (configured) {
      try {
        const res = await fetch(SITE.formAction, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (res.ok) {
          form.reset();
          status.textContent = "Thank you. Your message was sent and I will reply within one business day.";
          return;
        }
        throw new Error("Request failed");
      } catch (err) {
        status.textContent = "Sorry, something went wrong. Please email me directly.";
        return;
      }
    }
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company")}`,
      `Industry: ${data.get("industry")}`,
      `Need: ${data.get("service")}`,
      "",
      data.get("message"),
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Website inquiry")}&body=${encodeURIComponent(body)}`;
  });
}
