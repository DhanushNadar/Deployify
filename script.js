// Scroll Reveal Animation
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.scroll-reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].style.opacity = 1;
      reveals[i].style.transform = 'translateY(0)';
    }
  }
});
