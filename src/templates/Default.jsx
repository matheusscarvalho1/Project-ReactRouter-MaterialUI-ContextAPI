import Header from '../partials/Header/Header'
import Container from '@mui/material/Container';


const Default = ({ children }) => {

      return (
        <> 
            <Header />
            <Container style={{marginTop: '32px'}}>
                {children}
            </Container>
            
        </>
    )
    
}

export default Default