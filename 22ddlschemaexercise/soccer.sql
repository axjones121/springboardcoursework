DROP DATABASE IF EXISTS soccerdb;

CREATE DATABASE soccerdb;

\c soccerdb


CREATE TABLE season (
    id SERIAL PRIMARY KEY,
    start_date DATE,
    end_date DATE
)

CREATE TABLE teams (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    city TEXT NOT NULL,
)

CREATE TABLE referee(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
)

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    birthday DATE,
    height INTEGER,
    current_team_id INTEGER REFERENCES teams ON DELETE SET NULL

)

CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    home_team_id INTEGER REFERENCES teams ON DELETE SET NULL,
    away_team_id INTEGER REFERENCES teams ON DELETE SET NULL,
    location TEXT NOT NULL,
    date DATE NOT NULL,
    start_time TIMESTAMP NOT NULL,
    season_id INTEGER REFERENCES season ON DELETE SET NULL,
    head_referee_id INTEGER REFERENCES referee ON DELETE SET NULL,
    asssistent_referee_1_id INTEGER REFERENCES referee ON DELETE SET NULL,
    asssistent_referee_2_id INTEGER REFERENCES referee ON DELETE SET NULL

)


CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    player_id INTEGER REFERENCES players ON DELETE SET NULL,
    match_id INTEGER REFERENCES matches ON DELETE SET NULL,
)

CREATE TABLE lineups (
    id SERIAL PRIMARY KEY,
    player_id INTEGER REFERENCES players ON DELETE SET NULL,
    match_id INTEGER REFERENCES matches ON DELETE SET NULL,
    team_id INTEGER REFERENCES teams ON DELETE SET NULL
)
