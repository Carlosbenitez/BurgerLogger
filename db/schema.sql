### Schema

drop database if exists burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int auto_increment primary key,
	burger_name varchar(150) not null,
	devoured boolean
);