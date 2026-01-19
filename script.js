let cartItems = 0;

function changeTextSize(size) {
  document.body.classList.remove("text-large", "text-xlarge");
  if (size === "large") {
    document.body.classList.add("text-large");
  } else if (size === "xlarge") {
    document.body.classList.add("text-xlarge");
  }
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  const burger = document.querySelector(".burger");
  const isActive = menu.classList.toggle("active");
  burger.setAttribute("aria-expanded", isActive);
}

function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  document.getElementById("menu").classList.remove("active");
  document.querySelector(".burger").setAttribute("aria-expanded", "false");
}

function addToCart(itemName, price) {
  cartItems++;
  document.getElementById("cartCount").textContent = cartItems;

  const cartCount = document.getElementById("cartCount");
  cartCount.style.transform = "scale(1.5)";
  setTimeout(() => {
    cartCount.style.transform = "scale(1)";
  }, 200);

  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", "polite");
  announcement.className = "sr-only";
  announcement.textContent =
    itemName + " ajouté au panier pour " + price + " euros";
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
}

function toggleCart() {
  if (cartItems === 0) {
    alert("Votre panier est vide");
  } else {
    alert("Vous avez " + cartItems + " article(s) dans votre panier");
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  if (form.checkValidity()) {
    alert(
      "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.",
    );
    form.reset();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.key === " ") {
    const target = e.target;

    if (
      target.tagName === "BUTTON" ||
      target.classList.contains("btn-card") ||
      target.classList.contains("btn-primary")
    ) {
      e.preventDefault();
      target.click();
    }

    if (target.tagName === "A") {
      e.preventDefault();
      target.click();
    }
  }
});
