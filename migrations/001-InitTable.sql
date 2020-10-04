-- Up
CREATE TABLE Accounts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT,
    role TEXT,
    name TEXT
);
CREATE TABLE Clocking(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    accountId INTEGER REFERENCES Accounts(id),
    clockingType TEXT,
    clockingTime TIMESTAMP
);

-- Down
Drop TABLE Accounts;
Drop TABLE Clocking;