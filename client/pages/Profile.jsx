import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='py-12 mx-auto items-center'>
        <h2 className='text-center text-xl capitalize font-bold'>user profile</h2>
        <div className='text-center my-3'>
            <BiUserCircle className='flex justify-center text-8xl mx-auto my-4' />
            <p className='text-2xl uppercase'>user name</p>
            <p className='text-sm capitalize'>user role</p>
        </div>
        <div className="flex font-bold my-4 justify-center items-center gap-5">
            <button className='capitalize border-2 border-primary bg-primary text-secondary rounded-sm mx-2 px-4 py-2'>edit profile</button>
            <button className='capitalize border-2 border-primary bg-transparent rounded-sm mx-2 px-4 py-2'>logout</button>
        </div>
        <div>
            <span className='text-center my-4'>You have written 106 blogs since you join this channel...  <Link to='' className='text-body'>Click here to view them</Link></span>
        </div>
    </div>
  )
}

export default Profile