const http = require('http');
const fs = require('fs')

function displayPage(res, url) {
    fs.readFile(url, function(err, data) {
        res.write(data);
        res.end();
    })
}

const server = http.createServer((req, res) => {
    if (req.url === '/about') displayPage(res, './Pages/about.html')
    else if (req.url === '/contact-me') displayPage(res, './Pages/contact-me.html');
    else if (req.url === '/') displayPage(res, './Pages/index.html');
    else displayPage(res, './Pages/404.html')
}).listen(8080)

console.log('hello hello')