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
      return { ...initialState }
    }
    case 'ADMINISTRADOR' : {
      return { ...state, perfil: perfiles.ADMINISTRADOR }
    }
    case 'PROFESIONAL' : {
      return { ...state, perfil: perfiles.PROFESIONAL }
    }
    case 'VETERINARIA' : {
      return { ...state, perfil: perfiles.VETERINARIA }
    }
    case 'CLIENTE' : {
      return { ...state, perfil: perfiles.CLIENTE }
    }
  }
  return state
}
