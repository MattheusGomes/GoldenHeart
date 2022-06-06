CREATE DATABASE bdGoldenHeart;


USE bdGoldenHeart;

CREATE TABLE tbUsuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT
	,nome VARCHAR(100)
	,email VARCHAR(100) UNIQUE
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
	VALUES('Pedro', 'pedro@gmail.com', '12345678')
		,('Jack', 'jack@gmail.com', '12345678')
		,('Matt', 'matheus@gmail.com', '12345678')
		,('Juli', 'juliano@gmail.com', '12345678')
		,('Ally', 'aline@gmail.com', '12345678');

INSERT INTO tbPostagem (titulo, descricao, serie, fkUsuario) VALUES ('3 periodo do jogo 3', 'O  time do Nuggets luta bastante contra as movimentações
 do Warriors para conseguir contestar os arremessos, com exceção dos dois primeiros jogos foi algo que eles melhoraram 
 bastante durante a série.','Denver Nuggets','1');

 INSERT INTO tbPostagem (titulo, descricao, serie, fkUsuario) VALUES ('Titulares do jogo 5', 'O Golden State Warriors 
 pode ir hoje com força máxima com os cincos titulares contra o Nuggets no jogo 5: Stephen Curry de volta, 
 com Jordan Poole, Klay Thompson, Andrew Wiggins e Draymond Green. Decisão final a ser tomada hoje.','Denver Nuggets','1');

 INSERT INTO tbPostagem (titulo, descricao, serie, fkUsuario) VALUES ('O que eu achei do primeiro jogo', 
 'O Warriors concentrou suas atenções no garrafão e deu uma atenção para os box outs para tentar limitar os rebotes ofensivos de Denver. 
 O Nuggets aproveitou para conseguir alguns arremessos livres do perímetro mas falhou na conversão','Denver Nuggets','5');

 INSERT INTO tbPostagem (titulo, descricao, serie, fkUsuario) VALUES (' jogo 1', 'Memphis Grizzlies que dominou a temporada regular 
	nos rebotes está sofrendo horrores com isso nesse jogo contra o Warriors, isso é um bom sinal para gente.','Memphis Grizzlies','2');  

      INSERT INTO tbPostagem (titulo, descricao, serie, fkUsuario) VALUES ('ultimo quarto do jogo 2', 'Os Warriors acertaram 5 de 7 em seu passe para 13 pontos. 
      Ele também manteve os Grizzlies em 3 de 15 arremessos.','Memphis Grizzlies','2');
      
        INSERT INTO tbPostagem (titulo, descricao, serie, fkUsuario) VALUES ('Inacreditável esse time', 'Estamos perdendo por quase 50 pontos para um Memphis Grizzlies sem Ja Morant. #GoldBlooded
	','Memphis Grizzlies','2');

     INSERT INTO tbPostagem (titulo, descricao, serie, fkUsuario) VALUES ('Seria incrivel', '
	Só queria que o Warriors acabasse com o Grizzlies e tocasse "whoop that trick" no Chase Center...','Memphis Grizzlies','2');

	INSERT INTO tbPostagem (titulo, descricao, serie, fkUsuario) VALUES ('Finais de conferenciaaaaaa', 'O Golden State Warriors elimina o 
    Memphis Grizzlies e vai para a final da conferência Oeste!','Memphis Grizzlies','2');

	INSERT INTO tbPostagem (titulo, descricao, serie, fkUsuario) VALUES ('1° jogo hoje', 'cade aqle meme de quem vai torcer pro warriors(ngm) e quem vai torcer pro mavericks(todas forças malignas do planeta) ein','Dallas Mavericks','4');
  
	INSERT INTO tbPostagem (titulo, descricao, serie, fkUsuario) VALUES ('Arbitros do jogo 2 de Warriors vs Mavericks', 
     'Zach Zarba, David Guthrie, Sean Wright.Warriors está 0-2 nos Playoffs quando esse trio apita o jogo.','Dallas Mavericks','4');

	INSERT INTO tbPostagem (titulo, descricao, serie, fkUsuario) VALUES ('Finaiiis', 'O GOLDEN STATE WARRIORS ESTÁ A UMA VITÓRIA DAS FINAIS DA NBA! 3-0
    PRA CIMA DO DALLAS MAVERICKS!','Dallas Mavericks','4');

    INSERT INTO tbPostagem (titulo, descricao, serie, fkUsuario) VALUES ('Devemos ir com tudo hoje', 'Não acho 
	que o Celtics faça o tipo de equipe que busca apenas uma quebra de mando para fazer o dever de casa. 
	Eles vêm tão fortes quanto quinta passada.','Boston Celtics','5');

	INSERT INTO tbComentario(idComentario,comentario, fkUsuario, fkPost)
		VALUES(NULL, 'É muito importante tomar cuidado no próximo jogo, temos que acabar com eles no proximo jogo', 5, 11)
			,(NULL, 'É muito importante vencer hoje', 5, 10 )
			,(NULL, 'Time ruiiiiiiiiinnnnnnnn', 5, 9 )
			,(NULL, 'Só mais duas series', 5, 10)
			,(NULL, 'não podemos falhar hoje.', 1, 5)
			,(NULL, 'Letsss goooooooooooooooo', 2, 4);

SELECT * FROM tbUsuario;
SELECT * FROM tbPostagem;
SELECT * FROM tbComentario;

SELECT COUNT(idUsuario) AS numUsuarios FROM tbUsuario;
SELECT COUNT(idPostagem) AS numPost FROM tbPostagem;
SELECT COUNT(idComentario) AS numComentario FROM tbcomentario;

SELECT nome, max(fkUsuario) AS 'Max Post' FROM tbUsuario JOIN tbPostagem ON fkUsuario = idUsuario;
SELECT nome,count(fkUsuario) FROM tbUsuario JOIN tbPostagem ON fkUsuario = idUsuario where nome = 'jack';
SELECT nome,count(idComentario) AS 'MaxComentario' FROM tbUsuario JOIN tbComentario ON fkUsuario = idUsuario where nome = 'Ally';

SELECT nome, MAX(idComentario) AS 'MaxComentario' FROM tbUsuario JOIN tbComentario ON fkUsuario = idUsuario;