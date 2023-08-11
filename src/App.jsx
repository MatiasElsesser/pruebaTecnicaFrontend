import { Home } from './components/Home'
import { ProfileProvider } from './hooks/useProfileReducer'

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
