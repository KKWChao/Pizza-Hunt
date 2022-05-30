const router = require("express").Router();
const pizzaRoutes = require("./pizza-routes");
const commentRoutes = require('./comment-routes')

// adding prefix of '/pizza' to routes created in 'pizza-routes.js'
router.use("/pizzas", pizzaRoutes);
router.use('/comments',commentRoutes)


module.exports = router;
