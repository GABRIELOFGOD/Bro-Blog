const express = require('express')
const app = express()
const PORT = 3300

app.use('/', (req, res) => {
    res.send('hello')
})

app.listen(PORT, ()=>{
    console.log(`server listening at http://localhost:${PORT}`)
})

