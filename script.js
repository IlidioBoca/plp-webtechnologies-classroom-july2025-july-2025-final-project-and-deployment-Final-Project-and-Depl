// ===== MENU MOBILE =====
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// ===== VALIDAÇÃO DO FORMULÁRIO =====
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    feedback.textContent = 'Por favor, preencha todos os campos!';
    return;
  }

  if (!validateEmail(email)) {
    feedback.textContent = 'Por favor, insira um email válido!';
    return;
  }

  feedback.style.color = 'green';
  feedback.textContent = 'Mensagem enviada com sucesso!';
  form.reset();
});

// Função de validação de email
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// ===== BOTÃO VOLTAR AO TOPO =====
const topBtn = document.getElementById('topBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SCROLL SUAVE PARA ANCORAS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
    // Fecha menu mobile ao clicar
    if(nav.classList.contains('show')) nav.classList.remove('show');
  });
});
