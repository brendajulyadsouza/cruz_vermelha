// Menu mobile
document.addEventListener('DOMContentLoaded', () => {
   const toggle = document.querySelector('.nav-toggle');
   const nav = document.querySelector('.nav');
   if (toggle && nav) {
     toggle.addEventListener('click', () => {
       nav.classList.toggle('aberto');
       const aberto = nav.classList.contains('aberto');
       toggle.setAttribute('aria-expanded', aberto);
       toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
       toggle.textContent = aberto ? '������������������������������✕' : '���������������☰';
     });
     nav.querySelectorAll('a').forEach(link => {
       link.addEventListener('click', () => {
         nav.classList.remove('aberto');
         toggle.textContent = '���������������☰';
         toggle.setAttribute('aria-label', 'Abrir menu');
         toggle.setAttribute('aria-expanded', false);
       });
     });
   }

   // Fechar menu móvel ao clicar fora dele
   document.addEventListener('click', (e) => {
     if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('aberto')) {
       nav.classList.remove('aberto');
       toggle.textContent = '���������������☰';
       toggle.setAttribute('aria-label', 'Abrir menu');
       toggle.setAttribute('aria-expanded', false);
     }
   });

   // Fechar menu móvel ao redimensionar para desktop
   window.addEventListener('resize', () => {
     if (window.innerWidth > 860 && nav && nav.classList.contains('aberto')) {
       nav.classList.remove('aberto');
       toggle.textContent = '���������������☰';
       toggle.setAttribute('aria-label', 'Abrir menu');
       toggle.setAttribute('aria-expanded', false);
     }
   });

   // Fechar menu móvel ao pressionar ESC
   document.addEventListener('keydown', (e) => {
     if (e.key === 'Escape' && nav && nav.classList.contains('aberto')) {
       nav.classList.remove('aberto');
       toggle.textContent = '���������������☰';
       toggle.setAttribute('aria-label', 'Abrir menu');
       toggle.setAttribute('aria-expanded', false);
     }
   });

   // Seletor de valores na página de doação
   const botoesValor = document.querySelectorAll('.valor-btn');
   const inputValor = document.getElementById('valor-personalizado');
   if (botoesValor.length) {
     botoesValor.forEach(btn => {
       btn.addEventListener('click', () => {
         botoesValor.forEach(b => b.classList.remove('selecionado'));
         btn.classList.add('selecionado');
         if (inputValor) inputValor.value = btn.dataset.valor;
       });
     });
   }

   // Envio do formulário de doação (placeholder — ligar a um gateway de pagamento real)
   const formDoacao = document.getElementById('form-doacao');
   if (formDoacao) {
     formDoacao.addEventListener('submit', (e) => {
       e.preventDefault();
       alert('Formulário pronto para integração com o gateway de pagamento (ex: Stripe, PagSeguro, Mercado Pago). Substitua este alerta pela chamada real de checkout.');
     });
   }
});