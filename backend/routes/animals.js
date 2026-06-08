const express = require("express");

const router = express.Router();

const {
    getAnimals,
    createAnimal
} = require("../controllers/animalController");

router.get("/", getAnimals);

router.post("/", createAnimal);

module.exports = router;