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
                        var divPublicacao = document.createElement("div");

                        var spanTitulo = document.createElement("span");
                        var spanNome = document.createElement("span");
                        var divDescricao = document.createElement("div");
                        var divSerie = document.createElement("div");
                        var divButtons = document.createElement("div");

                        spanTitulo.innerHTML = "Título: <b>" + publicacao.titulo + "</b>";
                        spanNome.innerHTML = "Autor: <b>" + publicacao.nome + "</b>";
                        divDescricao.innerHTML = "Descrição: <b>" + publicacao.descricao + "</b>";
                        divSerie.innerHTML = "Serie: <b>" + publicacao.serie + "</b>";

                        divPublicacao.className = "publicacao";
                        spanTitulo.id = "inputNumero" + publicacao.idAviso;
                        spanNome.className = "publicacao-nome";
                        spanTitulo.className = "publicacao-titulo";
                        divDescricao.className = "publicacao-descricao";
                        divSerie.className = "publicacao-descricao";

                        divPublicacao.appendChild(spanNome);
                        divPublicacao.appendChild(spanTitulo);
                        divPublicacao.appendChild(divDescricao);
                        divPublicacao.appendChild(divSerie);
                        divPublicacao.appendChild(divButtons);
                        /*    divButtons.appendChild(btnEditar);
                           divButtons.appendChild(btnDeletar); */
                        feed.appendChild(divPublicacao);

                    }

                }
                if (feed.innerHTML == "") {
                    alert("O resultado do filtro não encontrado");
                    atualizarFeed();
                }


                finalizarAguardar();
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
        finalizarAguardar();
    });
}




function atualizarFeed() {

    //aguardar();
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
                    var divButtons = document.createElement("div");
                    /*  var btnEditar = document.createElement("button");
                     var btnDeletar = document.createElement("button"); */


                    spanTitulo.innerHTML =  publicacao.titulo;
                    spanNome.innerHTML = "Postado por: " + publicacao.nome ;
                    divDescricao.innerHTML = publicacao.descricao;
                    divSerie.innerHTML =  publicacao.serie;
                    /*  btnEditar.innerHTML = "Editar";
                     btnDeletar.innerHTML = "Deletar"; */

                    //coloca uma classe/ id nas divs/span criada
                    divPublicacao.className = "publicacao";
                    spanNome.className = "publicacao-nome";
                    spanTitulo.className = "publicacao-titulo";
                    divDescricao.className = "publicacao-descricao";
                    divSerie.className = "publicacao-serie";
                    divAut.className = "postPor"
                    divTexto.className = "caixaTexto"
                    /*   divButtons.className = "div-buttons"

                    btnEditar.className = "publicacao-btn-editar"
                    btnEditar.id = "btnEditar" + publicacao.idAviso;
                    btnEditar.setAttribute("onclick", `editar(${publicacao.idAviso})`);

                    btnDeletar.className = "publicacao-btn-editar"
                    btnDeletar.id = "btnDeletar" + publicacao.idAviso;
                    btnDeletar.setAttribute("onclick", `deletar(${publicacao.idAviso})`);
*/
                    divPublicacao.appendChild(divAut);
                    divAut.appendChild(spanNome);
                    divAut.appendChild(divSerie);
                    divPublicacao.appendChild(spanTitulo);
                    divPublicacao.appendChild(divTexto);
                    divTexto.appendChild(divDescricao);
                    
                    /*   divPublicacao.appendChild(divButtons); */
                    /*    divButtons.appendChild(btnEditar);
                       divButtons.appendChild(btnDeletar); */
                    feed.appendChild(divPublicacao);
                }

                finalizarAguardar();
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
        finalizarAguardar();
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
        serieTime = 'Final';
    } else {
        alert("Selecione uma serie");
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
            window.alert("Post realizado com sucesso pelo usuario de ID: " + idUsuario + "!");
            window.location = "home.html";
            /*    limparFormulario(); */
            finalizarAguardar();
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;

}


function testar() {
    aguardar();

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_postagem")));

    var divResultado = document.getElementById("div_feed");

    divResultado.appendChild(document.createTextNode(formulario.get("descricao")));
    divResultado.innerHTML = formulario.get("descricao");

    finalizarAguardar();

    return false;
}


function limparFormulario() {
    document.getElementById("form_postagem").reset();
}