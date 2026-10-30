document.querySelector('.scroll-cue')?.addEventListener('click', (event) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  event.preventDefault();
  document.querySelector('#reward')?.scrollIntoView({ behavior: 'smooth' });
});

// Keep native target="_blank" navigation immediate. The original page stays
// open so Pixel can finish sending without a navigation timer.
document.querySelectorAll('.primary-cta, .reward-cta, .bonus-cta').forEach((button) => {
  button.addEventListener('click', () => {
    try {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'CompleteRegistration', {
          content_name: 'EZ8 New User Registration',
          status: true
        });
      }
    } catch (error) {
      // Analytics errors must not interrupt the link's normal navigation.
      console.warn('Meta Pixel event could not be queued.', error);
    }
  });
});
