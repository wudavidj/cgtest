
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('daily-entry');
};

exports.save = function(req, res){
	var reqData = JSON.parse(req.param('data', null));
	var latestMood = reqData.emoji;
	var data = require('../data.json');
	data[Object.keys(data)[Object.keys(data).length-1]].moods.push(reqData);
	data[Object.keys(data)[Object.keys(data).length-1]].latestMood = latestMood;
	var json = JSON.stringify(data, null, 4);
	var fs = require('fs');
	fs.writeFile('./data.json', json, function(err){
		if (err) throw err;
		console.log('complete adding new mood');
	});
	/* Get length of the dictionary
	Object.keys(data).length;
	*/
	/*IMPORTANT FOR HISTORY
	 console.log(data['Food with Matt']);
	*/
	/* GET LAST OBJECT
	console.log(data[Object.keys(data)[Object.keys(data).length-1]]);
	*/
	/*
	var dataLength = Object.keys(data).length;
	console.log(dataLength);
	console.log(Object.keys(data)[dataLength-1]);*/
	/*console.log(data.issues[dataLength-1]);*/
	/*
	data.issues[dataLength-1].moods.push(reqData);
	console.log(data);*/

	res.json({'success': true});
}
