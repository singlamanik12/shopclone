CREATE TABLE USERS(ID INT AUTO_INCREMENT UNIQUE NOT NULL,
FIRST_NAME VARCHAR(255),
LAST_NAME VARCHAR(255),
PHONE_NO VARCHAR(10),
PRIMARY KEY(ID, PHONE_NO)
)