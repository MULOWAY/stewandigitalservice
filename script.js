// PRODUITS
const products = [
  { title: "Guide E-Business Starter", price: "15 $" },
  { title: "Trading pour Débutants", price: "25 $" },
  { title: "Kit Réseaux Sociaux", price: "10 $" },
  { title: "Freelance Express", price: "20 $" }
];

// AFFICHAGE PRODUITS
const grid = document.getElementById("products-grid");

products.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("product-card");

  div.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.price}</p>
    <button onclick="alert('Acheter ${p.title}')">Acheter</button>
  `;

  grid.appendChild(div);
});

// MENU MOBILE
document.getElementById("mobile-menu-btn").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// TEXTE DYNAMIQUE
document.getElementById("hero-subtitle").innerText =
  "Dédiée à l'e-business, au trading et aux stratégies digitales simples.";

// CONTACT
document.getElementById("email-text").innerText = "stewandigitalhub@gmail.com";
document.getElementById("whatsapp-text").innerText = "+243 826 253 405";

document.getElementById("email-link").href =
  "mailto:stewandigitalhub@gmail.com";

document.getElementById("whatsapp-link").href =
  "https://wa.me/243826253405";