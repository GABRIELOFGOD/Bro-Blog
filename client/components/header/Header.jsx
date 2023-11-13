import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { white } from '../../tailwind.config'




const Header = () => {

  // const whiteBg = () => {
    
  // }

  const blueBg = () => {
    
  }

  const greenBg = () => {
    
  }

  const blackBg = () => {
    
  }

  return(
      <div className='bg-darker sticky top-0 z-10 py-2 max-w-full px-2 md:px-8 lg:px-12 shadow-white text-primary'>
        <div className=' justify-between grid grid-cols-3 '>
          <Link to='/' className='text-2xl font-sans font-extrabold'>
            LOGO
          </Link>
          <div className='flex gap-2 my-auto'>
            <div onClick={blackBg} className='h-2 w-2 rounded-full bg-black'></div>
            <div onClick={white} className='h-2 w-2 rounded-full bg-white'></div>
            <div onClick={blackBg} className='h-2 w-2 rounded-full bg-blue-500'></div>
            <div onClick={greenBg} className='h-2 w-2 rounded-full bg-green-500'></div>
            {/* <div onClick={''} className='h-2 w-2 rounded-full bg-red-500'></div> */}
          </div>
          <form className='flex my-auto relative'>
            <input 
              type="search"
              className='w-full bg-transparent border-primary px-2 outline-0 border-2 rounded-md'
            />
            <button className='absolute top-1 right-1 cursor-pointer'><BiSearchAlt /></button>
          </form>
        </div>
      </div>
  )
}

export default Header;