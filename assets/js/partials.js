const NAV_ITEMS = [
  { href: "index.html", label: "Úvod", page: "home" },
  { href: "projekt.html", label: "Projekt", page: "project" },
  { href: "stavba.html", label: "Stavba", page: "stavba" },
  { href: "lokomotivy.html", label: "Lokomotivy", page: "locomotives" },
];

export function renderHeader(activePage) {
  const navLinks = NAV_ITEMS.map(
    item => `<a${item.page === activePage ? ' class="active"' : ""} href="${item.href}">${item.label}</a>`
  ).join("\n        ");

  return `
    <a class="brand" href="index.html" aria-label="N kolejiště – úvod">
      <span class="brand-mark"></span>
      <span>N KOLEJIŠTĚ</span>
    </a>

    <button class="menu-toggle" id="menuToggle" aria-label="Otevřít menu" aria-expanded="false">
      <span></span><span></span>
    </button>

    <nav class="main-nav" id="mainNav" aria-label="Hlavní navigace">
        ${navLinks}
    </nav>
  `;
}

export function renderFooter() {
  return `
    <div class="container footer-grid">
      <div>
        <div class="brand footer-brand"><span class="brand-mark"></span><span>N KOLEJIŠTĚ</span></div>
        <p>Digitální prezentace modelového kolejiště.</p>
      </div>
      <p class="copyright">© <span data-current-year></span> N kolejiště. Všechna práva vyhrazena.</p>
    </div>
  `;
}