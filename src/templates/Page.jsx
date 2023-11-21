import { Typography } from "@mui/material"

const Page = ({ title, Component }) => {

      return (
        <> 
        <Typography variant="h3" component="h2" gutterBottom>
            {title}
        </Typography>

        {Component && <Component />}
            
        </>
    )
    
}

export default Page