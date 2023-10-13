import React from 'react'
import { useUser } from '../Hooks/useUser';
export default function Home() {
  const user = useUser().UserInfo;

  return (
    <div>
      <h1 className='text-center text-3xl my-10'> Welcome {user.Name}!</h1>
    </div>
  )
}
