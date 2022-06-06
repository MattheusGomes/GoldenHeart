var verPost = true;

function btFazerPost() {
    if (verPost == true) {
        postagens.style.display = "block";
        btPostagem.innerHTML = "Ocultar";
        verPost = false;
    } else {
        postagens.style.display = "none";
        btPostagem.innerHTML = "Nova Postagem";
        verPost = true;
    }
}

function filtro(filtrar) {

    fetch("/avisos/listar").then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var feed = document.getElementById("feed_container");
                feed.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    if (publicacao.serie == filtrar) {
                        // criando e manipulando elementos do HTML via JavaScript

                        // criando e manipulando elementos do HTML via JavaScript
                        var divPublicacao = document.createElement("div");
                        var spanTitulo = document.createElement("span");
                        var spanNome = document.createElement("span");
                        var divDescricao = document.createElement("div");
                        var divSerie = document.createElement("div");
                        var divAut = document.createElement("div");
                        var divTexto = document.createElement("div");
                        var divComent = document.createElement("div");
                        var divButtons = document.createElement("div");
                        var iptComent = document.createElement("textarea");
                        var btnEnviar = document.createElement("button");



                        console.log("teste id " + publicacao.idPost);
                        console.log("teste nome " + publicacao.nome);
                        console.log("teste desc " + publicacao.descricao);

                        spanTitulo.innerHTML = publicacao.titulo;
                        spanNome.innerHTML = "Postado por: " + publicacao.nome;
                        divDescricao.innerHTML = publicacao.descricao;
                        divSerie.innerHTML = publicacao.serie;
                        btnEnviar.innerHTML = "Enviar";

                        //coloca uma classe/ id nas divs/span criada
                        divPublicacao.className = "publicacao";
                        spanNome.className = "publicacao-nome";
                        spanTitulo.className = "publicacao-titulo";
                        divDescricao.className = "publicacao-descricao";
                        divSerie.className = "publicacao-serie";
                        divAut.className = "postPor";
                        divTexto.className = "caixaTexto";
                        divComent.className = "Comentarios";
                        iptComent.className = "iptComentario";
                        iptComent.id = "textareaComent";
                        btnEnviar.className = "btComentario";
                        divButtons.className = "divBtComent";
                        btnEnviar.id = "btnComentar";
                        btnEnviar.setAttribute("onclick", `comentar(${publicacao.idPost})`);
                        divPublicacao.setAttribute("onclick", `expandir(${publicacao.idPost})`)


                        divPublicacao.appendChild(divAut);
                        divAut.appendChild(spanNome);
                        divAut.appendChild(divSerie);
                        divPublicacao.appendChild(spanTitulo);
                        divPublicacao.appendChild(divTexto);
                        divTexto.appendChild(divDescricao);
                        divPublicacao.appendChild(divButtons);
                        divPublicacao.appendChild(divComent);
                        feed.appendChild(divPublicacao);

                    }

                }
                if (feed.innerHTML == "") {
                    alert("O resultado do filtro não encontrado");
                    atualizarFeed();
                }


            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });
}


function atualizarFeed() {

    fetch("/avisos/listar").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("feed_container");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = "Nenhum resultado encontrado."
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var feed = document.getElementById("feed_container");
                feed.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];


                    // criando e manipulando elementos do HTML via JavaScript
                    var divPublicacao = document.createElement("div");
                    var spanTitulo = document.createElement("span");
                    var spanNome = document.createElement("span");
                    var divDescricao = document.createElement("div");
                    var divSerie = document.createElement("div");
                    var divAut = document.createElement("div");
                    var divTexto = document.createElement("div");
                    var divComent = document.createElement("div");
                    var divButtons = document.createElement("div");
                    var iptComent = document.createElement("textarea");
                    var btnEnviar = document.createElement("button");



                    console.log("teste id " + publicacao.idPost);

                    spanTitulo.innerHTML = publicacao.titulo;
                    spanNome.innerHTML = "Postado por: " + publicacao.nome;
                    divDescricao.innerHTML = publicacao.descricao;
                    divSerie.innerHTML = publicacao.serie;
                    btnEnviar.innerHTML = "Enviar";

                    //coloca uma classe/ id nas divs/span criada
                    divPublicacao.className = "publicacao";
                    spanNome.className = "publicacao-nome";
                    spanTitulo.className = "publicacao-titulo";
                    divDescricao.className = "publicacao-descricao";
                    divSerie.className = "publicacao-serie";
                    divAut.className = "postPor";
                    divTexto.className = "caixaTexto";
                    divComent.className = "Comentarios";
                    iptComent.className = "iptComentario";
                    iptComent.id = "textareaComent";
                    btnEnviar.className = "btComentario";
                    divButtons.className = "divBtComent";
                    btnEnviar.id = "btnComentar";
                    btnEnviar.setAttribute("onclick", `comentar(${publicacao.idPost})`);
                    divPublicacao.setAttribute("onclick", `expandir(${publicacao.idPost})`)


                    divPublicacao.appendChild(divAut);
                    divAut.appendChild(spanNome);
                    divAut.appendChild(divSerie);
                    divPublicacao.appendChild(spanTitulo);
                    divPublicacao.appendChild(divTexto);
                    divTexto.appendChild(divDescricao);
                    divPublicacao.appendChild(divButtons);
                    divPublicacao.appendChild(divComent);
                    feed.appendChild(divPublicacao);
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });

}

function publicar() {
    var idUsuario = sessionStorage.ID_USUARIO;

    var serie = Number(selectSerie.value);
    let serieTime;

    if (serie == 1) {
        serieTime = 'Denver Nuggets';
    } else if (serie == 2) {
        serieTime = 'Memphis Grizzlies';
    } else if (serie == 3) {
        serieTime = 'Dallas Mavericks';
    } else if (serie == 4) {
        serieTime = 'Boston Celtics';
    } else {
  
        swal({
            title: "Erro",
            text: "Selecione uma serie",
            icon: "error",
            buttons: false
        });
        return false;
    }

        if(titulo.value == "" || descricao.value == ""){
            swal({
                title: "Erro",
                text: "Preencha todos os campos",
                icon: "error",
                buttons: false
            });
            return false;
        }

    // objeto Json que esta recebendo os valores do campo de formulario
    var corpo = {
        titulo: titulo.value,
        descricao: descricao.value,
        serie: serieTime
    }

    fetch(`/avisos/publicar/${idUsuario}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            swal({
                title: "Sucesso",
                icon: "success",
                text: "Post realizado com sucesso pelo usuario",
                buttons: false
            });

            setTimeout(function () {
                window.location = "home.html";
            }, 1000); // apenas para exibir o loading

        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });

    return false;

}



function limparFormulario() {
    document.getElementById("form_postagem").reset();
}


function expandir(idPostagem) {

    sessionStorage.ver_post = idPostagem;
    window.location = "post.html";

}

function expandirPostagem() {

    var varificaPost = sessionStorage.ver_post;

    fetch("/avisos/listar").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("expandirTituloPost");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = "Nenhum resultado encontrado."
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var feed = document.getElementById("feed_container");

                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];


                    console.log("Cheguei no expandir postagem" + publicacao.idPost);

                    if (varificaPost == publicacao.idPost) {

                        expandirTituloPost.innerHTML = publicacao.titulo;
                        expandirUser.innerHTML = "Postado por: " + publicacao.nome;
                        expandirTextoPost.innerHTML = publicacao.descricao;
                        expandirSerie.innerHTML = publicacao.serie;

                    } else {
                        console.log("Erro em colocar as postagens");
                    }
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });

}

function voltar() {
    window.location = "home.html";
}


function comentar(idPost) {
    var idUsuario = sessionStorage.ID_USUARIO;
    coment = document.getElementById("textareaComent").value;

    if(coment == ""){
        
        swal({
            title: "Erro",
            icon: "error",
            text: "Preencha todos os campos",
            buttons: false
        });
        return false;
    }

    console.log("enviar id da postagem " + idPost);
    console.log("enviar id do usuario " + idUsuario);
    console.log("teste comentario " + coment);

    // objeto Json que esta recebendo os valores do campo de formulario
    var corpo = {
        comentario: coment,
        postId: idPost,
        userId: idUsuario
    }

    fetch(`/avisos/fazerComentario`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.location = "post.html";
            /*    limparFormulario(); */

        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });

    return false;

}


function autalizarComentario(idPost) {

    fetch("/avisos/listarComentario").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("feed_container");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = "Nenhum resultado encontrado."
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var feed = document.getElementById("expandirDivComent");
                feed.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    if (idPost == publicacao.fkPost) {

                        // criando e manipulando elementos do HTML via JavaScript


                        var spanNomeUsuario = document.createElement("span");
                        var divComentarioFeito = document.createElement("div");
                        var divPubli = document.createElement("div");


                        console.log("verificar se esta pegando o id da publi" + publicacao.idPost);

                        spanNomeUsuario.innerHTML = publicacao.nomeUsuario;
                        divComentarioFeito.innerHTML = publicacao.coment;

                        //coloca uma classe/ id nas divs/span criada

                        spanNomeUsuario.className = "nomeComentario";
                        divComentarioFeito.className = "textoComentario";
                        divPubli.className = "conterComentario"
                        /*    btnEnviar.id = "btnComentar"; */


                        divPubli.appendChild(spanNomeUsuario);
                        divPubli.appendChild(divComentarioFeito);
                        feed.appendChild(divPubli);
                    }

                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });

}