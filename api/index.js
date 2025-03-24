import express, { json } from 'express' // require -> commonJS
import { moviesRouter } from '../routes/movies.js'
import { corsMiddleware } from '../middlewares/cors.js'

const app = express()
app.use(json())

app.use(corsMiddleware())

app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// OPTIONS

// Todos los recursos que sean MOVIES se identifica con /movies
app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1238
app.listen(PORT, () => {
  console.log(`Server listening at port http://localhost:${PORT}`)
})

export default app
