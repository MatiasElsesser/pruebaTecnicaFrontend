import { profileReducer, initialState } from '../reducer/perfiles'
import { useReducer, createContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const useProfileReducer = () => {
  const [state, dispatch] = useReducer(profileReducer, initialState)
  const { user, loginWithRedirect, isAuthenticated } = useAuth0()

  const selectInvitado = () => {
    dispatch({
      type: 'INVITADO'
    })
  }

  const selectAdministrador = () => {
    dispatch({
      type: 'ADMINISTRADOR'
    })
    loginWithRedirect()
  }

  const selectProfesional = () => {
    dispatch({
      type: 'PROFESIONAL'
    })
    loginWithRedirect()
  }

  const selectVeterinaria = () => {
    dispatch({
      type: 'VETERINARIA'
    })
    loginWithRedirect()
  }

  const selectCliente = () => {
    dispatch({
      type: 'CLIENTE'
    })
    loginWithRedirect()
  }

  return { state, selectCliente, selectInvitado, selectAdministrador, selectProfesional, selectVeterinaria, user, isAuthenticated }
}

export const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
  const { state, selectCliente, selectInvitado, selectAdministrador, selectProfesional, selectVeterinaria, user, isAuthenticated } = useProfileReducer()

  return (
    <ProfileContext.Provider
      value={{ state, selectCliente, selectInvitado, selectAdministrador, selectProfesional, selectVeterinaria, user, isAuthenticated }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
