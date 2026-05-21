

import { useState } from "react";

function FormPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Invalid Email");
      return;
    }

    if (password.length < 5) {
      setError("Password too short");
      return;
    }

    setError("");
    alert("Form Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Submit</button>

      <p>{error}</p>
    </form>
  );
}

export default FormPage;