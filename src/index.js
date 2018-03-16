import '@babel/polyfill'
import React from 'react'
import store from './store'
import ReactDOM from 'react-dom'
import asyncRoute from './asyncRoute'
import Loading from './components/loading'
import ErrorBoundary from './components/errorBoundary'
import { ProviderComponent } from './components/provider'

const App = asyncRoute(() => import('./router'), {
  loading: Loading,
})

const render = () => {
  const rootDom = document.getElementById('root')
  ReactDOM.render(
    <ProviderComponent store={store}>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
    </ProviderComponent>
    ,
    rootDom
  )
}


document.addEventListener('DOMContentLoaded', render)
