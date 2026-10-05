import { http, HttpResponse } from 'msw/http'
import users from '../data/users.json'
import products from '../data/products.json'
import likes from '../data/likes.json'

export const handlers = [
  http.get(
    'http://localhost:8000/api/v1/uers/:id',
    ({ params }) => {
      const user = users.find(
        product => product.id === Number(params.id),
      )

      if (!user) {
        return new HttpResponse(null, { status: 404 })
      }

      return HttpResponse.json(user)
    },
  ),

  http.get(
    'http://localhost:8000/api/v1/products/:id',
    ({ params }) => {
      const product = products.find(
        product => product.id === Number(params.id),
      )

      if (!product) {
        return new HttpResponse(null, { status: 404 })
      }

      return HttpResponse.json(product)
    },
  ),

  http.get('http://localhost:8000/api/v1/likes', () => {
    return HttpResponse.json(likes)
  }),
]