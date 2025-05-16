function enviarLike() {
  const uid = document.getElementById("uid").value.trim();
  const resultado = document.getElementById("resultado");

  if (!uid || isNaN(uid) || uid.length < 5) {
    resultado.textContent = "UID inválido. Verifique e tente novamente.";
    resultado.style.color = "red";
    return;
  }

  resultado.textContent = "Enviando like...";
  resultado.style.color = "#fff";

  const url = `http://wings.primaryhost.shop:2464/like?uid=${uid}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.success || data.status === "ok") {
        resultado.textContent = "Like enviado com sucesso!";
        resultado.style.color = "#00ffae";
      } else {
        resultado.textContent = "A API respondeu, mas não confirmou o envio.";
        resultado.style.color = "orange";
      }
    })
    .catch(error => {
      console.error("Erro:", error);
      resultado.textContent = "Erro ao enviar o like. Verifique se a API está online.";
      resultado.style.color = "red";
    });
}
