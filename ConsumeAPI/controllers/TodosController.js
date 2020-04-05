const axios = require('axios');

exports.create = (req, res) =>{
    let task = req.body;
    task.completed = true;
    task.userID = 1;
    axios.post('https://jsonplaceholder.typicode.com/todos', task)
    .then((response) =>{
        console.log('Task was created');
        res.redirect('/');
    })
    .catch((error) =>{
        console.log("An error ocurred", error);
        res.status(500).send('An error ocurred');
    })
}