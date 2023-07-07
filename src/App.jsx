import React from "react";
import { createRoot } from 'react-dom/client';
import { Container } from "./styles";
import Header from "./components/header";
import './index.css'

const App = () => (
  <Container>
    <Header />
    <section>
      <h1 className='title'>Here I put the component Federation</h1>
    </section>
  </Container>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);

