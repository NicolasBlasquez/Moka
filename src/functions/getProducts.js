const DataURI = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRq4nNGK6JJ7dz-UpfU_qgHzvf7vCUUr589X-uQI6_faqNQMRpe-k5OZy8uYExd7A/pub?gid=798208207&single=true&output=csv";

export default async function getProducts() {

    const DATA = {
        headers: {},
        products: [],
    }

    let data = await fetch(DataURI).then(d => d.text());
    
    data = data.split("\r\n")

    DATA.headers = data.shift().split(",");

    data.forEach(row => {
        row = row.split(",");
        // Nombre del producto
        if (row[0]) {
            DATA.products.push({
                name: row[0],
                ingredients: [
                    { name: row[1], amount: +row[2] }
                ],
                // pricePerPortion: +row[3],
                description: row[5],
                portions: +row[6],
                types: [row[7]],
            });
        } else {
            let lastProduct = DATA.products[DATA.products.length - 1];
            if (row[1] && row[2]) lastProduct.ingredients.push({ name: row[1], amount: +row[2] });
            if (row[7]) lastProduct.types.push(row[7]);
        }
    });

    return DATA
}