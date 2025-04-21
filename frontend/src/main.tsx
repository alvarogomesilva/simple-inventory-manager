import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.css'
import App from './App'



createRoot(document.getElementById('root')!).render(
  <>
      <App />
      <Toaster duration={1500} position='bottom-right'/>
  </>
)
