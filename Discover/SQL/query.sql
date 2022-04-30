SELECT * FROM aluno
SELECT nome, cpf FROM aluno
SELECT * FROM aluno WHERE nome like '%G%'
SELECT * FROM aluno WHERE nome like 'João Castro'
SELECT * FROM aluno WHERE matricula <> 1
SELECT * FROM aluno WHERE matricula != 1
SELECT * FROM aluno WHERE matricula = 8/4
SELECT * FROM aluno WHERE matricula BETWEEN 1 and 2
SELECT * FROM aluno WHERE matricula NOT BETWEEN 1 and 2
SELECT * FROM aluno WHERE matricula IN(1,2,3)
SELECT * FROM aluno WHERE matricula NOT IN(1,3)
SELECT * FROM aluno WHERE responsavel IS NULL
SELECT * FROM aluno WHERE responsavel IS NOT NULL

INSERT INTO aluno(nome, cpf, responsavel) VALUES('Miguel Brussolo', 123456789, '')
INSERT INTO aluno(nome, cpf ) VALUES('Milla Brussolo', 123654968789)

UPDATE aluno SET responsavel = NULL WHERE responsavel like '%Rahman'

DELETE FROM aluno where nome like '%Brussolo'

SELECT * FROM aluno ORDER BY responsavel
SELECT * FROM aluno ORDER BY responsavel DESC

SELECT * FROM aluno  LIMIT 1

SELECT * FROM aluno LIMIT 1 OFFSET 2

SELECT COUNT(nome) FROM aluno






SELECT * FROM funcionarios JOIN departamentos 
ON departamentos.id_dept = funcionarios.id_departamento

SELECT * FROM funcionarios JOIN departamentos 
ON departamentos.id_dept = funcionarios.id_departamento
WHERE funcionarios.id_departamento = 2

SELECT * FROM funcionarios JOIN departamentos 
ON funcionarios.id_departamento = departamentos.id_dept 
WHERE departamentos.id_dept = 2



SELECT funcionarios.nome, funcionarios.cpf, departamentos.descricao 
FROM funcionarios JOIN departamentos 
ON funcionarios.id_departamento = departamentos.id_dept 

SELECT F.nome, F.cpf, D.descricao 
FROM funcionarios as F JOIN departamentos as D
ON F.id_departamento = D.id_dept 

SELECT F.nome as "Nome/Sobrenome", F.cpf as "CPF", D.descricao as "Departamento"
FROM funcionarios as F JOIN departamentos as D
ON F.id_departamento = D.id_dept 



SELECT * FROM funcionarios 
LEFT OUTER JOIN departamentos 
ON departamentos.id_dept = funcionarios.id_departamento

SELECT * FROM departamentos
LEFT OUTER JOIN funcionarios 
ON departamentos.id_dept = funcionarios.id_departamento




SELECT * FROM funcionarios 
SELECT id_departamento, COUNT(id_departamento) FROM funcionarios GROUP BY id_departamento

SELECT dep.descricao as "Departamento", COUNT(func.id_departamento) as "Qtd. Funcionarios"
FROM departamentos as dep 
LEFT OUTER JOIN funcionarios as func
ON func.id_departamento = dep.id_dept GROUP BY func.id_departamento

SELECT dep.descricao as "Departamento", COUNT(func.id_departamento) as "Qtd. Funcionarios"
FROM departamentos as dep 
LEFT OUTER JOIN funcionarios as func
ON func.id_departamento = dep.id_dept GROUP BY func.id_departamento
HAVING COUNT(func.id_departamento) >= 2




CREATE TABLE alunos(
	matricula INTEGER PRIMARY KEY AUTOINCREMENT,
	nome TEXT,
  	cpf INTEGER UNIQUE,
  	responsavel TEXT
  	FORING KEY (matricula) REFERENCES aulas(id_alunos)
)


ALTER TABLE alunos RENAME TO aluno
ALTER TABLE aluno RENAME COLUMN matricula TO id_matricula


DROP TABLE aluno