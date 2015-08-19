var UserFactory = function(Schema, mongoose) {
	var bcrypt = require('bcrypt');
	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;
	SALT_WORK_FACTOR = 10;

	this.createSchemas = function() {
		Schema = new this.Schema({
			name: String,
			email: 
			{
				type: String,
				required: true,
			},
			affiliation: String,
			title: String,
			password: 
			{
				type: String,
				required: true
			},
			admin: Boolean
		});

		Schema.pre('save', function(next) {
		    var user = this;

		    // only hash the password if it has been modified (or is new)
		    if (!user.isModified('password')) return next();

		    // generate a salt
		    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		        if (err) return next(err);

		        // hash the password along with our new salt
		        bcrypt.hash(user.password, salt, function(err, hash) {
		            if (err) return next(err);

		            // override the cleartext password with the hashed one
		            user.password = hash;
		            next();
		        });
		    });
		});
		this.users = mongoose.model('users', Schema);
	};

	this.getAllUsers = function(query, res) {
		this.users.find(query, function(error, output) {
			res.json(output);
		});
	};

	this.getOneUser = function(req, res, jwt, app) {
		this.users.findOne(
		{
			email: req.body.email
		}, function(error, output) {
			if (error) throw error;
			if (!output) {
				res.json({
					success: false,
					message: 'Authentication failed. User not found.'
				});
			} else if (output) {
				bcrypt.compare(req.body.password, output.password, function(err, isMatch) {
					if (err) return err;
					if (!isMatch) {
						res.json({
							success: false,
							message: 'Authentication failed. Wrong password.'
						});
					} else {
						var encrypt = {
							name: output.name,
							email: output.email,
							admin: output.admin
						}
						var token = jwt.sign(encrypt, app.get('superSecret'), {
							expiresInMinutes: 1440
						});
						res.json({
							success: true,
							message: 'Enjoy your token',
							token: token
						});
					};
				});
			};
		});
	};

	this.createUser = function(req, res) {
		var newUser = new this.users({
			name: req.body.name,
			email: req.body.email,
			affiliation: req.body.affiliation,
			title: req.body.title,
			password: req.body.password,
			admin: req.body.admin
		});
		newUser.save(function (error, output) {
			res.json(output);
		});
	};

	this.checkIfExists = function(req, res) {
		this.users.findOne({
			email: req.body.email
		}, function(error, user) {
			if (error) throw error;
			if (!user) {
				res.json({
					exists: false
				});
			} else if (user) {
				res.json({
					exists: true
				});
			};
		});
	};

	this.updateUserName = function(req, res) {
		this.user.update(
		{
			_id: req.params._id
		},
		{$set:
			{name: req.body.name}
		}, function(error, output) {
			res.json(output);
		});
	};

	this.updateUserPassword = function(req, res) {
		this.user.update(
		{
			_id: req.params._id
		},
		{$set:
			{password: req.body.password}
		}, function(error, output) {
			res.json(output);
		});
	};

	this.updateUserAdmin = function(req, res) {
		this.user.update(
		{
			_id: req.params._id
		},
		{$set:
			{admin: req.body.admin}
		}, function(error, output) {
			res.json(output);
		});
	};

	this.removeUser = function(req, res) {
		this.users.remove({
			email: req.body.email
		}, function(err, output) {
			if (err)
				res.send(output);

			res.json({message: 'Successfully deleted'});
		});
	};
}

module.exports = UserFactory;

