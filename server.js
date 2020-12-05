"use strict"
const { Console } = require("console");
const http = require("http");
const fs = require("fs");
const url = require("url");
const queryString = require("querystring");

//create server function
http.createServer(function(req, res) {
    let access = url.parse(req.url);
    if (access.pathname === "/") {
        let data = queryString.parse(access.query);
        res.writeHead(200, { "Content-type": "text/plain" });
        res.end(JSON.stringify(data));
    } else if (access.pathname === "/form") {
        if (req.method.toUpperCase() === "POST") { //POST
            let data_post = "";
            req.on('data', (chunk) => {
                data_post += chunk;
            })
            req.on('end', () => {
                data_post = queryString.parse(data_post);
                res.writeHead(200, { "Content-type": "text/plain" });
                res.end(JSON.stringify(data_post));
            })
        } else { //GET
            res.writeHead(200, { "Content-type": "text/html" });
            fs.createReadStream("./templates/form.html").pipe(res);
        }
    } else {
        res.writeHead(200, { "Content-type": "text/plain" });
        res.end("Page Not Found!!!!");
    }

}).listen(8888);


console.log("server running....");