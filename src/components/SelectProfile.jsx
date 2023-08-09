import { useContext } from 'react'
import { ProfileContext } from '../hooks/useProfileReducer'

export const SelectProfile = () => {
  const { selectCliente, selectProfesional, selectInvitado, selectAdministrador, selectVeterinaria } = useContext(ProfileContext)
  return (
    <div className='profile-container'>
      <div className='profiles'>
        <button onClick={selectCliente}>Cliente</button>
        <button onClick={selectProfesional}>Profesional</button>
        <button onClick={selectVeterinaria}>Veterinaria</button>
        <button onClick={selectAdministrador}>Administrador</button>
      </div>
      <button onClick={selectInvitado}>Cancelar</button>
    </div>
  )
}
