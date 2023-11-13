import { BiUserCircle, BiSolidUserCircle } from 'react-icons/bi'
import { AiOutlinePlusCircle, AiFillPlusCircle, AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { FaRegNewspaper, FaNewspaper, FaCode } from 'react-icons/fa'

import { NavLink } from 'react-router-dom'
import { useRef, useState } from 'react'

const Footer = () => {
  //const [isActive, setActive] = useState(icon)
  const link = useRef()
  
  const items = [
    {
      name: 'what\'s new',
      icon: <FaRegNewspaper />,
      path: 'whats-new',
      active: <FaNewspaper />,
      value: 1
    },
    {
      name: 'for developers',
      icon: <FaCode />,
      path: 'developers',
      active: <FaCode />,
      value: 2
    },
    {
      name: 'news',
      icon: <AiOutlineHome />,
      path: '',
      active: <AiFillHome />,
      value: 3
    },
    {
      name: 'write',
      icon: <AiOutlinePlusCircle />,
      path: 'writer',
      active: <AiFillPlusCircle />,
      value: 4
    },
    {
      name: 'profile',
      icon: <BiUserCircle />,
      path: 'profile',
      active: <BiSolidUserCircle />,
      value: 5
    },
  ]
  
 //  if('active' in link.classList){
//     link.innerContent = item.active
//   }else{
//     link.innerContent = item.icon
//   }
  
  return(
    <div className='bg-darker px-2 md:px-8 lg:px-12 text-primary bottom-0 sticky z-10 w-full py-4'>
      <div className='flex relative transition-all duration-300 toggle justify-between px-3 '>
        {
          items.map((item, index) => (
            <NavLink
            ref={link}
              to={item.path}
              key={index}
              className=" text-lg transition-all duration-300"
            >{item.icon}</NavLink>
          ))
        }
      </div>
    </div>
  )
}


export default Footer