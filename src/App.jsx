import React from "react";
import { createRoot } from 'react-dom/client';
import { Container } from "./styles";
import Header from "./components/header";
// import HarryPotter from 'harryPotter/HarryPotter'
import HarryPotter from "./remoteComponents/HarryPotter";
import './index.css'

const App = () => { 
  return(
  <Container>
    <Header />
    <section>
      <HarryPotter />
    </section>
  </Container>
)};

const root = createRoot(document.getElementById("app"));
root.render(<App />);

