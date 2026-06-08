import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    loadAnimals();
  }, []);

  const loadAnimals = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/animals"
      );

      setAnimals(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Trazabilidad Animal</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Código</th>
            <th>Nombre</th>
            <th>Especie</th>
          </tr>
        </thead>

        <tbody>
          {animals.map(animal => (
            <tr key={animal.id}>
              <td>{animal.id}</td>
              <td>{animal.codigo}</td>
              <td>{animal.nombre}</td>
              <td>{animal.especie}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;