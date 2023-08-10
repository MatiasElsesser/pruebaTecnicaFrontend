import { Home } from './components/Home'
// import { useContext } from 'react'
// import { SelectProfile } from './components/SelectProfile'
import { ProfileProvider } from './hooks/useProfileReducer'
// import { ComponenteDePrueba } from './components/ComponentedePureba'

function App () {
  return (
    <>
      <ProfileProvider>
        <Home />
      </ProfileProvider>
    </>
  )
}

export default App
