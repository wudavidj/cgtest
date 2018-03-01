

exports.view = function(req, res){
	var titleName = req.params.issueName;
	var data = require('../data.json');
	var oneData = data[titleName];
  	res.render('moodLog', oneData);
};


