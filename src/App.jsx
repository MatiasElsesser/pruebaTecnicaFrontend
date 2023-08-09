import { Home } from './components/Home'
import './App.css'
import { useContext } from 'react'
// import { SelectProfile } from './components/SelectProfile'
import { ProfileContext, ProfileProvider } from './hooks/useProfileReducer'
import { SelectProfile } from './components/SelectProfile'
// import { ComponenteDePrueba } from './components/ComponentedePureba'

function App () {
  const { state } = useContext(ProfileContext)

  return (
    <>
      <ProfileProvider>

        <Home
          userImg='https://avatars.githubusercontent.com/u/105026551?v=4'
          userItems={state.perfil}
        />
        <SelectProfile />
      </ProfileProvider>

    </>
  )
}

export default App
