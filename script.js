const valorConta = document.querySelector('#valorConta');
const qtdePessoas = document.querySelector('#pessoas');
const valorGorjeta = document.querySelector('.resultadoGorjeta')

const resultadoGorjeta = document.querySelector('.resultadoGorjeta')
const resultadoTotal = document.querySelector('.resultadoTotal')
const botaoResetar = document.querySelector('.resetar');
const botaoPorcentagem = document.querySelectorAll('.porcentualBtn');


valorConta.addEventListener('input', calcularConta)
qtdePessoas.addEventListener('input', calcularConta)
qtdePessoas.addEventListener("keyup", erro)

botaoResetar.addEventListener('click', resetar);


 function calcularConta(){
  let conta = +valorConta.value
  let pessoas = +qtdePessoas.value
  let porcentagem = document.querySelector('.ativo')
  let valorPorcentagem = +porcentagem.innerHTML.replace('%', '') / 100
 
  let valorPessoa = [conta + (conta * valorPorcentagem)]/ pessoas
  let gorjetaPessoa = (conta * valorPorcentagem) / pessoas

  
  if(conta && porcentagem && pessoas){
    valorPessoa = valorPessoa.toFixed(2);
    gorjetaPessoa = gorjetaPessoa.toFixed(2);
 
    resultadoGorjeta.innerText = 'R$ '+ gorjetaPessoa.replace('.', ',');
    resultadoTotal.innerText = 'R$ ' + valorPessoa.replace('.', ',');
  }


}

function erro(event){
  let pessoas = +qtdePessoas.value

  const span = document.createElement('span')
  span.classList.add('erro')
  span.innerText = 'Não pode ser 0'
  
  if(event.key === '0' && pessoas === 0){
    qtdePessoas.insertAdjacentElement('afterEnd', span)
  } 
}

function addClass(){
  botaoPorcentagem.forEach((botao) => {
    botao.classList.remove('ativo');
  })
  this.classList.toggle('ativo');
}
botaoPorcentagem.forEach((botao) => {
  botao.addEventListener('click', addClass);
  botao.addEventListener('click', calcularConta);
})

function resetar(){
  resultadoGorjeta.innerText = 'R$ 0.00';
  resultadoTotal.innerText = 'R$ 0.00' ;
  valorConta.value = '';
  qtdePessoas.value = '';
}
