import express from 'express'
import UserRouter from './routers/user.router.js'
import mongoose from 'mongoose';

const app = express()

app.use('/api/users', UserRouter)

app.listen(8080, () => {
    console.log('Server is running on port 8080')
    })  



const MONGO_URL = `mongodb+srv://lokitan74138:1LGCC9ryZkanEJ1J@cluster0.cstf4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(MONGO_URL)
    .then(() => console.log('🟢 Conectado a MongoDB'))
    .catch(err => console.error('🔴 Error de conexión:', err));
