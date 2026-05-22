const menuButton = document.querySelector("[data-menu-button]");
const navLinks = document.querySelector("[data-nav-links]");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}


if (typeof Swiper !== "undefined" && document.querySelector(".brand-swiper")) {
  new Swiper(".brand-swiper", {
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 42 },
      700: { slidesPerView: 4, spaceBetween: 42 },
      1100: { slidesPerView: 6, spaceBetween: 42 }
    },
    loop: true,
    speed: 650,
    slidesPerView: 1,
    spaceBetween: 42
  });
}
