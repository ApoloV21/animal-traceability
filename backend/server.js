require("dotenv").config();

const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();

const animalRoutes = require("./routes/animals");

app.use(cors());
app.use(express.json());
app.use("/api/animals", animalRoutes);

app.get("/", async (req, res) => {

    try {

        const [result] = await pool.query(
            "SELECT NOW() AS fecha"
        );

        res.json({
            status: "OK",
            mysql: "Conectado",
            fechaServidor: result[0].fecha
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            status: "ERROR",
            message: error.message
        });

    }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});