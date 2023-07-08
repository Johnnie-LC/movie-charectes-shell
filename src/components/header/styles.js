import { styled } from "styled-components";

export const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1:first-child {
    padding:10px;
    font-size:2rem;
    text-transform: capitalize;
  }
`
export const NavMovies = styled.nav`
  padding: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;

  a {
    padding: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    color: azure;
    background-color: #a2c784;
    min-width: 170px;
    text-align: center;
  }
`