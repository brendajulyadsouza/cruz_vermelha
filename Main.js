document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  const closeMenu = () => {
    if (!toggle || !nav) return;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    toggle.textContent = '☰';
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
      toggle.textContent = isOpen ? '×' : '☰';
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (!nav.classList.contains('open')) return;
      if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  const amountButtons = document.querySelectorAll('.amount');
  const amountInput = document.getElementById('valor-personalizado');

  amountButtons.forEach((button) => {
    button.addEventListener('click', () => {
      amountButtons.forEach((item) => item.classList.remove('selected'));
      button.classList.add('selected');
      if (amountInput) amountInput.value = button.dataset.valor;
    });
  });

  const donationForm = document.getElementById('form-doacao');
  if (donationForm) {
    donationForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Obrigado pelo apoio! Em um site publicado, este formulário pode ser ligado ao PIX, gateway de pagamento ou WhatsApp.');
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Mensagem registrada. Em um site publicado, este formulário pode enviar para e-mail ou WhatsApp da escola.');
    });
  }
});
