import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../Hooks/useUser';
export default function Login() {
    const [UserInfo,SetUser] = useState({
        Email:'',
        Password:''
    })
    const Nav = useNavigate()
    const User = useUser()
    const handleSubmit =(e)=>{
        e.preventDefault();
        const FetchData =async()=>{
            try{
            var options = {
                method: 'POST',
                body: JSON.stringify(UserInfo),
                headers: {
                  'Content-Type': 'application/json' 
                }
              };
            var Data = await fetch('http://localhost:3000/Login/Login',options);
            var a = await Data.json();
            console.log(a)
            User.SetUser(await a.data);
            Nav('/')
            }catch(err){
                // alert('Error, Failed to login!', err)
                console.log(err)
            }
        }
        FetchData()    }
  return (
    <div className='h-full flex justify-center items-center'>
    <form className='flex-col flex w-96 p-8 gap-5 bg-slate-200' onSubmit={handleSubmit}>
        <h1 className='text-2xl font-semibold text-center'>Login</h1>
         <div className='flex flex-col'>
        <label>Email</label>
        <input type='email' className="p-4" placeholder='Enter Email' value={UserInfo.Email} onChange={(e)=>{SetUser(prev=>{
            return {...prev,Email:e.target.value}
        })}}></input>
        </div>
        <div className='flex flex-col'>
        <label>Password</label>
        <input type='password' className="p-4" placeholder='Enter Password' value={UserInfo.Password}onChange={(e)=>{SetUser(prev=>{
            return {...prev,Password:e.target.value}
        })}}></input>
        </div>


         <button type='submit' className="bg-slate-100 p-4">Login</button>
         <Link className='text-center' to={'/Create'}>Don't have an account?</Link>
    </form>
    </div>
  )
}
