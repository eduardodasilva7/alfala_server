import express from 'express'

const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Eduardo Silva!')
})

app.listen(port, () => {
    console.log(`Escutando na porta ${port}`)
})