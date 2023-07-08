import React from 'react'
import { HeaderContainer, NavMovies } from './styles'
import GoogleTraslateButton from './googleTranslate'
import { Link } from 'react-router-dom'

const movies = [
  {
    title: 'Harry Potter',
    url: '/HarryPotter',
    id: 1
  },
  {
    title: 'Rick and Morty',
    url: '/RickandMorty',
    id: 2
  }
]

const Header = () => {
  return(
  <HeaderContainer id="headerID">
    <h1>Personages</h1>
    <GoogleTraslateButton />
    <NavMovies>
        {
          movies.map(movie =>
            <Link to={movie.url} key={movie.id}>{movie.title}</Link>
          )
        }
    </NavMovies>
  </HeaderContainer>
)}

export default Header
