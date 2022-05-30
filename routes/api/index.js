const router = require("express").Router();
const pizzaRoutes = require("./pizza-routes");

// adding prefix of '/pizza' to routes created in 'pizza-routes.js'
router.use("/pizzas", pizzaRoutes);

module.exports = router;
