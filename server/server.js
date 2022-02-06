const http = require('http');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./route/userRoute'))
app.use('/', require('./route/authRoute'))



// app.get('/', verifyJWT, (req, res, next) => {
//     res.json({ message: "Tudo ok por aqui!" });
// })

// app.get('/clientes', verifyJWT, (req, res, next) => {
//     console.log("Retornou todos clientes!");
//     res.json([{ id: 1, nome: 'luiz' }]);
// })


// //authentication
// app.post('/login', (req, res) => {
//     // console.log(req);
//     //esse teste abaixo deve ser feito no seu banco de dados
//     if (req.body.user === 'luiz' && req.body.password === '123') {
//         //auth ok
//         const id = 1; //esse id viria do banco de dados
//         const token = jwt.sign({ id }, process.env.SECRET, {
//             expiresIn: 10 // expires in 5min
//         });
//         return res.json({ auth: true, token: token });
//     }

//     res.status(500).json({ message: 'Login inválido!' });
// })



// app.post('/logout', function (req, res) {
//     res.json({ auth: false, token: null });
// })





    const server = http.createServer(app);
    server.listen(3000);
    console.log("Servidor escutando na porta 3000...")