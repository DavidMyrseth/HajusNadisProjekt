const app = require("express") ()
const port = 8080
const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require("./docs/swagger.json");

const games = [
    {id: 0, name: "Witcher 3",price: 29.99},
    {id: 1, name: "Cuberpunk 2077",price: 59.99},
    {id: 2, name: "Minecraft",price: 26.99},
    {id: 3, name: "Conter-strike: Global Offensive",price: 26.99},
    {id: 4, name: "Roblox",price: 0},
    {id: 5, name: "Grand Theft Auto V",price: 29.99},
    {id: 6, name: "Valorant",price: 0},
    {id: 7, name: "Forza Horizon 5",price: 59.99}
]
/// git check 1

app.get("/games", (req, res) => {
    res.send(games)
})

app.get("/games/:id", (req, res) => {
    res.send(games[req.params.id - 1])
})

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`)
})