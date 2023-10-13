import React,{useEffect, useState} from 'react'

export default function List() {
    const [Students,SetStudents] = useState([
        
    ])

    useEffect(()=>{
        const FetchData =async()=>{
            var Data = await fetch('http://localhost:3000/Students/')
           var a = await Data.json()
            SetStudents(await a.data)
        }
        FetchData()
    },[])

    const HandleDelete =()=>{

    }

    return (
      <div className='flex justify-center w-full flex-col items-center'>
          <input type='text' placeholder='Search'></input>
        
      <table className='w-4/5'>
          <thead className='bg-red-600 text-white'>
              <tr>
                  <th  className='p-4 text-left'>Student Name</th>
                  <th  className='p-4 text-left'>Email</th>
                  <th  className='p-4 text-left'>Buttons</th>
              </tr>
          </thead>
          <tbody>

                {Students && Students.map((e,i)=>{
                return <tr key={i}>
                  <td>{e.Name}</td>
                  <td>{e.Email}</td>
                  <td className='flex gap-2'>
                    <button className='bg-red-600 text-white p-4 rounded'>Edit</button>
                    <button className='bg-red-600 text-white p-4 rounded' onClick={()=>{HandleDelete(e._id)}}>Delete</button>
                  </td>
                 
                 </tr>
                })}
                
              
              
              
          </tbody>
      </table>
  </div>
     )
}
