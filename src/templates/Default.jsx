import Header from '../partials/Header/Header'
import Container from '@mui/material/Container';


const Default = ({ children }) => {

      return (
        <> 
            <Header />
            <Container>
                {children}
            </Container>
            
        </>
    )
    
}

export default Default