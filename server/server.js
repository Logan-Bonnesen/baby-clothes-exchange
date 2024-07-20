const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const itemRoutes = require('./routes/itemRoutes')
const commentRoutes = require('./routes/commentRoutes')

dotenv.config()

const app = express()

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
