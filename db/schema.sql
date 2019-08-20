CREATE DATABASE burgers_db;

USE burgers_db;
DROP DATABASE IF EXISTS burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN DEFAULT false, 
	PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name) VALUES ("Avocado");
INSERT INTO burgers (burger_name) VALUES ("Veggie");
INSERT INTO burgers (burger_name) VALUES ("Mushrooms");
INSERT INTO burgers (burger_name) VALUES ("Truffle");