-- CREATE DATABASE ccpc;

-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY, 
--   userName text, 
--   pw text
-- );

CREATE TABLE years (
  id SERIAL PRIMARY KEY,
  name integer
); 
  -- user_id integer REFERENCES users (id)

CREATE TABLE videos (
  id SERIAL PRIMARY KEY, 
  title text, 
  verse text, 
  posting_date DATE NOT NULL DEFAULT CURRENT_DATE,
  video_key text,
  CONSTRAINT fk_year FOREIGN KEY (year_id) REFERENCES years (id) ON DELETE CASCADE
  -- year_id integer REFERENCES years (id) ON DELETE CASCADE
);
  -- user_id integer REFERENCES users (id)











