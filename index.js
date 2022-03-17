//app.js
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000 //porta padrão

//configurando o body parser para interpretar requests mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
 
router.get('/sum/:valor1/:valor2', (req, res) => {
    const valor1 = parseInt(req.params.valor1)
    const valor2 = parseInt(req.params.valor2)
    res.json({ valorSomado: valor1 + valor2 })
})

router.get('/sub/:valor1/:valor2', (req, res) => {
    const valor1 = parseInt(req.params.valor1)
    const valor2 = parseInt(req.params.valor2)
    res.json({ valorSubtraido: valor1 - valor2 })
})

router.get('/div/:valor1/:valor2', (req, res) => {
    const valor1 = parseInt(req.params.valor1)
    const valor2 = parseInt(req.params.valor2)
    res.json({ valorDividido: valor1 / valor2 })
})

router.get('/multi/:valor1/:valor2', (req, res) => {
    const valor1 = parseInt(req.params.valor1)
    const valor2 = parseInt(req.params.valor2)
    res.json({ valorMultiplicado: valor1 * valor2 })
})

app.use('/', router)

if (require.main === module){
    //inicia o servidor
    app.listen(port)
    console.log('API funcionando!')
}

module.exports = app