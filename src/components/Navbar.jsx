import { useContext } from 'react'
import { ProfileContext } from '../hooks/useProfileReducer'
import './Navbar.css'

export const Navbar = () => {
  const { state } = useContext(ProfileContext)

  return (
    <ul>
      {state.perfil.map((item, index) => {
        return (
          <li key={index}>
            <a href='#'> {item} </a>
          </li>
        )
      })}
    </ul>
  )
}
