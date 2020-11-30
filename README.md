# PROJECT MVC M2M Databases

## Movie Genres

Buat database `movie-genres'.

### Tasks 1

 Table `Movie`  :

| Field         | Datatype | Modifiers   |
| ------------- | -------- | ----------- |
| id            | SERIAL   | PRIMARY KEY |
| title         | VARCHAR  | NOT NULL    |
| year          | INT      | NOT NULL    |
| rating        | INT      | NOT NULL    |


Table `Genre` :

| Field         | Datatype | Modifiers   |
| ------------- | -------- | ----------- |
| id            | SERIAL   | PRIMARY KEY |
| type          | VARCHAR  | NOT NULL    |

Table `Library` (junction):

| Field         | Datatype | Modifiers   |
| ------------- | -------- | ----------- |
| id            | SERIAL   | PRIMARY KEY |
| MovieId       | VARCHAR  | NOT NULL    |
| GenreId       | VARCHAR  | NOT NULL    |

Requirement :
1. Node.js dan Express.Js
2. Postgres dan Sequelize
3. Harus mengandung Many to Many relationship
4. EJS harus ada namun tidak perlu bagus
5. Harus ada CRUD
6. Harus mencoba testing dengan menggunakan Postman
7. Dikumpulkan max Sabtu
8. Presentasi Hari Senin

Pembagian Tugas :
1. Bastian (PM) : 
    *Buat Repo Master, dan Dev Branch
    *Install package dan buat database di PG 
    *Set routing
    *buat controller CRUD tabel junction(movie-genres)
    *buat ejs junction
    *Seeding ke postman
2. Julia :
    *buat controller CRUD tabel movies
    *buat ejs movies (list, add, edit)
    *buat branch di repo 
3. Nanda :
    *buat controller CRUD tabel genres
    *buat ejs genres (list, add, edit)
    *buat branch di repo 