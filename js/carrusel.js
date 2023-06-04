// Array
const imagenes = [
    "../img/imagencarru1.jpg",
    "../img/imagencarru2.jpg",
    "../img/imagencarru3.jpg"
  ];
  
  // Obtener elementos
  const imagenCarrusel = document.getElementById("imagen-carrusel");
  const btnAnterior = document.getElementById("btn-anterior");
  const btnSiguiente = document.getElementById("btn-siguiente");
  let indexAct = 0;
  
  // Función para mostrar la imagen actual
  function mostrarImagenActual() {
    imagenCarrusel.src = imagenes[indexAct];
  }
  
  // Función para mostrar la imagen anterior
  function mostrarImagenAnterior() {
    indexAct--;
    if (indexAct < 0) {
      indexAct = imagenes.length - 1;
    }
    mostrarImagenActual();
  }
  
  // Función para mostrar la imagen siguiente
  function mostrarImagenSiguiente() {
    indexAct++;
    if (indexAct >= imagenes.length) {
      indexAct = 0;
    }
    mostrarImagenActual();
  }
  
  // Eventos de clic para los botones
  btnAnterior.addEventListener("click", mostrarImagenAnterior);
  btnSiguiente.addEventListener("click", mostrarImagenSiguiente);
  
  // Mostrar la primera imagen al cargar la página
  mostrarImagenActual();
  