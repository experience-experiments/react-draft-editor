const path = require('path')
const express = require('express')
const http = require('http')
const port = 8080

const processCwd = process.cwd()
const publicPath = path.resolve(processCwd, 'pub/public')

const app = express()
const server = http.createServer(app)

app.use('/', express.static(publicPath))
app.use((req, res) => res.redirect('/')) // 404

app.set('port', port)
server.listen(port, '0.0.0.0')
server.on('error', (e) => console.log(`[React Draft Editor] ${e.message}`))
server.on('listening', () => console.log(`[React Draft Editor] ${port}`))
