const express = require('express');
const router = express.Router();

router.get('/getAll', () => {
    console.log('Get All Post Chal Raha Hai')
})

router.post('/add', (req, res) => {
    console.log('Add Chal Post Raha Hai');
    console.log('Reqs User Post Add', req.body)
})

module.exports = router


// fetch('/posts/getAll').then(res => res.json())
//   .then(response => console.log('Success:', JSON.stringify(response)))
//   .catch(error => console.error('Error:', error));




// fetch('/posts/add', {
//     method: 'POST', // or 'PUT'
//       header: {
//   "Content-Type": 'text.json' 
//       },
//     body: JSON.stringify({text: "Hey Wasi"}), // data can be `string` or {object}!
//     headers:{
//       'Content-Type': 'application/json'
//     }
//   }).then(res => res.json())
//   .then(response => console.log('Success:', JSON.stringify(response)))
//   .catch(error => console.error('Error:', error));