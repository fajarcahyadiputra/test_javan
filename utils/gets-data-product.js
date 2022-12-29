const https = require("https");

function getData(){
   https.get("https://dummyjson.com/products", (res) => {
    let body = "";

    res.on("data", (d) => {
        body += d;
    })

    res.on("end", () => {
        try {
            const data = JSON.parse(body);
             return data.products;
        } catch (error) {
            throw new Error(error.message)
        }
    })
   });
}
