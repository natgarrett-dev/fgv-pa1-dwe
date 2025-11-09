// Configuração das cores de fundo
const colors = [
  { bg: "#f5f5f5", name: "Cinza Claro" },
  { bg: "#e8f4f8", name: "Azul Claro" },
  { bg: "#fef5e7", name: "Bege Suave" },
];

let currentColorIndex = 0;

// Elementos do DOM
const btnColor = document.getElementById("btnColor");
const colorIndicator = document.getElementById("colorIndicator");
const contactForm = document.getElementById("contactForm");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const nomeError = document.getElementById("nomeError");
const emailError = document.getElementById("emailError");
const successMessage = document.getElementById("successMessage");

// Função para alternar cor de fundo
function changeBackgroundColor() {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  const currentColor = colors[currentColorIndex];

  document.body.style.backgroundColor = currentColor.bg;
  colorIndicator.textContent = `Cor atual: ${currentColor.name}`;
}

// Event listener para o botão de cor
btnColor.addEventListener("click", changeBackgroundColor);

// Função para validar nome (mínimo 2 caracteres)
function validateNome(nome) {
  return nome.trim().length >= 2;
}

// Função para validar email (formato correto)
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

// Validação em tempo real do nome
nomeInput.addEventListener("input", function () {
  const isValid = validateNome(this.value);

  if (this.value.length > 0) {
    if (isValid) {
      this.classList.remove("error");
      this.classList.add("success");
      nomeError.classList.remove("show");
    } else {
      this.classList.add("error");
      this.classList.remove("success");
      nomeError.classList.add("show");
    }
  } else {
    this.classList.remove("error", "success");
    nomeError.classList.remove("show");
  }
});

// Validação em tempo real do email
emailInput.addEventListener("input", function () {
  const isValid = validateEmail(this.value);

  if (this.value.length > 0) {
    if (isValid) {
      this.classList.remove("error");
      this.classList.add("success");
      emailError.classList.remove("show");
    } else {
      this.classList.add("error");
      this.classList.remove("success");
      emailError.classList.add("show");
    }
  } else {
    this.classList.remove("error", "success");
    emailError.classList.remove("show");
  }
});

// Validação no envio do formulário
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = nomeInput.value;
  const email = emailInput.value;

  let isValid = true;

  // Validar nome
  if (!validateNome(nome)) {
    nomeInput.classList.add("error");
    nomeError.classList.add("show");
    isValid = false;
  } else {
    nomeInput.classList.remove("error");
    nomeInput.classList.add("success");
    nomeError.classList.remove("show");
  }

  // Validar email
  if (!validateEmail(email)) {
    emailInput.classList.add("error");
    emailError.classList.add("show");
    isValid = false;
  } else {
    emailInput.classList.remove("error");
    emailInput.classList.add("success");
    emailError.classList.remove("show");
  }

  // Se todos os campos são válidos, mostrar mensagem de sucesso
  if (isValid) {
    successMessage.classList.add("show");

    // Resetar formulário após 3 segundos
    setTimeout(() => {
      contactForm.reset();
      nomeInput.classList.remove("success");
      emailInput.classList.remove("success");
      successMessage.classList.remove("show");
    }, 3000);

    // Log dos dados (em produção, aqui seria enviado para um servidor)
    console.log("Formulário enviado com sucesso!");
    console.log("Nome:", nome);
    console.log("Email:", email);
  }
});

// Adicionar efeito de entrada suave
document.addEventListener("DOMContentLoaded", function () {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});