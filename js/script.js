document.getElementById("button").addEventListener("click", validaFormulario)

function validaFormulario () {
  if (document.getElementById("nome").value != "" && document.getElementById("email").value != ""  && document.getElementById("number").value != ""){
    alert("Pronto! Você receberá as informações por email!")
  }else{
    alert("Por favor, preencha os campos de nome, e-mail e número!")
  }
}
