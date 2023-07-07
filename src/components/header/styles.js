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
    background-color: gray;
    min-width: 110px;
    text-align: center;
  }
`