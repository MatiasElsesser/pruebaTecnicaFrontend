import { useAuth0 } from '@auth0/auth0-react'
export const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0()
  return (
    <>
      {isAuthenticated && (
        <div>
          <button
            onClick={() => logout()}
          > Cerrar sesion
          </button>
        </div>
      )}
    </>
  )
}
