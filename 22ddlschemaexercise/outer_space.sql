-- from the terminal run:
-- psql < outer_space.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

CREATE TABLE moons(
  id SERIAL PRIMARY KEY
  name TEXT[] NOT NULL
)

CREATE TABLE galaxy(
  id SERIAL PRIMARY KEY
  name TEXT NOT NULL
)

CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_around TEXT NOT NULL,
  moon_id INTEGER REFERENCES moons ON DELETE SET NULL,
  galaxy_id INTEGER REFERENCES galaxy ON DELETE SET NULL,
  
);




INSERT INTO moons (
   name )
INSERT INTO galaxy(
    name )

INSERT INTO planets
  (name, orbital_period_in_years, orbits_around, moon_id, galaxy_id)


VALUES
  ('Earth', 1.00, 'The Sun', 'Milky Way', '{"The Moon"}'),
  ('Mars', 1.88, 'The Sun', 'Milky Way', '{"Phobos", "Deimos"}'),
  ('Venus', 0.62, 'The Sun', 'Milky Way', '{}'),
  ('Neptune', 164.8, 'The Sun', 'Milky Way', '{"Naiad", "Thalassa", "Despina", "Galatea", "Larissa", "S/2004 N 1", "Proteus", "Triton", "Nereid", "Halimede", "Sao", "Laomedeia", "Psamathe", "Neso"}'),
  ('Proxima Centauri b', 0.03, 'Proxima Centauri', 'Milky Way', '{}'),
  ('Gliese 876 b', 0.23, 'Gliese 876', 'Milky Way', '{}');