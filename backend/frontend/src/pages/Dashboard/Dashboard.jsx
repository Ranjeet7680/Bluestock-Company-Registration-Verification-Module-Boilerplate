import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProfileCard from '../../components/ProfileCard'
import MultiStepForm from '../../components/FormSteps/MultiStepForm'


export default function Dashboard() {
return (
<div style={{ padding: 20 }}>
<h1>Dashboard</h1>
<ProfileCard />
<Routes>
<Route path="/register-company" element={<MultiStepForm />} />
</Routes>
</div>
)
}
