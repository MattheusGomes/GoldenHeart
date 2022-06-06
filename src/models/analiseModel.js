var database = require("../database/config");

function listarUser() {
    console.log("ACESSEI O Analise  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  
    var instrucao = `
        SELECT COUNT(idUsuario) AS numUsuarios FROM tbUsuario; `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPost() {
    console.log("ACESSEI O Analise  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  
    var instrucao = `        
        SELECT COUNT(idPostagem) AS numPost FROM tbPostagem; `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mediaPost() {
    console.log("ACESSEI O Analise  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  
    var instrucao = `        
        
      
        SELECT COUNT(idComentario) AS numComentario FROM tbcomentario; `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function maxPost() {
    console.log("ACESSEI O Analise  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  
    var instrucao = `SELECT nome,count(fkUsuario) AS MaxPost FROM tbUsuario JOIN tbPostagem ON fkUsuario = idUsuario where nome = 'jack';
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function maxComent() {
    console.log("ACESSEI O Analise  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  
  
        var instrucao = `
        SELECT nome,count(idComentario) AS 'MaxComentario' FROM tbUsuario JOIN tbComentario
         ON fkUsuario = idUsuario where nome = 'Ally';
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




module.exports = {
    listarUser,
    listarPost,
    mediaPost,
    maxPost,
    maxComent,
}