const valorConta = document.querySelector('#valorConta');
const qtdePessoas = document.querySelector('#pessoas');
const valorGorjeta = document.querySelector('.resultadoGorjeta')

const resultadoGorjeta = document.querySelector('.resultadoGorjeta')
const resultadoTotal = document.querySelector('.resultadoTotal')

function calcularConta(){
  let conta = +valorConta.value
  let pessoas = +qtdePessoas.value
  let porcentagem = document.querySelector('.ativo')
  let valorPorcentagem = +porcentagem.innerHTML.replace('%', '') / 100
  
  let valorPessoa = [conta + (conta * valorPorcentagem)]/ pessoas
  let gorjetaPessoa = (conta * valorPorcentagem) / pessoas

  if(pessoas === 0){
    ativarErro()
  }


  if(conta && porcentagem){
    valorPessoa = valorPessoa.toFixed(2);
    gorjetaPessoa = gorjetaPessoa.toFixed(2);
  
    resultadoGorjeta.innerText = 'R$ '+ gorjetaPessoa.replace('.', ',');
    resultadoTotal.innerText = 'R$ ' + valorPessoa.replace('.', ',');
  }


}

valorConta.addEventListener('input', calcularConta)
qtdePessoas.addEventListener('input', calcularConta)


function ativarErro(){
  const erro = document.querySelector('.erro')
  console.log(erro)
}



const botaoPorcentagem = document.querySelectorAll('.porcentualBtn');
function addClass(){
  botaoPorcentagem.forEach((botao) => {
    botao.classList.remove('ativo');
  })
  this.classList.toggle('ativo');
}
botaoPorcentagem.forEach((botao) => {
  botao.addEventListener('click', addClass);
})

const botaoResetar = document.querySelector('.resetar');
botaoResetar.addEventListener('click', resetar);
function resetar(){
  resultadoGorjeta.innerText = 'R$ 0.00'
  resultadoTotal.innerText = 'R$ 0.00' 
  valorConta.value = ''
  qtdePessoas.value = ''
}
