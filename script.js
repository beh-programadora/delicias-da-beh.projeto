// alternar modo escuro
document.getElementById('modo').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// alerta de envio
const form = document.getElementById('formContato');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("💌 Mensagem enviada com sucesso! Obrigado por entrar em contato com a Vitta Joias!");
    form.reset();
  });
}
