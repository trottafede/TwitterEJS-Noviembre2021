const express = require("express");
const router = express.Router();

const tweetsController = require("../controllers/tweetController");

router.get("/", tweetsController.index); // Muesta el home, lista las cosas (render)
router.get("/", tweetsController.show); // Muestra uno solo. (render)
router.get("/", tweetsController.create); // Muestra el formulario para crear un articulo (render)
router.post("/", tweetsController.store); // Es un post, postea lo que se creo en create (redirect)
router.get("/", tweetsController.edit); // Retorna vista del formulario de edición (render)
router.patch("/", tweetsController.update); // [PUT] o [PATCH] Retorna un redirect. Actualiza algo de la DB
router.delete("/", tweetsController.destroy); // Borra un articulo de la DB. Retorna un redirect.

module.exports = router;
