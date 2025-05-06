const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
  button.addEventListener('click', function(){
    const atual = document.querySelector('.ativo');
    
    atual.classList.remove('ativo');
    document.getElementById(('passo-' + this.getAttribute('data-proximo'))).classList.add('ativo');
    
    
  })
})

