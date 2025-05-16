function enviarLike() {
  const uid = document.getElementById('uid').value;
  const resultado = document.getElementById('resultado');

  if (!uid) {
    resultado.textContent = 'Digite um UID válido.';
    return;
  }

  resultado.textContent = 'Enviando like...';

  fetch(`http://wings.primaryhost.shop:2464/like?uid=${uid}`)
    .then(res => res.text())
    .then(data => {
      resultado.textContent = `Resposta: ${data}`;
    })
    .catch(err => {
      resultado.textContent = 'Erro ao enviar like.';
      console.error(err);
    });
}