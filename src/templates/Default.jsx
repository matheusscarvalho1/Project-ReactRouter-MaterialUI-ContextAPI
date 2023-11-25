import Header from '../partials/Header/Header'
import Container from '@mui/material/Container';

import useAuth from '../state/auth'


const Default = ({ children }) => {

    const { user } = useAuth()
      return (
        <> 
            <Header user={user}/>
            <Container style={{marginTop: '32px'}}>
                {children}
            </Container>
            
        </>
    )
    
}

export default Default