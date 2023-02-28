const titulos = document.querySelectorAll('.titulos');

titulos.forEach(titulo => {
  titulo.addEventListener('mouseover', () => {
    titulo.style.color = 'red';
    titulo.style.textDecoration = 'underline';
  });
  
  titulo.addEventListener('mouseout', () => {
    titulo.style.color = '';
    titulo.style.textDecoration = '';
  });
});