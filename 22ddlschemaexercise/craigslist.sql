DROP DATABASE IF EXISTS craigslist_db;

CREATE DATABASE craigslist_db;

\c craigslist_db


CREATE TABLE regions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
)

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
)

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(15) NOT NULL,
    encrypted_password VARCHAR(15) NOT NULL,
    preferred_region_id INTEGER REFERENCES regions ON DELETE SET NULL

)

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    text TEXT,
    location TEXT NOT NULL,
    user_id INTEGER REFERENCES users ON DELETE SET NULL,
    region_id INTEGER REFERENCES regions ON DELETE SET NULL,
    category_id INTEGER REFERENCES categories ON DELETE SET NULL

    
)