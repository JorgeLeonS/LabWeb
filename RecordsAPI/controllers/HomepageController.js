let RecordModel = require('../models/Record');

exports.index = (req, res) => {
  RecordModel.all()
    .then((data) => {
      let records = data;
      console.log(data);
      res.render('homepage/index', { records: records });
    });
}
