-- CREATE DATABASE ccpc;

-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY, 
--   userName text, 
--   pw text
-- );

CREATE TABLE years (
  year_id SERIAL PRIMARY KEY,
  name integer
); 
  -- user_id integer REFERENCES users (id)

CREATE TABLE videos (
  video_id SERIAL PRIMARY KEY, 
  input_date date,
  title text, 
  verse text, 
  posting_date DATE NOT NULL DEFAULT CURRENT_DATE,
  video_key text,
  year_id integer REFERENCES years (year_id) ON DELETE CASCADE
);
  -- year_id int,
  -- CONSTRAINT fk_year FOREIGN KEY (year_id) REFERENCES years (year_id) ON DELETE CASCADE
  -- user_id integer REFERENCES users (id)











