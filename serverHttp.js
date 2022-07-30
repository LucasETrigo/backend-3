const http = require('http');

const PORT = 3000;


const server = http.createServer( (req, res) => {
    res.end('Using http server!')
});

server.listen(PORT, () => {
    console.log(`Server listening at port http://localhost:${PORT}`)
});