document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio padrão

    // Captura dos campos
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const nascimento = document.getElementById("nascimento");
    const endereco = document.getElementById("endereco");
    const cep = document.getElementById("cep");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");

    // Limpa mensagens antigas
    document.querySelectorAll(".erro").forEach(e => e.remove());

    let valido = true;

    // Função auxiliar para criar mensagens
    function mostrarErro(campo, mensagem) {
      const erro = document.createElement("span");
      erro.classList.add("erro");
      erro.style.color = "red";
      erro.textContent = mensagem;
      campo.insertAdjacentElement("afterend", erro);
      valido = false;
    }

    // Validações simples
    if (nome.value.trim().length < 5) {
      mostrarErro(nome, "Digite seu nome completo (mínimo 5 caracteres).");
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
      mostrarErro(email, "Digite um e-mail válido.");
    }

    const cpfLimpo = cpf.value.replace(/\D/g, "");
    if (cpfLimpo.length !== 11) {
      mostrarErro(cpf, "CPF deve ter 11 números.");
    }

    const telefoneLimpo = telefone.value.replace(/\D/g, "");
    if (telefoneLimpo.length < 10) {
      mostrarErro(telefone, "Digite um telefone válido com DDD.");
    }

    if (!nascimento.value) {
      mostrarErro(nascimento, "Informe sua data de nascimento.");
    }

    if (endereco.value.trim() === "") {
      mostrarErro(endereco, "Informe seu endereço.");
    }

    const cepLimpo = cep.value.replace(/\D/g, "");
    if (cepLimpo.length !== 8) {
      mostrarErro(cep, "CEP deve ter 8 números.");
    }

    if (cidade.value.trim() === "") {
      mostrarErro(cidade, "Informe a cidade.");
    }

    if (estado.value.trim() === "") {
      mostrarErro(estado, "Informe o estado.");
    }

    // Se tudo ok:
    if (valido) {
      alert("✅ Cadastro realizado com sucesso!");
      form.reset();
    } else {
      alert("⚠️ Corrija os erros antes de enviar novamente.");
    }
  });
});
