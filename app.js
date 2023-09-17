// const calculate=require('./calculate');

// console.log(calculate.add(2,3));
// console.log(calculate.subtract(2,3));
// console.log(calculate.multiply(2,3));
// console.log(calculate.division(2,3));

// const fs = require('fs');

// fs.readFile('example.txt','utf8',(err, data)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });



const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

 // define a route for getting all users
app.get('/users',(req, res)=>{
 // retrive and return the list of users
 const users =[
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Bob'},
];
res.json(users);
});


// define a route for getting a specific user
app.get('/users/:id', (req, res)=>{
    // retrive the user with the specific user
    const user={id: req.params.id, name:'John'};
    res.send(`Hello ${req.params.name}`);
    res.json(user);
});

 // start the server
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});

