import React, { createContext, Children } from 'react'

export const StoreContext = createContext({
  store: {},
})

export const ProviderComponent = ({ children, store }) => (
  <StoreContext.Provider value={store}>
    {Children.only(children)}
  </StoreContext.Provider>
)
