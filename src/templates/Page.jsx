import { Typography } from "@mui/material"

const Page = ({ title, Component }) => {

      return (
        <> 
        <Typography variant="h2" component="h2" gutterBottom>
            {title}
        </Typography>

        {Component && <Component />}
            
        </>
    )
    
}

export default Page