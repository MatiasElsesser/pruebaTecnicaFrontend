import { Home } from './components/Home'
import './App.css'
import { useContext } from 'react'
import { SelectProfile } from './components/SelectProfile'
import { ProfileContext } from './hooks/useProfileReducer'

function App () {
  const { state, selectProfesional } = useContext(ProfileContext)
  console.log(state.perfil)
  return (
    <>
      <Home
        userImg='https://avatars.githubusercontent.com/u/105026551?v=4'
        userItems={state.perfil}
      />
      <SelectProfile
        callBack={selectProfesional}
      />
      {/* <LoginButton />
      <LogoutButton /> */}
    </>
  )
}

export default App
