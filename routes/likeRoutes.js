const express = require("express");
const router = express.Router();

const likeController = require("../controllers/likeController");

router.get("/", likeController.index); // Muesta el home, lista las cosas (render)
router.get("/", likeController.show); // Muestra uno solo. (render)
router.get("/", likeController.create); // Muestra el formulario para crear un articulo (render)
router.post("/", likeController.store); // Es un post, postea lo que se creo en create (redirect)
router.get("/", likeController.edit); // Retorna vista del formulario de edición (render)
router.get("/likes/update/:tweetId", likeController.update); // [PUT] o [PATCH] Retorna un redirect. Actualiza algo de la DB
router.get("/likes/destroy/:tweetId", likeController.destroy); // Borra un articulo de la DB. Retorna un redirect.

module.exports = router;
