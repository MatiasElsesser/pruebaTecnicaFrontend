import { Home } from './components/Home'
import './App.css'

function App () {
  return (
    <>
      <Home
        userImg='https://avatars.githubusercontent.com/u/105026551?v=4'
        userItems={['Literas', 'Comida de Perro', 'Comida de gato', 'Transportadoras']}
      />
      {/* <LoginButton />
      <LogoutButton /> */}
    </>
  )
}

export default App
