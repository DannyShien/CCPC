-- CREATE TABLE user (
--   id SERIAL PRIMARY KEY, 
--   userName text, 
--   pw text
-- );

CREATE TABLE year (
  id SERIAL PRIMARY KEY,
  yearFolder integer, 
  -- id_user integer references user (id)
); 

CREATE TABLE video (
  id SERIAL PRIMARY KEY, 
  title text, 
  subVerse text, 
  posting_date DATE NOT NULL DEFAULT CURRENT_DATE,
  videoId integer,
  id_year integer references year (id), 
  -- id_user integer references user (id)
);











