// 滚动进入视口时的淡入动画
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .stack-item, .step, .screenshot-frame').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});

// 导航栏滚动时加深背景
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 20
    ? 'rgba(8, 8, 13, .94)'
    : 'rgba(8, 8, 13, .78)';
});