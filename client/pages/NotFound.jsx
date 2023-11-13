import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2 className='text-2xl text-center'> Page Not Found </h2>
      <p className='text-center text-sm'> Go back to <Link className="decoration-primary underline" to='..'> Previous page</Link> </p>
    </div>
  )
}

export default NotFound;