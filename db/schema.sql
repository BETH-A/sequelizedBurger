CREATE DATABASE `burgersDB`;

CREATE TABLE burgers(

id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(50),
devoured BOOLEAN NOT NULL DEFAULT false,
date TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);