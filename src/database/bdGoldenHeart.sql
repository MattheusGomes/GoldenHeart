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

SELECT * FROM tbUsuario;
SELECT * FROM tbPostagem;
