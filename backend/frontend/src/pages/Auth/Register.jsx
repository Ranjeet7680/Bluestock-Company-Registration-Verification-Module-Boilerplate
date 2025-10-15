import React from 'react'
import { useForm } from 'react-hook-form'
import api from '../../api/axios'


export default function Register() {
const { register, handleSubmit } = useForm()


async function onSubmit(data) {
try {
await api.post('/auth/register', data)
alert('Registered — verify mobile OTP and email as instructed')
} catch (err) {
console.error(err)
alert(err?.response?.data?.message || 'Registration failed')
}
}


return (
<div style={{ maxWidth: 600, margin: 'auto' }}>
<h2>Register</h2>
<form onSubmit={handleSubmit(onSubmit)}>
<input placeholder="Full name" {...register('full_name')} />
<input placeholder="Email" {...register('email')} />
<input placeholder="Password" type="password" {...register('password')} />
<input placeholder="Mobile (with +91)" {...register('mobile_no')} />
<select {...register('gender')}>
<option value="m">Male</option>
<option value="f">Female</option>
<option value="o">Other</option>
</select>
<button type="submit">Register</button>
</form>
</div>
)
}
