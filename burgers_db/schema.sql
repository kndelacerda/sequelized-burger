CREATE DATABASE IF NOT EXISTS burgers_sequelized_db;

USE burgers_sequelized_db;

CREATE TABLE burgers_db.burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured TINYINT(1),
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  				   ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE INDEX id_UNIQUE (id ASC));
