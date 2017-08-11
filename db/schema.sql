### Schema

CREATE DATABASE bat_app;
USE bat_app;

CREATE TABLE Users
 (`id` INTEGER NOT NULL auto_increment ,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  UNIQUE `Users_email_unique` (`email`),
  PRIMARY KEY (`id`)
);
