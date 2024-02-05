const usuarios = [
    {
        login: "Victor",
        pass: "Victor"
    },
    {
        login: "Isadora",
        pass: "Isadora"
    },
    {
        login: "Admin",
        pass: "Admin"
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


