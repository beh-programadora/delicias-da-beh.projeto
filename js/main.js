// ======== TEMA ESCURO / CLARO ========

// Seleciona o botão e o body
const themeToggle = document.getElementById("theme-toggle");
const contrastToggle = document.getElementById("contrast-toggle");
const body = document.body;

// Carrega preferências salvas
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeToggle.setAttribute("aria-pressed", "true");
  themeToggle.textContent = "☀️";
}
if (localStorage.getItem("contrast") === "high") {
  body.classList.add("high-contrast");
  contrastToggle.setAttribute("aria-pressed", "true");
}

// Alternar tema escuro/claro
themeToggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-theme");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-pressed", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Alternar alto contraste
contrastToggle.addEventListener("click", () => {
  const isHigh = body.classList.toggle("high-contrast");
  contrastToggle.setAttribute("aria-pressed", isHigh);
  localStorage.setItem("contrast", isHigh ? "high" : "normal");
});


// ======== FORMULÁRIO ========

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
    status.textContent = "Mensagem enviada com sucesso 💌";
    status.focus();
    setTimeout(() => (status.textContent = ""), 4000);
  });
}

