// const { response } = require("express");
const { Author } = require("../models/author.model");


module.exports.createNewAuthor = (request, response) => {
  Author.create(request.body)
    .then(author=> response.json(author))
    .catch(err=>response.status(400).json(err))
}

module.exports.getAllAuthor = (request, response) => {
  Author.find ({}) 
  .then(author=> response.json(author))
  .catch(err=>response.json(err))
}

module.exports.findOneSingleAuthor = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then(oneSingleAuthor => res.json({ user: oneSingleAuthor }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedAuthor => res.json({ author: updatedAuthor }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// module.exports.deleteAnExistingUser = (req, res) => {
//   User.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findAllUsers = (req, res) => {
//   User.find()
//     .then(allDaUsers => res.json({ users: allDaUsers }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findOneSingleUser = (req, res) => {
// 	User.findOne({ _id: req.params.id })
// 		.then(oneSingleUser => res.json({ user: oneSingleUser }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };