"use strict"

function GET(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            callback(xhr.response);
        } else throw new Error(`Failed Connection`);
    });
    xhr.open("GET", url);
    xhr.send(null);
}

function loadImage(url) {
    const i = new Image();
    i.src = url;
}

function printProduct(product) {
    let container = Object.assign(document.createElement("div"), { classList: ["product"], innerHTML: `<div class="productName"><h1>${product[0][0]}</h1><h3>${product[0][4]}</h3></div><p>${product[0][5]}</p>` } );
    return container;
}

loadImage("Assets/Img/box.svg");
loadImage("Assets/Img/person.svg");
loadImage("Assets/Img/house.svg");