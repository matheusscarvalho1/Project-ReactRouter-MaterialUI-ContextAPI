import { useState } from "react";

import { TextField, Button, Typography } from "@mui/material";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = () => {
    console.log(form);
  };

  return (
    <>
      <Typography variant="h3">Acesso Restrito</Typography>

      <div style={{ margin: "16px" }}>
        <TextField
          onChange={handleInputChange}
          label="Digite o seu e-mail"
          name="email"
          type="email"
        />
      </div>
      <div style={{ margin: "16px" }}>
        <TextField
          onChange={handleInputChange}
          label="Digite a sua senha"
          name="password"
          type="password"
        />
      </div>
      <div style={{ margin: "16px" }}>
        <Button onClick={handleFormSubmit} variant="contained" color="primary">
          Entrar
        </Button>
      </div>
    </>
  );
};

export default Login;
