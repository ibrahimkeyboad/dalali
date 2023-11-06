CREATE TABLE countries(id  INTEGER PRIMARY KEY, name TEXT)

CREATE TABLE cities(id INTEGER PRIMARY KEY, name TEXT, country_id INTEGER, FOREIGN KEY (country_id) REFERENCES countries(id)
CREATE TABLE regions(id INTEGER PRIMARY KEY, name TEXT, country_id INTEGER, FOREIGN KEY (country_id) REFERENCES countries(id)