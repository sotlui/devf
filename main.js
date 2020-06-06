//const request = require('request');
const axios = require('axios');
const { Author } = require('./Author');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

/* const getAuthorByID = (id) => {
    const URI = 'authors/';
    const ENDPOINT = URL_BASE + URI + id;

    return new Promise((resolve, reject) => {
        request.get(ENDPOINT, (err, response, body) => {
            if (response.statusCode === 200 && !err) {
                const json = JSON.parse(body);
                resolve(json);
            } else {
                reject(response.statusCode);
            }
        });
    });
}

// axiosGetAuthorById(6411)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
 */

// ----------------------------------------------------------------------------------

//Buscar un autorhos
const getAuthorById = (id) => {
    const URI = 'authors/';
    const ENDPOINT = URL_BASE + URI + id;

    return axios.get(ENDPOINT);
}

//Insertar un autor
const insertAuthor = (author) => {
    const URI = 'authors/';
    const ENDPOINT = URL_BASE + URI;

    return axios.post(ENDPOINT, author);
}

//Delete author
const deleteAuthor = (number) => {
    const URI = 'authors/';
    const ENDPOINT = URL_BASE + URI + number;
    return axios.delete(ENDPOINT);
}

const updateAuthor = (author) => {
    const URI = 'authors/';
    const ENDPOINT = URL_BASE + URI + 6657;
    return axios.put(ENDPOINT, author);
}


updateAuthor(new Author(6657, "Luis", "Calama", "Ecuadorian", "M", 34))
    .then((author) => {
        if (author.status === 200)
            console.log("Author modificado correcto");
    })
    .catch((error) => console.log(error));

/* deleteAuthor(6657)
    .then((author) => {
        if (author.status === 200)
            console.log("Eliminacion correcta");
    })
    .catch((error) => console.log(error));

 */
/* insertAuthor(new Author("Luis", "Soto", "Ecuador", "M", 25))
    .then((author) => {
        if (author.status == 201)
            console.log("Insertado correcto");
    })
    .catch((error) => console.log(error));
 */

/* axiosGetAuthorById(6411)
    .then(({ data }) => console.log(data))
    .catch((error) => console.log(error)); */