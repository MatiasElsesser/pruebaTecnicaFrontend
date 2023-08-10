import { useContext } from 'react'
import { ProfileContext } from '../hooks/useProfileReducer'

export const Navbar = () => {
  const { state } = useContext(ProfileContext)

  return (
    <>
      {state.perfil.map((item, index) => {
        return (
          <li key={index}>
            <a href='#'> {item} </a>
          </li>
        )
      })}
    </>
  )
}
