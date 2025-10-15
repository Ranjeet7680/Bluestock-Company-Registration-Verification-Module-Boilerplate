import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/Dashboard/Dashboard'


function App() {
return (
<Routes>
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/dashboard/*" element={<Dashboard />} />
<Route path="/" element={<Navigate to="/login" replace />} />
</Routes>
)
}


export default App
