import { Router } from 'express'

export const UsersRouter = Router()

UsersRouter.get('/', (req, res) => {
  //get users
  res.send({ message: 'ok' })
})

UsersRouter.get('/:id', (req, res) => {
  res.send({ message: { ...req.params } })
})

UsersRouter.get('/users/view', (req, res) => {
  const users = [
    { name: 'Samira', surname: 'Bronze' },
    { name: 'Lara', surname: 'Croft' },
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
