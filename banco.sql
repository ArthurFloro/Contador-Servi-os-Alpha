create database servicos;

use servicos;

create table secretaria(
id_secretaria int primary key auto_increment,
balcao varchar (255) not null,
telefone varchar (255) not null,
whatsapp varchar (255) not null,
matriculas varchar (255) not null
);

drop table secretaria;
select * from secretaria;

create table cas(
id_cas int primary key auto_increment,
matriculasCas varchar (255) not null,
telefoneCas varchar (255) not null,
whatsappCas varchar (255) not null,
lista varchar (255) not null
);

select * from cas;	

create table biblioteca(
id_bibli int primary key auto_increment,
alunosAtendidos varchar (255) not null,
livrosEmprestados varchar (255) not null,
livrosDevolvidos varchar (255) not null
);

select * from biblioteca;

create table coordenacao(
id_coor int primary key auto_increment,
atendimentoAlunos varchar (255) not null,
atendimentoPais varchar (255) not null,
atendimentoProf varchar (255) not null 
);

select * from coordenacao;

create table negociacoes(
id_negoci int primary key auto_increment,
financeiro varchar (255) not null	
);

select * from negociacoes;



