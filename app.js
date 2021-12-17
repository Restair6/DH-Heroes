
const path =require("path")

const express =require("express");
const { request } = require("http");
const { response } = require("express");

console.log(path.resolve("./views/index.html"))

const app = express();

const port = 3030



app.use(express.static("public"))





app.get( '/home', (request, response) => {
response.sendFile(path.resolve("./views/index.html"))
})

app.get( '/', (request, response) => {
    response.sendFile(path.resolve("./views/index.html"))
    })
    

  
    app.get("/babbage",(request,response) =>{
        response.sendFile(path.resolve("./views/babbage.html"))
    })

    app.get("/berners-lee",(request,response) =>{
        response.sendFile(path.resolve("./views/berners-lee.html"))
    })

    app.get("/clarke",(request,response) =>{
        response.sendFile(path.resolve("./views/clarke.html"))
    })

    app.get("/hamilton",(request,response) =>{
        response.sendFile(path.resolve("./views/hamilton.html"))
    })


    app.get("/hopper",(request,response) =>{
        response.sendFile(path.resolve("./views/hopper.html"))
    })

    app.get("/lovelace",(request,response) =>{
        response.sendFile(path.resolve("./views/lovelace.html"))
    })

    app.get("/turing",(request,response) =>{
        response.sendFile(path.resolve("./views/turing.html"))
    })

    app.get("/*",(request,response) =>{
        response.send(" no encontre la pagina que buscabas")
    })



app.listen(port, () => {
    console.log("estoy escuchando en el puerto ", port)
}
)