var texto = document.createElement('p');
var div = document.querySelector('#app');

var escrito = document.createTextNode('Teste no texto');

texto.appendChild(escrito);
div.appendChild(texto); 


//Requisições AJAX
//estancia a requisição
var xhr = new XMLHttpRequest();

//abre a conexão e faz um requisição GET
xhr.open('GET','https://api.github.com/users/viniciusLira13k');
xhr.send(null);//envia a requisição

//retorna o Json da requisição
//este retorno é assincrono
xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){//se tiver resposta retorna
        console.log(JSON.parse(xhr.responseText));
    }
}