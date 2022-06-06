function numeroUsuario() {

    fetch("/analise/listar").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("numeroUser");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = "Nenhum resultado encontrado."
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var feed = document.getElementById("numeroUser");
                feed.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var usuarios = resposta[i];
                    // criando e manipulando elementos do HTML via JavaScript

                    console.log("Dados usuarios" + usuarios.numUsuarios);
                    feed.innerHTML = usuarios.numUsuarios;
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });

}

function numeroPostagem() {

    fetch("/analise/listarPost").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("numPost");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = "Nenhum resultado encontrado."
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var feed = document.getElementById("numPost");
                feed.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];
                    // criando e manipulando elementos do HTML via JavaScript

                    console.log("Dados Postagens" + publicacao.numPost);


                    feed.innerHTML = publicacao.numPost;
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });

}

function numeroComentario() {
    fetch("/analise/mediaPost").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("media");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = "Nenhum resultado encontrado."
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var feed = document.getElementById("media");
                feed.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];
                    // criando e manipulando elementos do HTML via JavaScript

                    console.log("Dados Postagens" + publicacao.numComentario);


                    feed.innerHTML = publicacao.numComentario;
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });


}


function usuarioMaxPost() {
    fetch("/analise/maxPost").then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var nome = document.getElementById("postNomeUs");
                var numero = document.getElementById("postPorUser");
                nome.innerHTML = "";
                numero.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];
                    // criando e manipulando elementos do HTML via JavaScript

                    console.log("Dados Postagens" + publicacao.nome +" "+publicacao.MaxPost);


                    nome.innerHTML = publicacao.nome;
                    numero.innerHTML = publicacao.MaxPost;
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });


}

function usuarioMaxComent() {
    fetch("/analise/maxComent").then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var nome = document.getElementById("comentnomeUs");
                var numero = document.getElementById("comentPorUser");
                nome.innerHTML = "";
                numero.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];
                    // criando e manipulando elementos do HTML via JavaScript

                    console.log("Dados Postagens" + publicacao.nome +" "
                    +publicacao.MaxComentario);


                    nome.innerHTML = publicacao.nome;
                    numero.innerHTML = publicacao.MaxComentario;
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });


}



function chamar() {
    numeroUsuario();
    numeroPostagem();
    numeroComentario();
    usuarioMaxPost();
    usuarioMaxComent();
}