document.querySelector('.scroll-cue')?.addEventListener('click', (event) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  event.preventDefault();
  document.querySelector('#reward')?.scrollIntoView({ behavior: 'smooth' });
});
