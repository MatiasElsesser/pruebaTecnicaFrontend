import { useContext } from 'react'
import { ProfileContext } from '../hooks/useProfileReducer'

export const SelectProfile = () => {
  const { selectCliente, selectProfesional } = useContext(ProfileContext)
  return (
    <div className='profile-container'>
      <div className='profiles'>
        <button onClick={selectCliente}>Cliente</button>
        <button onClick={selectProfesional}>Profesional</button>
        <button>Veterinaria</button>
        <button>Administrador</button>
      </div>
      <button>Cancelar</button>
    </div>
  )
}
