DROP DATABASE IF EXISTS doctorvisit_db;

CREATE DATABASE doctorvisit_db;

\c doctorvisit_db


CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    specialty TEXT NOT NULL,
)

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    insurance TEXT NOT NULL,
    birthday DATE NOT NULL,
)

CREATE TABLE diseases (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
)

CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    doctor_id INTEGER REFERENCES doctors ON DELETE SET NULL,
    patient_id INTEGER REFERENCES patients ON DELETE SET NULL,
    date DATE NOT NULL
)

CREATE TABLE diagnoses (
    id SERIAL PRIMARY KEY,
    visit_id INTEGER REFERENCES visits ON DELETE SET NULL,
    disease_id INTEGER REFERENCES diseases ON DELETE SET NULL,
    notes TEXT
)