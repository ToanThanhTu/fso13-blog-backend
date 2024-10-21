CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  author text,
  url text NOT NULL,
  title text NOT NULL,
  likes integer DEFAULT 0
);

insert into blogs (author, url, title, likes) values ('John Henks', 'https://www.lorem.ipsum/com', 'How to Configure Backend With PostgreSQL', 124);

insert into blogs (author, url, title, likes) values ('Avo Cado', 'https://
www.bloglorem.ipsum/hooks', 'Hooks are Blessings from Heaven', 56);