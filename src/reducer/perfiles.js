export const perfiles = {
  INVITADO: ['Literas', 'Comida de perro', 'Comida de gato', 'Transportadoras', 'Juguetes', 'Peluqueria', 'Vacunas'],
  ADMINISTRADOR: ['Usuarios', 'Bitacoras', 'Errores de usuario', 'Permisos de usuario', 'Backup'],
  PROFESIONAL: ['Agenda', 'Veterinarias', 'Mascotas', 'Reportes de pago'],
  VETERINARIA: ['Profesionales', 'Mascotas', 'Cobros', 'Pagos'],
  CLIENTE: ['Mascotas', 'Agenda', 'Turno médico', 'Pagos', 'Historia Clinica']
}

export const initialState = { perfil: perfiles.INVITADO }

export const profileReducer = (state, action) => {
  const { type } = action

  switch (type) {
    case 'INVITADO' : {
      return initialState
    }
    case 'ADMINISTRADOR' : {
      state.perfil = perfiles.ADMINISTRADOR
      return state
    }
    case 'PROFESIONAL' : {
      state.perfil = perfiles.PROFESIONAL
      return state
    }
    case 'VETERINARIA' : {
      state.perfil = perfiles.VETERINARIA
      return state
    }
    case 'CLIENTE' : {
      state.perfil = perfiles.CLIENTE
      return state
    }
  }
  return state
}
