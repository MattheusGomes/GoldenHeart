CREATE DATABASE bdGoldenHeart;

USE bdGoldenHeart;

CREATE TABLE tbUsuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT
	,nome VARCHAR(100)
	,email VARCHAR(100)
	,senha VARCHAR(20)
);

CREATE TABLE tbPostagem (
	idPostagem INT PRIMARY KEY AUTO_INCREMENT
	,titulo VARCHAR(100)
	,descricao VARCHAR(240)
	,serie VARCHAR(20)
	,fkUsuario INT, FOREIGN KEY (fkUsuario) REFERENCES tbUsuario(idUsuario)
);

CREATE TABLE tbComentario(
	idComentario INT PRIMARY KEY AUTO_INCREMENT
    ,comentario VARCHAR(500) 
	,fkUsuario INT, FOREIGN KEY(fkUsuario) REFERENCES tbUsuario(idUsuario)
	,fkPost INT, FOREIGN KEY(fkPost) REFERENCES tbPostagem(idPostagem)
);


INSERT INTO tbUsuario(nome, email, senha)
	VALUES('Matheus', 'matheus@abc.com', '12345678');

SELECT * FROM tbUsuario;
SELECT * FROM tbPostagem;
