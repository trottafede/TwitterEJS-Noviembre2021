const express = require("express");
const router = express.Router();

const usersController = require("../controllers/userController");

router.get("/", usersController.index); // Muesta el home, lista las cosas (render)
router.get("/", usersController.show); // Muestra uno solo. (render)
router.get("/", usersController.create); // Muestra el formulario para crear un articulo (render)
router.post("/", usersController.store); // Es un post, postea lo que se creo en create (redirect)
router.get("/", usersController.edit); // Retorna vista del formulario de edición (render)
router.patch("/", usersController.update); // [PUT] o [PATCH] Retorna un redirect. Actualiza algo de la DB
router.delete("/", usersController.destroy); // Borra un articulo de la DB. Retorna un redirect.

module.exports = router;
