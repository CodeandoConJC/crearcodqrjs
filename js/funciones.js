//Convertir el texto a código QR pasandole opciones para la imagen
function generar_qr() {
  const inputText = document.getElementById('aqr')
  const div_error = document.getElementById('msg_error')

  if (inputText.value != "") {
    var qrcode = new QRCode("cont_qr", {
      text: inputText.value,
      width: 350,
      height: 350,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    })

    div_error.innerHTML = "" //Limpiar el div en caso de un error ant

  } else {
    div_error.innerHTML = "Debe capturar un texto para generar el QR."
  }
}

//Convertir el texto con las opciones por defecto de la librería
function convertir_sin_opc() {
  new QRCode(document.getElementById('cont_qr'), document.getElementById('aqr').value)
}

function guardar_QR(){
  //Aquí se seleccionar el elemento canvas contenido en div cont_qr
  const qelem = document.querySelector('#cont_qr canvas')
  const dlink = document.getElementById('lnk_desc')

  if (qelem) { //Verificar si existe el elemento
    var imagen = qelem.toDataURL("image/png").replace("image/png", "image/octet-stream")

    dlink.setAttribute('href', imagen);
    dlink.setAttribute('download', 'miQRCODE.png');

    //Se ejecutar la instrucción como si el usuario diera un clic.
    dlink.click();
  } else { //No existe el elemento o se devolvio null
    alert("No existe nada a descargar. Primero debe generar una imagen de QR.")
  }
}

//Función para limpiar los elementos
function limpiar() {
  document.getElementById('aqr').value = ""
  document.getElementById('msg_error').innerHTML = ""
  document.getElementById('cont_qr').innerHTML = ""
}
