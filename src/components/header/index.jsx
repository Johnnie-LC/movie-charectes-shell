import React, { Suspense, lazy } from 'react'
import { HeaderContainer, NavMovies } from './styles'
import GoogleTraslateButton from './googleTranslate'
// const GoogleTraslateButton = lazy(()=>import('./googleTranslate'));
const movies = [
  {
    title: 'Harry Potter',
    url: 'url',
    id: 1
  },
  {
    title: 'Rick and Morty',
    url: 'url',
    id: 2
  }
]

const Header = () => {
  console.log({GoogleTraslateButton});
  return(
  <HeaderContainer id="headerID">
    <h1>Personages</h1>
    <GoogleTraslateButton />
    <NavMovies>
        {
          movies.map(movie => 
            <a href={movie.url} key={movie.id}>{movie.title}</a>)
        }
    </NavMovies>
  </HeaderContainer>
)}

export default Header
