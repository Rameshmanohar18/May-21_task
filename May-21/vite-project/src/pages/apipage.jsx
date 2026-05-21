import React, { useEffect, useState } from "react";
import axios from "axios";

function ApiPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return React.createElement("h1", null, "Loading...");

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Users"),
    users.map((user) =>
      React.createElement("p", { key: user.id }, user.name)
    )
  );
}

export default ApiPage;
