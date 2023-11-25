import Container from '@mui/material/Container';


const Clean = ({ Component }) => {

      return (
        <> 
            <Container style={{marginTop: '32px'}}>
                <Component />
            </Container>
            
        </>
    )
    
}

export default Clean