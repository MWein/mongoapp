const express = require('express')
const app = express()
const { corsOptionsRequests, corsSimpleRequests } = require('./middleware/cors')
const bodyParser = require('body-parser')
const removePoweredBy = require('./middleware/removePoweredBy')
const AllPosts = require('./services/AllPosts')
// const CreatePost = require('./services/CreatePost')
// const DeletePost = require('./services/DeletePost')

app.options('*', corsOptionsRequests)
app.use(corsSimpleRequests)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(removePoweredBy)

app.get('/posts', AllPosts)
// app.post('/create', CreatePost)
// app.delete('/delete', DeletePost)
// app.post('/edit', GetCustomers)

module.exports = app