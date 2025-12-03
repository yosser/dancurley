import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PocketProvider } from './PocketProvider';

import './index.css'
import App from './App.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PocketProvider>
      <App />
    </PocketProvider>
  </StrictMode>,
)
