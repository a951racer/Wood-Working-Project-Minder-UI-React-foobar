import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useFetch} from '@freightview/client-react/providers/fetch'
//import {useBusy} from '@freightview/client-react/providers/busy'
import AuthContext from './context'

const AuthProvider = ({children}) => {
  const [userStatus, setUserStatus] = useState('logedOut')
  const [userId, setUserId] = useState(null)
  const [token, setToken] = useState(null)
  const { fetchViaApi } = useFetch()


  async function login(email, password) {
    //setBusy('login', true)
    let result = await fetchViaApi('GET', '/auth/login')
    setUserStatus('loggedIn')
    setUserId(result.userId)
    setToken(result.token)
    //setBusy('login', false)
  }

  async function logout() {
    setUserStatus('loggedOut')
    setUserId(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{
      userStatus,
      userId,
      token,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AuthProvider
