import axios from "axios";
import { useEffect, useState } from "react";

const TestAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/fooditems/")
      .then(response => setData(response.data))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h2>Food Items</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestAPI;
