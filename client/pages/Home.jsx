import ScrollBar from '../components/header/ScrollBar'

import { Outlet, useParams } from 'react-router-dom'
const Home = () => {
  
  return(
    <div>
      <ScrollBar />
      <Outlet />
    </div>
  )
}

export default Home