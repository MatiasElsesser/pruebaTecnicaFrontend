import { profileReducer, initialState } from '../reducer/perfiles'
import { useReducer, createContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const useProfileReducer = () => {
  const [state, dispatch] = useReducer(profileReducer, initialState)
  const { user, isAuthenticated, logout, loginWithPopup } = useAuth0()

  const selectInvitado = () => {
    dispatch({
      type: 'INVITADO'
    })
  }

  const selectAdministrador = () => {
    dispatch({
      type: 'ADMINISTRADOR'
    })
    loginWithPopup()
  }

  const selectProfesional = () => {
    dispatch({
      type: 'PROFESIONAL'
    })
    loginWithPopup()
  }

  const selectVeterinaria = () => {
    dispatch({
      type: 'VETERINARIA'
    })
    loginWithPopup()
  }

  const selectCliente = () => {
    dispatch({
      type: 'CLIENTE'
    })
    loginWithPopup()
  }

  return { state, selectCliente, selectInvitado, selectAdministrador, selectProfesional, selectVeterinaria, user, isAuthenticated, logout }
}

export const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
  const { state, selectCliente, selectInvitado, selectAdministrador, selectProfesional, selectVeterinaria, user, isAuthenticated, logout } = useProfileReducer()

  return (
    <ProfileContext.Provider
      value={{ state, selectCliente, selectInvitado, selectAdministrador, selectProfesional, selectVeterinaria, user, isAuthenticated, logout }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
