import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnimals();
  }, []);

  const loadAnimals = async () => {

    try {

      const response = await axios.get(
        "https://animal-traceability-api-gcdvadfrgae8degp.chilecentral-01.azurewebsites.net/api/animals"
      );

      setAnimals(response.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  const totalAnimals = animals.length;

  const totalSpecies =
    [...new Set(animals.map(a => a.especie))].length;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fa",
        padding: "30px",
        fontFamily: "Arial, sans-serif"
      }}
    >

      <div
        style={{
          background: "#0d6efd",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "25px",
          textAlign: "center"
        }}
      >
        <h1>🐄 Sistema de Trazabilidad Animal</h1>

        <p>
          Arquitectura Cloud en Microsoft Azure
        </p>

        <small>
          React + Node.js + Azure App Service + MySQL
        </small>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "25px",
          flexWrap: "wrap"
        }}
      >

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
            minWidth: "200px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h3>📊 Total Animales</h3>
          <h2>{totalAnimals}</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
            minWidth: "200px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h3>🐾 Especies</h3>
          <h2>{totalSpecies}</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
            minWidth: "200px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h3>☁ Azure</h3>
          <h2>Conectado</h2>
        </div>

      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >

        <h2>Listado de Animales</h2>

        {loading ? (

          <p>Cargando datos...</p>

        ) : (

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse"
            }}
          >

            <thead>

              <tr
                style={{
                  backgroundColor: "#0d6efd",
                  color: "white"
                }}
              >
                <th style={{ padding: "12px" }}>ID</th>
                <th style={{ padding: "12px" }}>Código</th>
                <th style={{ padding: "12px" }}>Nombre</th>
                <th style={{ padding: "12px" }}>Especie</th>
              </tr>

            </thead>

            <tbody>

              {animals.map((animal) => (

                <tr key={animal.id}>

                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                    {animal.id}
                  </td>

                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                    {animal.codigo}
                  </td>

                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                    {animal.nombre}
                  </td>

                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                    {animal.especie}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          color: "#666"
        }}
      >
        <small>
          Proyecto Cloud Computing - Azure Student
        </small>
      </div>

    </div>
  );
}

export default App;