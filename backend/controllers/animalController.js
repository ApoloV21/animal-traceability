const pool = require("../db");

const getAnimals = async (req, res) => {

    try {

        const [rows] = await pool.query(
            "SELECT * FROM animals ORDER BY id DESC"
        );

        res.json(rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

};

const createAnimal = async (req, res) => {

    try {

        const { codigo, nombre, especie } = req.body;

        const [result] = await pool.query(
            `INSERT INTO animals
            (codigo,nombre,especie)
            VALUES (?,?,?)`,
            [codigo, nombre, especie]
        );

        res.status(201).json({
            message: "Animal creado",
            id: result.insertId
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = {
    getAnimals,
    createAnimal
};