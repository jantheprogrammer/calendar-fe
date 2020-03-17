import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

import {eventsApi} from '../utils/api'

// Initial state
const initialState = []

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    axios
      .get(eventsApi.get)
      .then(res => {
        setState(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <GlobalContext.Provider value={{events: state}}>
      {children}
    </GlobalContext.Provider>
  )
}
