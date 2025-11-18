// Scroll-triggered animations using IntersectionObserver
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animate sections
      if (entry.target.classList.contains('section')) {
        entry.target.classList.add('animate-fade');
      }
      // Animate about sections
      if (entry.target.classList.contains('about-section')) {
        const left = entry.target.querySelector('.about-left');
        const right = entry.target.querySelector('.about-right');
        if (left) left.style.animation = 'slideFromLeft 0.8s ease-out forwards';
        if (right) right.style.animation = 'slideFromRight 0.8s ease-out forwards';
      }
      // Animate team cards
      if (entry.target.classList.contains('team-card')) {
        entry.target.style.animation = 'scaleUp 0.5s ease forwards';
      }
      // Animate info boxes
      if (entry.target.classList.contains('info-box')) {
        entry.target.classList.add('animate-scale');
      }
      // Animate two-col items
      if (entry.target.classList.contains('two-col')) {
        const items = entry.target.querySelectorAll('div');
        items.forEach((item, idx) => {
          if (idx === 0) {
            item.classList.add('animate-left');
            item.style.animationDelay = '0s';
          } else {
            item.classList.add('animate-right');
            item.style.animationDelay = '0.2s';
          }
        });
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animatable elements when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section, .about-section, .team-card, .info-box, .two-col').forEach(el => {
    observer.observe(el);
  });
});
