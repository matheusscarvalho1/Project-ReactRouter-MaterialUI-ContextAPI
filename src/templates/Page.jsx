import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Header from "../partials/Header/Header";

const Page = ({ title, Component }) => {
  return (
    <>
      <Container style={{ maxWidth: "lg" }}>
        <Header />
        <Typography variant="h3" component="h2" gutterBottom>
          {title}
        </Typography>

        {Component && <Component />}
      </Container>
    </>
  );
};

export default Page;
