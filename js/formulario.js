function validarFormulario() {
    var campoNombre = document.getElementById("name");
    var errorNombre = document.getElementById("name-error");
    var campoEmail = document.getElementById("email");
    var errorEmail = document.getElementById("email-error");
    var campoMensaje = document.getElementById("message");
    var errorMensaje = document.getElementById("message-error");
  
    var valorNombre = campoNombre.value.trim();
    var valorEmail = campoEmail.value.trim();
    var valorMensaje = campoMensaje.value.trim();
  
    // Verificar campo de nombre
    if (valorNombre === "") {
      campoNombre.classList.add("error");
      errorNombre.textContent = "Este campo es obligatorio";
      return false;
    } else if (!valorNombre.match(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/)) {
      campoNombre.classList.add("error");
      errorNombre.textContent = "Por favor, ingresa solo letras";
      return false;
    } else if (valorNombre.length > 30) {
      campoNombre.classList.add("error");
      errorNombre.textContent = "Por favor, ingresa máximo 30 caracteres";
      return false;
    } else {
      campoNombre.classList.remove("error");
      errorNombre.textContent = "";
    }
  
    // Verificar campo de correo electrónico
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (valorEmail === "") {
      campoEmail.classList.add("error");
      errorEmail.textContent = "Este campo es obligatorio";
      return false;
    } else if (!emailRegex.test(valorEmail)) {
      campoEmail.classList.add("error");
      errorEmail.textContent = "Por favor, ingresa un correo electrónico válido";
      return false;
    } else {
      campoEmail.classList.remove("error");
      errorEmail.textContent = "";
    }
  
    // Verificar campo de mensaje
    if (valorMensaje === "") {
      campoMensaje.classList.add("error");
      errorMensaje.textContent = "Este campo es obligatorio";
      return false;
    } else if (/[^\w\s]/.test(valorMensaje)) {
      campoMensaje.classList.add("error");
      errorMensaje.textContent = "No se admiten caracteres especiales";
      return false;
    } else {
      campoMensaje.classList.remove("error");
      errorMensaje.textContent = "";
    }
  
    mostrarDatos();
    return false;
}  
  
function mostrarDatos() {
    var valorNombre = document.getElementById("name").value;
    var valorEmail = document.getElementById("email").value;
    var valorMensaje = document.getElementById("message").value;
  
    var contenedorDatos = document.getElementById("datos-container");
    contenedorDatos.innerHTML = '';
  
    var parrafoNombre = document.createElement("p");
    parrafoNombre.textContent = "Nombre: " + valorNombre;
    parrafoNombre.style.fontSize = "20px";
    parrafoNombre.style.color = "#e4dad1";
    parrafoNombre.style.fontFamily = "Bebas Neue, sans-serif";
    contenedorDatos.appendChild(parrafoNombre);
  
    var parrafoEmail = document.createElement("p");
    parrafoEmail.textContent = "Correo electrónico: " + valorEmail;
    parrafoEmail.style.fontSize = "20px";
    parrafoEmail.style.color = "#e4dad1";
    parrafoEmail.style.fontFamily = "Bebas Neue, sans-serif";
    contenedorDatos.appendChild(parrafoEmail);
  
    var parrafoMensaje = document.createElement("p");
    parrafoMensaje.textContent = "Mensaje: " + valorMensaje;
    parrafoMensaje.style.fontSize = "20px";
    parrafoMensaje.style.color = "#e4dad1";
    parrafoMensaje.style.fontFamily = "Bebas Neue, sans-serif";
    contenedorDatos.appendChild(parrafoMensaje);
  
    contenedorDatos.style.display = "block";
  
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
  
  
  


  
  
  
  
  
  
  
  
  
  
  