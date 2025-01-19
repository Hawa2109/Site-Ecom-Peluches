//  Animation JS sur la page d'accueil
document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: ".accueil-image",
    translateY: [-50, 15],
    opacity: [0, 1],
    duration: 5000,
    easing: "easeOutExpo",
  });
});

// Animation pour les titres
anime({
  targets: ".section-titre",
  translateY: [-50, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutExpo",
  delay: anime.stagger(200),
});

// Animation pour les images
anime({
  targets: ".accueil-image, .apropos-image",
  scale: [0.8, 1],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeOutExpo",
  delay: anime.stagger(200, { start: 500 }),
});
