CREATE TABLE user(
    userId VARCHAR(60),
    username VARCHAR(20),
    profileImg VARCHAR(200),
    created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    PRIMARY KEY(userId)
);

--

INSERT INTO user(userId, username, profileImg) VALUES
("1", "a", "A"),
("2", "b", "B"),
("3", "c", "C"),
("4", "d", "D"),
("5", "e", "E");

--

SELECT userId, username
FROM user
ORDER BY created DESC LIMIT 1;

SELECT username
FROM user
WHERE userId="asd";

DELETE FROM user
WHERE username="박근원";

UPDATE user
SET userId="dsa"
WHERE username="김기재";