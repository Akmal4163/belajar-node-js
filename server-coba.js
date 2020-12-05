"use strict"
const { Console } = require("console");
const http = require("http");
const fs = require("fs");

//create server function
http.createServer(function(req, res) {
    let kode = 200;
    let file = "";
    if (req.url == "/") {
        kode = 200;
        file = "index.html";
    } else if (req.url == "/about") {
        kode = 200;
        file = "about.html";
    } else {
        kode = 404;
        file = "404.html";
    }
    res.writeHead(kode, { "Content-Type": "text/html" });
    fs.createReadStream(`./templates/${file}`).pipe(res);
}).listen(8888);


console.log("server running....");




// if (req.url != "/favicon.ico") {
//     console.log(req.url);
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("This Website Running With Node Js Server\n");
//     res.write(`Your Request :${req.url}`);
//     res.end();
// }