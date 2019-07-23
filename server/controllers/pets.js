const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

module.exports = {

    create:(req, res) => {
        var pet = new Pet(req.body);
        pet.save((err, petsInDB) => {
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", pets: petsInDB});
            }
        });
    },

    getAll:(req, res) => {
        Pet.find({}, (err, petsInDB) => {
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", pets: petsInDB});
            }
        }).sort('type');
        // .sort({type:1});
    },

    getOne:(req, res) => {
        Pet.findById({_id: req.params.id}, (err, petsInDB) => {
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", pets: petsInDB});
            }
        });
    },

    create:(req, res) => {
        var user = new Pet(req.body);
        user.save((err, petsInDB) => {
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", pets: petsInDB});
            }
        });
    },

    update: (req, res) => {
        Pet.findByIdAndUpdate({_id: req.params.id}, req.body, { runValidators: true, context: 'query'}, (err, petsInDB) => {
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", pets: petsInDB});
            }
        });
    },

    delete: (req, res) => {
        console.log("Deleting selection!");
        Pet.findByIdAndDelete({_id: req.params.id}, (err) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success"});
            }
        });
    },

    like: (req, res) => {
        console.log("Liking a pet");
        // Pet.findByIdAndUpdate({_id: req.params.id}, {$inc: {likes: 1} }, { runValidators: true, context: 'query'}, (err, petsInDB) => {
        Pet.findByIdAndUpdate({_id: req.params.id}, {$set: {likes: req.body.likes} }, { runValidators: true, context: 'query'}, (err, petsInDB) => {
            if(err){
                console.log(err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", pets: petsInDB});
            }
        });
    }

    // like: (req, res) => {
    //     console.log("Liking a pet");
    //     Pet.findByIdAndUpdate({_id: req.params.id}, req.body, { runValidators: true, context: 'query'}, (err, petsInDB) => {
    //         if(err){
    //             console.log(err);
    //             res.json({message: "Error", error: err});
    //         } else {
    //             res.json({message: "Success", pets: petsInDB});
    //         }
    //     });
    // }
};