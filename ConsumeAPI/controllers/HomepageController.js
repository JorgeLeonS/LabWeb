const axios = require('axios');
const appConfig = require('../configs/app');

exports.index = (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/todos')
  .then((response) =>{
    let todos = response.data;

    axios.get('https://gorest.co.in/public-api/users/445', {
      headers: {
        Authorization: `Bearer ${appConfig.apiToken}`
      }
    })
    .then((response) =>{
      let user = response.data.result;
      res.render('homepage/index', {todos : todos, user : user});
    })
    .catch((error) =>{
      console.log('There was an error',error);
      res.status(500).send('There was an error');
    })
  })
  .catch((error) =>{
    console.log('There was an error',error);
    res.status(500).send('There was an error');
  })
}
