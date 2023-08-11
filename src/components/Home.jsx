import { useContext, useState } from 'react'
import { ProfileContext } from '../hooks/useProfileReducer'
import { UserIcon, ShopCart, ShopIcon, SearchIcon } from '../icons/icons'
import { UserImageLabel } from './UserImageLabel'
import { Navbar } from './Navbar'
import { SelectProfile } from './SelectProfile'
import { ProductsPage } from './ProductPage'
import './Home.css'

export const Home = () => {
  const { state, user, isAuthenticated, logout } = useContext(ProfileContext)
  const [showBar, setShowBar] = useState(false)
  const [loadingLogin, setLoadinLogin] = useState(false)
  const [numberProduct, setNumberProduct] = useState(0)

  const handleClickMenu = () => {
    setShowBar(!showBar)
  }
  const handleClickLoadingLogin = () => {
    setLoadinLogin(!loadingLogin)
  }
  const handleClickProduct = (numIndex) => {
    console.log(numberProduct)
    setNumberProduct(numIndex)
  }
  return (
    <>
      {
        (loadingLogin && !isAuthenticated) && <SelectProfile cancelBtn={handleClickLoadingLogin} />
      }
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
          <ShopIcon className='icon' />
          <div className='search-container'>
            <SearchIcon />
            <input className='search-bar' type='text' placeholder='Buscar producto...' />
          </div>
          <div className='header-search-user'>
            {
              (isAuthenticated)
                ? <UserImageLabel userImg={user.picture} userName={user.name} />
                : <UserIcon />
            }

            <ShopCart />
          </div>
        </section>

        <hr />

        <section className='header-login'>
          <div className='header-login-nav'>
            <button className='navBar-btn' onClick={handleClickMenu}> Categorias </button>
            <nav>
              {showBar && <Navbar callBackProduct={handleClickProduct} />}
            </nav>
          </div>
          <div className='header-login-btn'>
            <p href='#'>{isAuthenticated ? 'Bienvenido ' + user.name : 'Home'}</p>
            {(isAuthenticated)
              ? <button onClick={() => logout()}> Cerrar sesión</button>
              : <button onClick={handleClickLoadingLogin}>Iniciar sesión</button>}
          </div>
        </section>
      </header>

      <main>
        <ProductsPage
          products={
          state.perfil[numberProduct]
        }
        />
      </main>
    </>
  )
}
