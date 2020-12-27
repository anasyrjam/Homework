const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.post('/data', function (req, res) {
    let objc = req.body;
    objc.name = "AnasJamal"
    res.json(objc)
})

app.get('/greeting/:name', (req, res) => {
    let { name } = req.params;
    let obj_data = { message: `Hello ${name}` };
    res.json(obj_data)
})

app.listen(port, () => {
    console.log(`server start at:${port}`)
})
