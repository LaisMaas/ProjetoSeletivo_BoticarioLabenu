function validarEmail(){
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');
    
    if(email.checkValidity()){
      alert(`O email: ${email.value} foi enviado.`);
      alert(`Seja muito bem vindo!!!`);
    } else {
        error.innerHTML = "Email invalido"; 
    }
     
  }
    function redefinirMsg(){
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "Email invalido"){
      error.innerHTML = "";
    }
  } 