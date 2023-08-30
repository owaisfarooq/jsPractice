const fetch = require('node-fetch');

logMovies()
async function logMovies() {
    const response = await fetch("https://admissions.nu.edu.pk/Result/", {
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    });
    const movies = await response.json();
    console.log(movies);
}