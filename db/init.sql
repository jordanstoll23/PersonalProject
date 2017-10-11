DROP TABLE IF EXISTS stocks;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    email varchar(255),
    auth_id varchar(255)
);

CREATE TABLE IF NOT EXISTS stocks(
    id  SERIAL PRIMARY KEY,
    userid int references users(id),
    stock varchar(255)
);

INSERT INTO users 
(email, auth_id) 
VALUES 
( 'dylan@dylan.com', 'ABGJBDB4536ABFJNFS345');

INSERT INTO stocks
(userid, stock ) 
VALUES 
(1, 'AAPL'),
(1, 'TSLA'),
(1, 'T');

