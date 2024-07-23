const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const itemRoutes = require('./routes/itemRoutes')
const commentRoutes = require('./routes/commentRoutes')
const path = require('path')

dotenv.config()

const app = express()

const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests only from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(express.static(path.join(__dirname, '../client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
})

app.use(cors(corsOptions))
app.use(bodyParser.json())

connectDB()

app.use('/api/users', userRoutes)
app.use('/api/items', itemRoutes)
app.use('/api/comments', commentRoutes)

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to the Baby Clothes Exchange')
})

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true, 
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch(err => {
//     console.error(err)
// })

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
