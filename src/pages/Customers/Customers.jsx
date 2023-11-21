import { useState, useEffect } from 'react';

import axios from 'axios';
import Grid from '@mui/material/Grid';

import CustomersCard from '../../components/customerCard';



const Customers = () => {
    
    const [customers, setCustomers] = useState([])


    useEffect(()=> {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data
                setCustomers(data)
        })
    },[])


    return (

            <Grid container spacing={2}>
                {
                    customers.map(customer => (
                        <Grid item p={2}
                        container xs={12} sm={6} md={4} lg={4} xl={4}>
                            <CustomersCard 
                                name={customer.first_name}
                                lastname={customer.last_name}
                                email={customer.email}
                                avatar={customer.avatar}
                
                            />
                        </Grid>      
                    ))
                } 
            </Grid>
    )
}

export default Customers