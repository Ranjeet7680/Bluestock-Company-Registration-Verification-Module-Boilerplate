import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import api from '../../api/axios'


export default function MultiStepForm() {
const [step, setStep] = useState(0)
const { register, handleSubmit, getValues } = useForm({ defaultValues: {} })


const steps = [
'Company Info',
'Address',
'Logo & Banner',
'Confirm'
]


async function onSubmit(data) {
// combine values and call API
try {
await api.post('/company/register', data)
alert('Company saved')
} catch (err) {
console.error(err)
alert('Failed to save company')
}
}


return (
<div>
<h3>{steps[step]}</h3>
<form onSubmit={handleSubmit(onSubmit)}>
{step === 0 && (
<>
<input placeholder="Company name" {...register('company_name')} />
<input placeholder="Industry" {...register('industry')} />
<button type="button" onClick={() => setStep(1)}>Next</button>
</>
)}


{step === 1 && (
<>
<input placeholder="Address" {...register('address')} />
<input placeholder="City" {...register('city')} />
<button type="button" onClick={() => setStep(0)}>Back</button>
<button type="button" onClick={() => setStep(2)}>Next</button>
</>
)}


{step === 2 && (
<>
<p>Use ImageUploader to upload logos/banners</p>
<button type="button" onClick={() => setStep(1)}>Back</button>
<button type="button" onClick={() => setStep(3)}>Next</button>
</>
)}


{step === 3 && (
<>
<pre>{JSON.stringify(getValues(), null, 2)}</pre>
<button type="button" onClick={() => setStep(2)}>Back</button>
}
