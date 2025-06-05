import express from 'express'

const app = express()
const PORT = 3000

/* Rutas */

app.get('/', (req, res) => res.send('Principal'))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))