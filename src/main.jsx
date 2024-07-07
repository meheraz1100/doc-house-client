import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { router } from './Routes/Router'
import AuthProviders from './Providers/AuthProviders'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
            <ToastContainer />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>,
)
