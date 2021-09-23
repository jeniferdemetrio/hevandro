function logar(){
    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");

    console.log("Usuário: " + usuario.value+" Senha:" + senha.value);

    if(usuario.value == "amandadttx" && senha.value == "1234"){
        alert("Usuário autenticado!");
    }
    else{
        alert("Usuário ou senha Invalidos!");
    }
}
