import { useContext } from 'react'
import { ProfileContext } from '../hooks/useProfileReducer'
import './Navbar.css'

export const Navbar = ({ callBackProduct }) => {
  const { state } = useContext(ProfileContext)

  return (
    <ul>
      {state.perfil.map((item, index) => {
        return (
          <li key={index}>
            <a
              href='#'
              onClick={() => callBackProduct(index)}
            >
              {item}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
