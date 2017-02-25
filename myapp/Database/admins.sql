CREATE TABLE admins (
    adminId INTEGER PRIMARY KEY AUTO_INCREMENT,
    username varchar(100) unique,
    password varchar(100)
);
