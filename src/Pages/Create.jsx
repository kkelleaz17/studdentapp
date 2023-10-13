import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useUser } from '../Hooks/useUser';
export default function Create() {
    const User = useUser()
    const [UserInfo,SetUser] = useState({
        Email:'',
        Password:'',
        BDAY:'',
        Gender:'Male',
        Name:''
    })
    const Nav = useNavigate()
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
            var Data = await fetch('http://localhost:3000/Students/Create',options);
            var a = await Data.json()
            User.SetUser(a.data);
            Nav('/')
            }catch{
                alert('Error, Failed to create account!')
            }
        }
        FetchData()
    }
  return (
    <div className='h-full flex justify-center items-center'>
    <form className='flex-col flex w-96 p-8 gap-5 bg-slate-200' onSubmit={handleSubmit}>
        <h1 className='text-2xl font-semibold text-center'>Create</h1>
         <div className='flex flex-col'>
        <label>Email</label>

        <input type='email' className="p-4" placeholder='Enter Email' value={UserInfo.Email} onChange={(e)=>{SetUser(prev=>{
            return {...prev,Email:e.target.value}
        })}}></input>
        </div>

        <div className='flex flex-col'>
        <label>Name</label>

        <input type='Text' className="p-4" placeholder='Enter Email' value={UserInfo.Name} onChange={(e)=>{SetUser(prev=>{
            return {...prev,Name:e.target.value}
        })}}></input>
        </div>

        <div className='flex flex-col'>
        <label>Password</label>
        <input type='password' className="p-4" placeholder='Enter Password' value={UserInfo.Password}onChange={(e)=>{SetUser(prev=>{
            return {...prev,Password:e.target.value}
        })}}></input>
        </div>

        <div className='flex flex-col'>
        <label>Birthday</label>
        <input type='date' className="p-4" placeholder='Enter Password' value={UserInfo.BDAY}onChange={(e)=>{SetUser(prev=>{
            return {...prev,BDAY:e.target.value}
        })}}></input>
        </div>

        <div className='flex flex-col'>
        <label>Gender</label>
        <select value={UserInfo.Gender} className="p-4"  onChange={(e)=>{SetUser(prev=>{
            return {...prev,Gender:e.target.value}
        })}}>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        </div>



         <button type='submit' className="bg-slate-100 p-4">Create</button>
         <Link className='text-center' to={'/Login'}>Already have an account?</Link>
    </form>
    </div>
  )
}
