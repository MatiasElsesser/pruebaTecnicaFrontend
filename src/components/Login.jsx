import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  console.log(useAuth0())
  return (
    <button
      onClick={() => loginWithRedirect()}
    > Ingresar
    </button>
  )
}
