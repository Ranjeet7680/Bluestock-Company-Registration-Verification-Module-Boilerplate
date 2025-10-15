import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import authRoutes from './routes/authRoutes.js'
import companyRoutes from './routes/companyRoutes.js'
import { initDB } from './db/index.js'


dotenv.config()


const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json({ limit: '5mb' }))
app.use(compression())


// connect db
await initDB()


app.use('/api/auth', authRoutes)
app.use('/api/company', companyRoutes)


app.use((err, req, res, next) => {
console.erro
