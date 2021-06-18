
//De acordo com a suite escolhida o hospede já tem marcados as refeições
var suiteEscolhida = [document.forms[0].elements[0], document.forms[0].elements[1], document.forms[0].elements[2]];

for (var i=[0];i < suiteEscolhida.length;i++){
    var almoco = document.forms[0].elements[11]
    var janta = document.forms[0].elements[12]
    almoco.checked = false;
    janta.checked = false;

    if(suiteEscolhida){
       almoco.checked = true;
       janta.checked = true;
    }
     if(suiteEscolhida[1].checked){
       almoco.checked = true;
     }
}

//Nome Completo
nome = document.getElementById('nome');

function validaNome() {
    var expNome = /^([^0-9]){3,50}$/g;
    var nomeVerificado = expNome.exec(nome.value);
    var msgNome='';
    if (!nomeVerificado){
        msgNome = 'O nome precisa ser completo e sem Números';
    }
    nome.setCustomValidity(msgNome);
}


//E-mail
email = document.querySelector('#email');
email.add

//Tratando do CPF



//Data de Nascimento - Uma outra forma de declarar eventos, utilizando Arrow Functions



//Telefone



//Senha



//Mostra Senha


//Termos de Privacidade


//Botão de Envio sem termo exibe caixa de alerta
