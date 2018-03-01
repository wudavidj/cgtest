/*
 * GET home page.
 */

exports.view = function(req, res){
  	var titleName = req.params.issueName;
	var data = require('../data.json');
	var oneData = data[titleName];
	console.log(oneData);
  	res.render('issue2', oneData);
};
