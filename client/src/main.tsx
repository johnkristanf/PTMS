import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/tailwind.css'

import { RouterProvider } from 'react-router-dom'
import { ROUTER } from './router/route.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER} />
  </React.StrictMode>,
)
