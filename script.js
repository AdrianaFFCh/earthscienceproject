document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('js-enabled');

  const ctaButtons = document.querySelectorAll('.button, .button-secondary');
  if (ctaButtons.length) {
    ctaButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        console.log('CTA clicked:', button.textContent.trim());
      });
    });
  }
});
