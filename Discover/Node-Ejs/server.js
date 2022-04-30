const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa Javascript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        }
    ]

    const subtitle = "Uma Linguagem de modelagem para criaçã ode pagina html"

    res.render("index", {
        items: items,
        subtitle: subtitle,
    })
})

app.get("/about", function (req, res) {
    res.render("about")
})


app.listen(5500)
console.log("RODANDO...")