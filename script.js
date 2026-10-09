document.querySelector('.scroll-cue')?.addEventListener('click', (event) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  event.preventDefault();
  document.querySelector('#reward')?.scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.primary-cta, .reward-cta').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const destination = button.href;
    const newTab = window.open('', '_blank');

    if (newTab) {
      newTab.document.title = '正在前往 EZ8…';
      newTab.document.body.innerHTML = '<p style="font:600 16px system-ui;text-align:center;margin-top:18vh;color:#123b63">正在为你打开 EZ8…</p>';
    }

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'CompleteRegistration', {
        content_name: 'EZ8 New User Registration',
        status: true
      });
    }

    window.setTimeout(() => {
      if (newTab && !newTab.closed) {
        newTab.location.replace(destination);
      } else {
        window.location.href = destination;
      }
    }, 1500);
  });
});
