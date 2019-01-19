const express = require('express');
const app = express();

const mongoose = require('./Config/db')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('Mongoose Working')
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Port Working on 3000')
})

app.use('/xyz', (request, response) => {
    console.log('This Is User Request!')
    response.send({ name: "Talha Jani" })
})


// app.use('/user', (request, response) => {
//     console.log('This Is User Request!')

//     // var arr = [
//     //     [1, 1, 0, 1, 0],
//     //     [0, 1, 0, 1, 0],
//     //     [0, 0, 0, 0, 0],
//     //     [1, 1, 0, 1, 0],
//     //     [0, 1, 0, 0, 0],
//     // ]

//     console.log('request', request.query)
//     response.send({
//         name: 'Wasi',
//         age: 21,
//     })
// })


// Middle Ware HAi

app.use(express.json());

// Middle Ware HAi


// app.get('/user', (request, response) => {
//     console.log('This Is User Request!')
//     console.log('request', request.query)
//     response.send({
//         name: 'Wasi',
//         age: 21,
//     })
// })


// app.post('/user', (request, response) => {
//     console.log('This Is User Request!')
//     console.log('request', request.body)
//     response.send({
//         name: 'Wasi',
//         age: 21,
//     })
// })



// Fetch Mai Aese Mangwaygy


// fetch('/user?name=Wasi&age=21')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });


// Fetch Mai Aese Mangwaygy


app.use('/', require('./routes/index'))
