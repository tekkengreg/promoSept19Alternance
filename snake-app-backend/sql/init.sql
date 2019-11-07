DROP TABLE players;
CREATE TABLE players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nickname TEXT,
  avatar TEXT
);
INSERT INTO players (nickname, avatar)
VALUES
  (
    'toto',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWAoQ916iRw6xL3xgw8ebhq_XYl6yhiFeq1DMQuQRqLmOR7vv2g&s'
  ),
  (
    'tata',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlDPRr1xSW0lukY2EmVpAx5Ye1S8H5luUVOK2IqFdcsjCDQxK&s'
  ),
  (
    'titi',
    'https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg'
  );
DROP TABLE games;
CREATE TABLE games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    player1 INTEGER,
    player2 INTEGER,
    score INTEGER,
    duration INTEGER,
    FOREIGN KEY(player1) REFERENCES players(id),
    FOREIGN KEY(player2) REFERENCES players(id)
  );
INSERT INTO games (player1, player2, score, duration)
VALUES
  (1, 2, 4500, 456900),(1, 2, 560, 346345),(1, 2, 12500, 234645687),(1, 2, 745, 33452);