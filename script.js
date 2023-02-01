const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const jobInput= document.querySelector('#job')

form.addEventListener('submit', (event)=>{
    event.preventDefault();

        //verifica se o nome está vazio
    if(nameInput.value === ""){
        alert('Por favor, preencha o seu nome');
        return;
    }

        // Verifica se o e-mail está preenchido e se é valido
    if(emailInput.value === " \\ " || !isEmailValid(emailInput.value)){
        alert('Por favor, preencha o seu email');
        return;
    }

        // Verifica se a senha está preenchida
    if(!validatePassword(passwordInput.value)){
        alert('A senha precisa ser no mínimo 8 dígitos.');
        return;
    }

        // Se todos os campos estiver corretamente preenchidos, envie o form
    form.submit();
});



    //Função que valida e-mail
function isEmailValid(email){

    // cria um regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)){
        return true;
    }

    return false;
}



    // Função que valida a senha
function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        //senha valida
        return true
    }

    //senha invalida
    return false
}

