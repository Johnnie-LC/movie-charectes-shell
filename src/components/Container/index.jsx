import React from "react";
import Header from "../Header";
import { Outlet } from 'react-router-dom'
import { Container } from "../../styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <Outlet />      
    </Container>
  )
}

export default Home