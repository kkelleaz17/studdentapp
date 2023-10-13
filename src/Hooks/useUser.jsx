import React,{createContext,useContext,useState} from 'react'

const User = createContext(null);

 function useUser() {
  return useContext(User)
}

function UserContext({children}){
    const [UserInfo,SetUser] = useState({})
    return(
        <User.Provider value={{
            UserInfo:UserInfo,
            SetUser:SetUser
        }}>
            {children}
        </User.Provider>
    )
}

export {UserContext,useUser}