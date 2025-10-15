import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './store/store'
import './index.css'


const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<Provider store={store}>
<QueryClientProvider client={queryClient}>
<BrowserRouter>
<App />
</BrowserRouter>
</QueryClientProvider>
</Provider>
</React.StrictMode>
)
