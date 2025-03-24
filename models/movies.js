import { readJSON } from '../utils/utils.js'
import { randomUUID } from 'node:crypto'

const movies = readJSON('../movies.json')

export class MovieModel {
  static async getAll ({ genre }) {
    if (genre) {
      return movies.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
    }
  }

  static async getById ({ id }) {
    return movies.find(movie => movie.id === id)
  }

  static async create (input) {
    // en base de datos
    const newMovie = {
      id: randomUUID(), // uuid v4
      ...input.data
    }

    // Esto no sería REST, porque estamos guardando
    // el estado de la aplicación en memoria
    movies.push(newMovie)
    return newMovie
  }

  static async delete ({ id }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)
    if (movieIndex === -1) return false
    movies.splice(movieIndex, 1)
    return true
  }

  static async update ({ id, input }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)
    if (movieIndex === -1) return false
    const updateMovie = {
      ...movies[movieIndex],
      ...input
    }

    movies[movieIndex] = updateMovie
  }
}
