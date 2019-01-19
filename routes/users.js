const express = require('express');
const router = express.Router();

const Users = require('../model/Users');

router.get('/getAll', (req, res) => {
    // console.log('Get Al Chal Users Raha Hai')
    // res.send({ name: 'Wasi' })

    Users.find()
        .then((response) => {
            console.log('Response Console Success', response)
        })
        .catch(e => {
            console.log('Response Console Error', e.message)
        })
})

router.post('/add', (req, res) => {
    console.log('Add Chal Users Raha Hai');
    // console.log('Reqs User Users Add', req.body)

    // For Update From Database

    Users.update({ email: req.body.email }, { name: 'Hello World' })
        .then(() => { res.send({ message: 'User successfully Updated' }) })
        .catch(e => { res.send(500, { message: e.message }) })




    // for Delete From Databse

    // Users.deleteOne({ email: req.body.email })
    //     .then(() => { res.send({ message: 'User successfully Deleted' }) })
    //     .catch(e => { res.send(500, { message: e.message }) })


    // for Added Database

    // const user = new Users(req.body)
    // user.save()
    //     .then(() => { res.send({ message: 'User successfully inserted' }) })
    //     .catch(e => { res.send(500, { message: e.message }) })
})

module.exports = router

// fetch('/users/getAll').then(res => res.json())
//   .then(response => console.log('Success:', JSON.stringify(response)))
//   .catch(error => console.error('Error:', error));



// fetch('/users/add', {
//     method: 'POST', // or 'PUT'

//       header: {
//   "Content-Type": 'text.json' 
//       },
//     headers:{
//       'Content-Type': 'application/json'
//     }
//     body: JSON.stringify({text: "Hey Wasi"}), // data can be `string` or {object}!
//   }).then(res => res.json())
//   .then(response => console.log('Success:', JSON.stringify(response)))
//   .catch(error => console.error('Error:', error));


// fetch('/users/getAll').then(res => res.json())
//   .then(response => console.log('Success:', JSON.stringify(response)))
//   .catch(error => console.error('Error:', error));



// fetch('/users/add', {
//     method: 'POST', // or 'PUT'
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ text: "Hey Wasi" }), // data can be `string` or {object}!
// }).then(res => res.json())
//     .then(response => console.log('Success:', JSON.stringify(response)))
//     .catch(error => console.error('Error:', error));