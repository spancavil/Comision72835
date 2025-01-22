import { Router } from 'express'

export const ViewsRouter = Router()

ViewsRouter.get('/', (req, res) => {
  let options = {
    title: 'Una app mágica',
    name: 'Sebita',
    surname: 'Ancavil',
  }
  res.render('home', options)
})

ViewsRouter.get('/users', (req, res) => {
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

export default ViewsRouter
