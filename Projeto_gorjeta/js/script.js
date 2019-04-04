window.onload = function(){
  disabledNUD()
 
};

function disabledNUD(){
 document.querySelector('#check').checked = true;

  if(document.querySelector('#check').checked){
    document.querySelector('#qntPessoas').disabled = false;
    return true;
 }
}
function enabledNUD(){
  if(!document.querySelector('#check').checked){
    document.querySelector('#qntPessoas').disabled = true;
    return true
  }
  else{
    disabledNUD();
  }
}
//criar variáveis ao clicar no botão calcular
function setValues(){
  var txtValor = document.querySelector('div#valor input').value;

  var strAtendente = document.querySelector('div#atendente select').value;

  var nvServico = document.querySelector('div#nvServico select').value;

  var intQntPessoas = document.querySelector('div#Divisao input').value; 


//validar preenchimento
  var strMensagemErro = '';
  //se input valor está vazio ou é zero
  if(document.querySelector('div#valor input').value == '' ||document.querySelector('div#valor input').value == 0){ 
    strMensagemErro += '  Preencha o campo valor. \n';
  }
  //se input valor é menor que zero
  if(document.querySelector('div#valor input').value < 0){
    strMensagemErro += '  Valor deve ser positivo. \n';
  }
  //se tem pessoas para dividir
  if(!document.querySelector('#qntPessoas').disabled){
    //input quantidade de pessoas está vazio ou é zero
    if(document.querySelector('#qntPessoas').value == '' || (document.querySelector('#qntPessoas').value == 0)){
      strMensagemErro += '  Insira a quantidade de pessoas \n';
    }
    //se input quantidade de pessoas é menor que zero
    else if(document.querySelector('#qntPessoas').value < 0){
      strMensagemErro += '  A quantidade de pessoas deve ser positiva \n';
    }

    var gorjeta = (txtValor * nvServico);
    var totalWithTip = (parseFloat(txtValor) + parseFloat(gorjeta));
    console.log(totalWithTip);
    var totalShareWithTip = totalWithTip/intQntPessoas;
    console.log(totalShareWithTip);
    if(document.querySelector('#qntPessoas').value != 0 && gorjeta > 0){
      
      //total Com Gorjeta
      document.querySelector('#moeda1').innerHTML = 'R$';
      document.querySelector('#TotalWithTip').innerHTML = totalWithTip;

      //conta dividida igualmente com gorjeta
      document.querySelector('#moeda2').innerHTML = 'R$';
      document.querySelector('#DivWithTip').innerHTML = totalShareWithTip;
      
      //Total da gorjeta
      document.querySelector('#moeda3').innerHTML = 'R$';
      document.querySelector('#tip').innerHTML = gorjeta; 

      console.log('Gorjeta = '+gorjeta);

    }
  }
  else if(document.querySelector('#qntPessoas').disabled){
    var gorjeta = (txtValor * nvServico);
    var totalWithTip = (parseFloat(txtValor) + parseFloat(gorjeta));
    console.log(totalWithTip);
    var totalShareWithTip = totalWithTip/intQntPessoas;
    console.log(totalShareWithTip);

    if(gorjeta > 0){
      //total Com Gorjeta
      document.querySelector('#moeda1').innerHTML = 'R$';
      document.querySelector('#TotalWithTip').innerHTML = totalWithTip;

      document.querySelector('#DivWithTip').innerHTML = 'Não requisitado';

      //Total da gorjeta
      document.querySelector('#moeda3').innerHTML = 'R$';
      document.querySelector('#tip').innerHTML = gorjeta; 

      console.log('Gorjeta = '+gorjeta);
    }
  }
  if(strMensagemErro != ''){
    alert(strMensagemErro);
  }
}


