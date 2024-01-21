function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}

function ActiveGerarQrCode() {
  document.querySelector('#lista-links').style.display = 'none';
  document.querySelector('#gerarqrcode').style.display = 'block';
}

function voltarGerarQrCode() {
  document.querySelector('#lista-links').style.display = 'flex';
  document.querySelector('#gerarqrcode').style.display = 'none';

}

function gerarQrCode() {

  let texto = document.querySelector('#link-qrcode').value
  var qr = qrcode(4, 'M');
  qr.addData(texto);
  qr.make();

  // Obtém o elemento HTML onde o QR code será exibido
  var elementoQRCode = document.getElementById('qrcode');

  // Gera e exibe o QR code no elemento
  elementoQRCode.innerHTML = qr.createImgTag();
}