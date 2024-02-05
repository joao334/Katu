const usuarios = [
    {
        login: "Yuni",
        pass: "Yuni"
    },
    {
        login: "Isadora",
        pass: "Isadora"
    },
    {
        login: "Nathaly",
        pass: "Nathaly"
    },
    {
        login: "Felipe",
        pass: "Felipe"
    },
    {
        login: "Maria",
        pass: "Maria"
    },
    {
        login: "Ana",
        pass: "Ana"
    },
    {
        login: "Anna",
        pass: "Anna"
    },
    {
        login: "Vitoria",
        pass: "Vitoria"
    },
    {
        login: "Davi",
        pass: "Davi"
    },
    {
        login: "Andy",
        pass: "Andy"
    },
    {
        login: "Admin",
        pass: "Admin"
    },
    {
        login: "João",
        pass: "João"
    },
]

let botao = document.getElementById('btnlogar')

botao.addEventListener('click', function logar(){

    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false

    for(let i in usuarios){

        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
          validaLogin = true
            break
               }
           }

if(validaLogin == true){
    location.href = 'index.html' 
   }else{
    alert('Usuário ou Senha Incorretos')
}

})


