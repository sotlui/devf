class Author {
    constructor(id, name, last_name, biography, gender, age) {
        this.id = id,
            this.name = name,
            this.last_name = last_name,
            this.nacionalidad = "MX",
            this.biography = biography,
            this.gender = gender,
            this.age = age
    }
}

module.exports = { Author };