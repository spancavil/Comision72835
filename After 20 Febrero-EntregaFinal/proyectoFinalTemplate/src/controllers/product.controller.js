export class ProductController {
  constructor() {
    //Terminar de conectar con la clase de Service de Producto
    // this.productService = new ProductService
  }

  getProducts = async (req, res, next) => {
    try {
      let { limit, page, query, sort } = req.params
      limit = limit ?? 10
      page = page ?? 1
      query = query ?? ''
      sort = sort ?? null

      console.log({ limit, page, query, sort })

      /* const profileImage = req.profileImage
      const userCreated = await this.userService.createUser({
        email,
        firstName,g
        lastName,
        profileImage: profileImage?.path,
      }) */
      res.send({
        message: 'Get products',
        data: [],
      })
    } catch (error) {
      next(error)
    }
  }
}
