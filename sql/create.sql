CREATE TABLE user(
    userId VARCHAR(60),
    username VARCHAR(20),
    profileImg VARCHAR(200),
    created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE,
    PRIMARY KEY(userId)
);