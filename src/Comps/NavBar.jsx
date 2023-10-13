import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../Hooks/useUser'
export default function NavBar() {
  const user = useUser().UserInfo;
  
  return (
    <nav className='p-4 flex flex-row bg-red-600 justify-between'>
      <div className='flex gap-5 text-white'>
        <Link to={'/'}>Home</Link>
        <Link to={'/studentlist'}>Student List</Link>
        <Link to={'/Search'}>Search Student</Link>
        <Link to={'/editStudents'}>Edit Students</Link>
       
      </div>
      <div className='flex gap-5 text-white'>
        <p>{user.Name ? user.Name : <Link to={'/login'}>Login</Link>}</p>
      </div>
    </nav>
  )
}


