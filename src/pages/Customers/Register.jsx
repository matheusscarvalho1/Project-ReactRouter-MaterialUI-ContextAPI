import { useState } from 'react'
import axios from 'axios'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import Toasty from '../../components/Toasty'

const Register = () => {
    
    const [form, setForm] = useState ({
        name: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false,
        },
    })

    const [openToasty, setOpenToasty] = useState(false)

    const [isLoading, setIsLoading] = useState(false)
    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }

    
    const handleRegisterButton = () => {
        setIsLoading(true)
        let hasError = false
        
        let newFormState = {
            ...form,
        }

        if (!form.name.value) {
            hasError = true
            
            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Digite o campo nome corretamente',
            }
        }
        
            if (!form.job.value) {
                hasError = true
                
                newFormState.job = {
                    value: form.job.value,
                    error: true,
                    helperText: 'Digite o campo cargo corretamente',
                }
            }

            if (hasError) {
                return setForm(newFormState)

            }

            axios.post('https://reqres.in/api/users', {
                name: form.name.value,
                job: form.job.value,
                })
                .then((response) => {
                    setOpenToasty(true)
                    setIsLoading(false)
                })
            }
        
    return (
        <>
            <div>
                <TextField style={{marginBottom: '16px'}}
                    error={form.name.error}
                    helperText={form.name.error ? form.name.helperText : ''}
                    name='name' 
                    label='Digite o seu nome' 
                    value={form.name.value} 
                    onChange={handleInputChange} />
            </div>
            <div> 
                <TextField style={{marginBottom: '16px'}}
                    error={form.job.error}
                    helperText={form.job.error ? form.job.helperText : ''}
                    name='job' 
                    label='Digite o seu cargo' 
                    value={form.job.value} 
                    onChange={handleInputChange} />
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={handleRegisterButton} disabled={isLoading}>
                    {
                        isLoading ? 'Aguarde...' : 'Cadastrar'
                    }
                </Button>
                <Toasty 
                open={openToasty} 
                severity="success" 
                message="Cadastro Realizado com Sucesso!"
                onClose={() => setOpenToasty(false)}
                />

            </div>    
        </>
    )
}

export default Register