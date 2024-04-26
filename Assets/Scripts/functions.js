"use strict"

function GET(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        callback(xhr.response);
    });
    xhr.open("GET", url);
    xhr.send(null);
}