import React, { useState } from "react";

const FormUserPass = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    setSubmittedData({ username, pass });
  };
  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default FormUserPass;
