const Task = require('../models/Task');

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
    if(req.xhr || req.headers.accept.indexOf('json') > -1){
      Task.find(id).then((task) => res.json(task));
    }else{
      res.redirect('/');
    }
  });
}

exports.done = (req, res) => {
  //De la URL
  let id = req.params.id;
  //Del form
  //req.body.id;

  Task.find(id).then((task) =>{
    return Task.markAsDone(task)
  })
  .then((result)=>{
    res.redirect('/');
  });
}
