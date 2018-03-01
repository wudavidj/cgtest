
/*
 * GET home page.
 */

exports.view = function(req, res){
	var data = require('../data.json');
	var oneData = data[Object.keys(data)[Object.keys(data).length-1]];
  	res.render('newIssue', oneData);
};