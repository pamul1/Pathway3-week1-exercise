var http = require('http')

http.createServer( serverPurpose ).listen(3000)

function serverPurpose(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})

    let width = 60
    let height = 40
    let area = (width)*(height)

    res.write(`<h1>The area is ${area}</h1>`)
    res.end(`<h2>Good bye</h2>`)
}