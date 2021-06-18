
//De acordo com a suite escolhida o hospede já tem marcados as refeições
var suiteEscolhida = [document.forms[0].elements[0], document.forms[0].elements[1], document.forms[0].elements[2]];

for (var i = [0]; i < suiteEscolhida.length; i++) {
    var almoco = document.forms[0].elements[11]
    var janta = document.forms[0].elements[12]
    almoco.checked = false;
    janta.checked = false;

    if (suiteEscolhida) {
        almoco.checked = true;
        janta.checked = true;
    }
    if (suiteEscolhida[1].checked) {
        almoco.checked = true;
    }
}
//Nome Completo
nome = document.getElementById('nome');

function validaNome() {
    var expNome = /^([^0-9]){3,50}$/g;
    var nomeVerificado = expNome.exec(nome.value);
    var msgNome = '';
    if (!nomeVerificado) {
        msgNome = 'O nome precisa ser completo e sem números';
    }
    nome.setCustomValidity(msgNome);
}
//E-mail
email = document.querySelector('#email');
email.addEventListener('blur', validaEmail(), false,);
function validaEmail() {
    var expEmail = /^([\w_.]*)@([\w_.]*)\.([a-z.]){3,6}$/g;
    var emailVerificado = expEmail.exec(email.value);
    var msgEmail = '';


    if (!emailVerificado) {
        msgEmail = 'Esse formato de Email precisa ser valido';
    }
    email.setCustomValidity(msgEmail);
}
//Tratando do CPF
cpf = document.querySelector('#cpf');
cpf.addEventListener('blur', (eventoLegal) => {
    verificaCpf(eventoLegal.target);
})
function verificaCpf(input) {
    var  expCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/g;
    var  cpfVerificado = expCpf.exec(input.value);
    var msgCPF = '';
    if(!cpfVerificado){
        msgCPF = 'Digite apenas Numeros'

    }
    input.setCustomValidity(msgCPF);
    formataCpf(input.value);

    function formataCpf(valorCpf, cpfExp){
        var cpfFormatado = valorCpf.replace(cpfExp,function(vregex,p1,p2,p3,p4){
            return p1 + '.'+ p2 + '.' + p3 + '.' + p4;
        })
        return cpfFormatado;
    }
}




//Data de Nascimento - Uma outra forma de declarar eventos, utilizando Arrow Functions



//Telefone



//Senha



//Mostra Senha


//Termos de Privacidade


//Botão de Envio sem termo exibe caixa de alerta
