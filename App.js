const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const routes = require('./routes/routes')(app);

const server = app.listen(3003, function() {
    console.log("Listening on port ", server.address().port)
})