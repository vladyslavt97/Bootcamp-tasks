CREATE TABLE actors (
    id SERIAL primary key,
    name VARCHAR(255) NOT NULL,
    age INT,
    Number_of_Oscars INT
);

INSERT INTO actors (Name, Age, Number_of_Oscars) VALUES ('Leonardo DiCaprio', 41, 1);
INSERT INTO actors (Name, Age, Number_of_Oscars) VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors (Name, Age, Number_of_Oscars) VALUES ('Samuel L. Jackson', 67, 0);
INSERT INTO actors (Name, Age, Number_of_Oscars) VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors (Name, Age, Number_of_Oscars) VALUES ('John Cho', 43, 0);