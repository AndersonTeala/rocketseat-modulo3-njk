const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data");

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function (req, res) {
    const about = {
        avatar_url: "https://atnteala.sentidoconsultoria.com.br/wp-content/uploads/2020/05/69f162f4-6126-4c87-94dd-091a83a23f44-300x300-1.jpeg",
        name: "Anderson Teala",
        role: "Instrutor - Tecsec",
        description: 'Programador full-stack, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="https://atnteala.sentidoconsultoria.com.br/" target="_blank">Tecsec</a>',
        links: [
            { name: "Github", url: "https://github.com/AndersonTeala" },
            { name: "Instagram", url: "https://github.com/AndersonTeala" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/anderson-teala-50a1a5167/" },
        ]
    }

    return res.render("about", { about })
})

server.get("/portfolio", function (req, res) {

    return res.render("portfolio", { items: videos })
})

server.listen(5000, function () {
    console.log("server is running")
})