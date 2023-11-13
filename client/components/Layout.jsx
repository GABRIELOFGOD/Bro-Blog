import { Outlet } from 'react-router-dom'

// ============= IMPORTING COMPONENTS ================ //
import Header from './header/Header'
import Footer from './footer/Footer'
import { ContextProvider } from '../context/finder'

const Layout = () => {
  return (
    <ContextProvider>
      <div className='px-4 md:max-w-[700px] bg-secondary mx-auto'>
        <Header />
        <div className=' px-2 md:px-8 lg:px-12 min-h-[80vh] text-primary'>
          <Outlet />
        </div>
        <Footer />
      </div> 
    </ContextProvider> 
  )
}

export default Layout