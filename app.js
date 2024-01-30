document.getElementById('contenedor').addEventListener('click', function() {
    console.log('Manejador del contenedor');
  });
  
  document.getElementById('boton').addEventListener('click', function() {
    console.log('Manejador del botón');
  });

  document.getElementById('miLista').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      console.log('Clic en el elemento:', event.target.textContent);
    }
  });