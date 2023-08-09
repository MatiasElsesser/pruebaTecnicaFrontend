import { profileReducer, initialState } from '../reducer/perfiles'
import { useReducer, createContext } from 'react'
// import { useAuth0 } from '@auth0/auth0-react'

const useProfileReducer = () => {
  // const { loginWithRedirect } = useAuth0
  const [state, distpatch] = useReducer(profileReducer, initialState)

  const selectInvitado = () => {
    distpatch({
      type: 'INVITADO'
    })
  }

  const selectAdministrador = () => {
    distpatch({
      type: 'ADMINISTRADOR'
    })
    // loginWithRedirect()
  }

  const selectProfesional = () => {
    distpatch({
      type: 'PROFESIONAL'
    })
    // loginWithRedirect()
  }

  const selectVeterinaria = () => {
    distpatch({
      type: 'VETERINARIA'
    })
    // loginWithRedirect()
  }

  const selectCliente = () => {
    distpatch({
      type: 'CLIENTE'
    })
    // loginWithRedirect()
  }

  return { state, selectCliente, selectInvitado, selectAdministrador, selectProfesional, selectVeterinaria }
}

export const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
  const { state, selectCliente, selectInvitado, selectAdministrador, selectProfesional, selectVeterinaria } = useProfileReducer()

  return (
    <ProfileContext.Provider
      value={{ state, selectCliente, selectInvitado, selectAdministrador, selectProfesional, selectVeterinaria }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
