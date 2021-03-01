-- CREATE DATABASE ccpc;

-- CREATE TABLE user (
--   id SERIAL PRIMARY KEY, 
--   userName text, 
--   pw text
-- );

CREATE TABLE year (
  year_id SERIAL PRIMARY KEY,
  name integer
); 
  -- id_user integer references user (id)

CREATE TABLE videos (
  videos_id SERIAL PRIMARY KEY, 
  title text, 
  sub_verse text, 
  posting_date DATE NOT NULL DEFAULT CURRENT_DATE,
  video_key text,
  id_year integer references year (id)
);
  -- id_user integer references user (id)











