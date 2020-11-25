import React, {createContext, useState, useEffect} from 'react'
import Cookies from 'js-cookie';
import Router from 'next/router'

export const AuthContext = createContext()
const AuthProvider = ({children, userData}) => {
  const [user, setUser] = useState(userData)
  //Use Effect For Logout Automatic every tabs every windows
  useEffect(() => {
    const synLogout = e => {
      if(e.key === 'logout'){
        setUser(null)
        Router.push('/products')
      }
    }
    window.addEventListener('storage', synLogout)
    return () => {
      window.removeEventListener('storage', synLogout)
      window.localStorage.removeItem('logout')
    }
  }, [])

  const setAuthUser = userInfo => setUser(userInfo)
  //Create Logout on Context provider
  const signout = () => {
    Cookies.remove('jwtToken')
    setUser(null)
    localStorage.setItem('logout', Date.now())
    Router.push('/products')
  }
  return (
    <AuthContext.Provider value={{user, setAuthUser, signout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
