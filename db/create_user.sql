INSERT INTO users 
(email, auth_id) 
VALUES 
( $1, $2)
RETURNING *;