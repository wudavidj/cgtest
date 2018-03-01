
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('createNew');
};

exports.save = function(req, res){
	var reqData = JSON.parse(req.param('data', null));
	console.log(reqData);
	var data = require('../data.json');
	data[reqData.title] = reqData;
	var json = JSON.stringify(data, null, 4);
	var fs = require('fs');
	fs.writeFile('./data.json', json, function(err){
		if (err) throw err;
		console.log('complete adding new mood');
	});
	res.json({'success': true});

}