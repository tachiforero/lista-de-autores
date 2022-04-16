// const { response } = require("express");
const { Pet } = require("../models/pet.model");


module.exports.createNewPet = (request, response) => {
  Pet.create(request.body)
    .then(pet=> response.json(pet))
    .catch(err=>response.status(400).json(err))
}

module.exports.getAllPet = (request, response) => {
  Pet.find ({}) 
  .then(pet=> response.json(pet))
  .catch(err=>response.json(err))
}

module.exports.findOneSinglePet = (req, res) => {
	Pet.findOne({ _id: req.params.id })
		.then(oneSinglePet => res.json({ user: oneSinglePet }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingPet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedPet => res.json({ pet: updatedPet }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingPet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// module.exports.findAllPet = (req, res) => {
//   Pet.find()
//     .then(allDaPet => res.json({ pet: allDaPet }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findOneSinglePet = (req, res) => {
// 	Pet.findOne({ _id: req.params.id })
// 		.then(oneSinglePet => res.json({ pet: oneSinglePet }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };