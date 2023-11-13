import { NavLink, Link } from 'react-router-dom'

const ScrollBar = () => {
  
  const list = [
    {
      name: 'Business',
      path: 'blog/business'
    },
    {
      name: 'Politics',
      path: 'blog/politics'
    },
    {
      name: 'Entertainment',
      path: 'blog/entertainment'
    },
    {
      name: 'Sport',
      path: 'blog/sport'
    },
    {
      name: 'Foreign',
      path: 'blog/foreign'
    },
    {
      name: 'Lifestyle',
      path: 'blog/lifestyle'
    }
  ]
  
  return(
    <div className='max-w-full capitalize sticky top-6 mt-2 shadow-sm flex gap-2'>
      <Link to=''>latest</Link>
      <div className='max-w-full topic overflow-x-auto'>
        <div className='gap-3 capitalize'>
          {
            list.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className='px-3 py-1 capitalize text-sm md:text-md lister text-gray relative'
              >{item.name}</NavLink>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ScrollBar;