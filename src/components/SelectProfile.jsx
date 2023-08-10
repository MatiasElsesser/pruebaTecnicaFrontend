import './SelectProfile.css'
import { useContext } from 'react'
import { ProfileContext } from '../hooks/useProfileReducer'

export const SelectProfile = ({ cancelBtn }) => {
  const { selectCliente, selectProfesional, selectAdministrador, selectVeterinaria } = useContext(ProfileContext)
  return (
    <div className='profile-container'>
      <div className='profiles'>
        <button onClick={selectCliente}>Cliente</button>
        <button onClick={selectProfesional}>Profesional</button>
        <button onClick={selectVeterinaria}>Veterinaria</button>
        <button onClick={selectAdministrador}>Administrador</button>
        <div className='cancelar-container'>
          <button onClick={cancelBtn}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}
