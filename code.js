const formulario = document.getElementById("formulario")
const inputText = document.getElementById("inputText")
const img = document.getElementById("imagemQRCode")

formulario.addEventListener("submit",function(event){
  event.preventDefault()
  img.src = "http://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + imputText.value
})
