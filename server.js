// const http = require('http');
// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     response.statusCode = 200;
    
//     const {method} = request;

//     if (method === "GET") {
//         response.end("<h1>status 200 ok</h1>");
//     }
//     if (method === "POST") {
//         response.end("<h1>status 404 not found</h1>");
//     }
//     if (method === "PUT") {
//         response.end("<h1>status  505 err</h1>");
//     }
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = 'localhost';
// server.listen(port, host, () => {
//     console.log(`server listening on http://${host}:${port}`)
// })