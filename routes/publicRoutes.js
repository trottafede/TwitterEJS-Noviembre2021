const express = require("express");
const router = express.Router();

const publicController = require("../controllers/publicController");

router.get("/", publicController.index); // Muesta el home, lista las cosas (render)
router.get("/", publicController.show); // Muestra uno solo. (render)
router.get("/", publicController.create); // Muestra el formulario para crear un articulo (render)
router.post("/", publicController.store); // Es un post, postea lo que se creo en create (redirect)
router.get("/", publicController.edit); // Retorna vista del formulario de edición (render)
router.patch("/", publicController.update); // [PUT] o [PATCH] Retorna un redirect. Actualiza algo de la DB
router.delete("/", publicController.destroy); // Borra un articulo de la DB. Retorna un redirect.

module.exports = router;
