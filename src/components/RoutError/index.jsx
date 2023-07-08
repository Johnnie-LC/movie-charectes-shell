import React from "react";
import { useRouteError } from "react-router-dom";
import { Container } from "../../styles";
import Header from "../Header";

const Error = () => {
  const error = useRouteError();
  return (
    <Container>
      <Header />
      <p>{error.statusText || error.message}</p>      
    </Container>
  )
}

export default Error