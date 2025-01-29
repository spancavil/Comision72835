import { Router } from 'express'

export const ViewsRouter = Router()

const getUserById = async () => {
  //Simulando una API fetch. Para simular el error modificar el endpoint, ponerle un caracter al final, o algo así.
  const response = await fetch(
    'https://678bb1171a6b89b27a2b20cd.mockapi.io/api/v1/getOptions'
  )
  if (response.status !== 200) throw new Error('failed fetching')
  const options = await response.json()
  return options[0]
}

//EJEMPLO DE ERROR HANDLING
ViewsRouter.get('/', async (req, res, next) => {
  //Express will catch this (default error handler)
  // throw new Error('BROKEN')

  //Si definimos un custom error handler y no lo pasamos con next, no irá a ese error handler!
  try {
    // throw new Error('BROKEN')

    const options = await getUserById(next)
    res.render('home', options)
  } catch (error) {
    console.log('Entra al error')
    // Si enviamos el error (res.send) y luego hacemos un next() nos tirará el warning de cannot send headers
    // res.send('Error')
    next(error)
  }
})

ViewsRouter.get('/users', (req, res) => {
  const users = [
    { name: 'Carla', surname: 'Petovello' },
    { name: 'Claudia', surname: 'Saraza' },
  ]

  const options = {
    user: {
      name: 'Sebita',
      isAdmin: false,
    },
    userList: users,
  }
  res.render('users', options)
})

ViewsRouter.get('/socket', (req, res) => {
  res.render('socket', {})
})

export default ViewsRouter
