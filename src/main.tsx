import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './router/index.js'
import './index.css'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
