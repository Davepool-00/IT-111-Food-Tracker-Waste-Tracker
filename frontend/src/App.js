import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/donations/")
            .then(response => setDonations(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Food Donations</h1>
            <ul>
                {donations.map((donation) => (
                    <li key={donation.id}>
                        {donation.food_item} - {donation.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
