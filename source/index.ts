import express from 'express'

const port: Number = 4000
const app: express.Application = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => {
    console.log('App is listening on port ' + port)
})