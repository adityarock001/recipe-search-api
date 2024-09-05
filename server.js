const express = require('express')
require('dotenv').config()
const connection = require('./src/helpers/db')
const userRoute = require('./src/routes/userRoute')
const recipeRoute = require('./src/routes/recipeRoute')
const favoriteRoute = require('./src/routes/favoriteRoute')

const app = express()
app.use(express.json())

app.use('/api/user', userRoute)
app.use('/api/recipe', recipeRoute)
app.use('/api/favorites', favoriteRoute)


app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})