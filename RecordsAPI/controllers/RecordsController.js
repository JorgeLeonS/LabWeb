let RecordModel = require('../models/Record');

exports.index = (req, res) => {
  RecordModel.all()
    .then((data) => {
      let records = data;
      res.json(records);
    });
}

exports.show = (req, res) => {
    let id = req.params.id;
    RecordModel.find(id).then((record) =>{
        if(typeof(record)==='undefined'){
            res.status(404).json({error: "El recurso no existe"});
        }
        res.json(record);
    })
  }

exports.create = (req, res) =>{
    let record = req.body;
    console.log(record);
    RecordModel.create(record)
    .then((id) => {
        RecordModel.find(id)
        .then((record) =>{
            res.json({record});
        });
    });
  }

exports.update = (req, res) =>{
    let id = req.params.id;
    let record = req.body;
    RecordModel.find(id).then((data) =>{
        if(typeof(data)==='undefined'){
            res.status(404).json({error: "El recurso no existe"});
        }
        RecordModel.update(id, record)
        .then((status) => {
            res.json({status : status});
        })
        .catch((error) =>{
            res.status(500).json({error: "Hubo un error en el servidor"});
        });
    })
    .catch((error) =>{
        res.status(500).json({error: "Hubo un error en el servidor"});
    });
}

exports.destroy = (req, res) =>{
    let id = req.params.id;
    let record = req.body;
    RecordModel.find(id).then((data) =>{
        if(typeof(data)==='undefined'){
            res.status(404).json({error: "El recurso no existe"});
        }
        RecordModel.destroy(id, record)
        .then((status) => {
            res.json({status : status});
        })
        .catch((error) =>{
            res.status(500).json({error: "Hubo un error en el servidor"});
        });
    })
    .catch((error) =>{
        res.status(500).json({error: "Hubo un error en el servidor"});
    });
}