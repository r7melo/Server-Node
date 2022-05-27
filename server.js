const http = require("http")

http
    .createServer((request, response) => {
        response.writeHead(200, {'Content-Type': 'application/json'})

        if (request.url === "/produto") {
            response.end(
                JSON.stringify({
                    menssage: "Rota de produto"
                })
            )
        }

        if (request.url === "/usuarios") {
            response.end(
                JSON.stringify({
                    menssage: "Rota de usuarios"
                })
            )
        }



        response.end(JSON.stringify({
            data: 'Hello World!'
        }))
    })
    .listen(process.env.PORT || 3000, () => console.log("Servidor está rodando na porta 4001"))