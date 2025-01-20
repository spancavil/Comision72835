import { Router } from 'express'
import { multerUploaderMiddleware } from '../middlewares/index.js'

export const PetsRouter = Router()

PetsRouter.get('/', (req, res) => {
  //get users
  res.send({ message: 'ok' })
})

/* PetsRouter.post('/', multerUploaderMiddleware.single('gatito'), (req, res) => {
  console.log(req.file)
  res.send({ message: 'Gatito uploaded' })
}) */

PetsRouter.post(
  '/',
  multerUploaderMiddleware.fields([
    { name: 'gatito1', maxCount: 1 },
    { name: 'gatito2', maxCount: 1 },
  ]),
  (req, res) => {
    console.log(req.files)
    for (const file of req.files) {
      //Logic here
    }
    res.send({ message: 'Gatito uploaded' })
  }
)

//Handling multiple files
/* const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
}) */
