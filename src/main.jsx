import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from './components/ui/provider.jsx'
import { UserContext } from './components/UserContext.jsx'

async function enableMocking () {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser')

  return worker.start()
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider>
        <UserContext.Provider value={ {} }>
          <App/>
        </UserContext.Provider>
      </Provider>
    </StrictMode>,
  )
})