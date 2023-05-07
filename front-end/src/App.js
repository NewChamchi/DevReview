import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/test/all"
                );
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>React & Spring Boot Test</h1>
            {/* {data ? (
                <p>Data from backend: {data}</p>
            ) : (
                <p>Loading...</p>
            )} */}
        </div>
    );
}

export default App;
