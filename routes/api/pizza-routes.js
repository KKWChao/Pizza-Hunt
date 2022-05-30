const router = require('express').Router()
const {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza
} = require('../../controllers/pizza-controller')

// routes for all
router
  .route('/')
  .get(getAllPizza)
  .post(createPizza)

// routes for id
router
  .route('/:id')
  .get(getPizzaById)
  .put(updatePizza)
  .delete(deletePizza)

module.exports = router;