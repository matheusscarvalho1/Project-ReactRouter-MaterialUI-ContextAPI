<<<<<<< HEAD
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
=======
import { TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../state/auth'
const Login = () => {

    const Navigate = useNavigate()
    
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    const { user, setUser } = useAuth()

    const handleInputChange = e => {
        // obtendo o value que vem no e.target (campos preenchidos) 
        // e armazenando nas variáveis e senha e armazenando nas variaveis

        const { name, value } = e.target 
        
        //atualizando o form
        setForm({
            ...form, //para não sobrescrever
            [name]: value, //[name] vai ser ou email ou password
        })
    }
    const handleFormSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            setUser({
                logged: true,
                email: form.email,
            })
            Navigate('/customers')
        }, 4000)
    }
    
    return (
        <>
            <Typography style={{marginBottom: '16px'}} variant="h3">Acesso Restrito</Typography>

            <div style={{marginBottom: '16px'}}>
                <TextField
                    onChange={handleInputChange}
                    label="Digite o seu e-mail"
                    name="email"
                />
            </div>
            <div style={{marginBottom: '16px'}}>
                <TextField
                    onChange={handleInputChange}
                    label="Digite a sua senha"
                    name="password"
                    type="password"
                />
            </div>
            <div>
                <Button variant="contained" color='primary' onClick={handleFormSubmit}>
                    {
                        isLoading ? 'Aguarde...' : 'Entrar'
                    }
                </Button>
            </div>
        </>
    )
}
export default Login

>>>>>>> d19f710291b489d9897e7a4e1bf9491a730ee917
