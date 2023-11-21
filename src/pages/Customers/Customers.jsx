import { useState, useEffect } from 'react';
import axios from 'axios';
import CustomersCard from '../../components/customerCard';

const Customers = () => {
    const [customers, setCustomers] = useState([])

    console.log(customers)

    useEffect(()=> {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data
                setCustomers(data)
        })
    },[])

    return (
        <>
            <h1>Componente - Usuários</h1>
            {
                customers.map(customer => (
                    <CustomersCard 
                        name={customer.first_name}
                        lastname={customer.last_name}
                        email={customer.email}
                        avatar={customer.avatar}
                    />      
                ))
            }
        </>
    )
}

export default Customers