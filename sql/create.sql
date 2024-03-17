CREATE TABLE user(
    userId VARCHAR(60),
    username VARCHAR(20),
    profileImg VARCHAR(200),
    created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE,
    PRIMARY KEY(userId)
);

--

INSERT INTO user(userId, username, profileImg) VALUES
("1", "a", "A"),
("2", "b", "B"),
("3", "c", "C"),
("4", "d", "D"),
("5", "e", "E");
