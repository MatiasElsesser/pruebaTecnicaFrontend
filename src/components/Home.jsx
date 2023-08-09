import { useContext } from 'react'
import { ProfileContext } from '../hooks/useProfileReducer'
import { UserIcon } from '../icons/icons'

export const Home = ({ userImg }) => {
  const { state, user, isAuthenticated } = useContext(ProfileContext)
  console.log(user)
  return (
    <>

      <header className='header'>
        <section className='header-contacto'>

          <div className='header-contacto-info'>
            <p>Tel: +5493434473861</p>
            <p>mail: matiasfabianelsesser@gmail.com</p>
          </div>

          <div className='header-contacto-links'>
            <a href='#'>Theme FAQ</a>
            <a href='#'>Ayuda</a>
          </div>

        </section>

        <section className='header-search'>
          <img
            src='' alt='Logotipo'
          />
          <input type='text' />
          <div className='header-search-user'>
            {
            (isAuthenticated)
              ? <img src={user.picture} />
              : <UserIcon />
            }

            <a>Logo Carrito</a>
          </div>
        </section>

        <section className='header-login'>
          <a href='#'>Home</a>
          <a href='#'> Iniciar Sesion</a>
        </section>
      </header>

      <main>
        <nav>
          <ul>
            {state.perfil.map((item, index) => {
              return (
                <li key={index}>
                  <a href='#'> {item} </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <aside>
          <p>lorem ipsun</p>
        </aside>
      </main>
    </>
  )
}
