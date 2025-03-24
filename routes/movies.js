import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'
// Mejor manera actualmente de importar un JSON en ESMODULES

// ---------------------------------------------------------
export const moviesRouter = Router()

moviesRouter.get('/', MovieController.getAll)

moviesRouter.get('/:id', MovieController.getById)

moviesRouter.post('/', MovieController.create)

moviesRouter.delete('/:id', MovieController.delete)

moviesRouter.patch('/:id', MovieController.update)
