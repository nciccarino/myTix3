
var path = require("path");
var User = require("../models/User.js");
var passport = require("../server/passport");


module.exports = function(app){

	app.get("/api/login", function(req, res){
		// console.log(res);
		// console.log('hit')
		// res.json({tst: 'hi'})
		res.sendFile(path.join(__dirname, "../public/login.html"));
	});

	// app.get("/register", function(req, res){
	// 	// console.log(res);
	// 	// console.log('hit')
	// 	// res.json({tst: 'hi'})
	// 	res.sendFile(path.join(__dirname, "../public/register.html"));
	// });

	    //login to app
  app.post("/login", passport.authenticate("local"), function(req, res){
    // console.log("Login Succesful");
    res.json("login");
    // res.json("/members");
     //this needs to change to the page that the
  });

	app.post("/api/user", function(req, res){
		// res.json(req.body);
		var entry = new User(req.body);

		entry.save(function(err, doc){
			if(err){
				console.log(err);
			}

			else{
				// console.log(doc);
				res.sendFile(path.join(__dirname, "../public/index.html"));
			}
		})
	
	})
}