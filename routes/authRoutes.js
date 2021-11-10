const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.get("/login", authController.createLogin); // Muestra uno solo. (render)
router.get("/signUp", authController.createSignup); // Muestra uno solo. (render)

router.post("/login", authController.storeLogin); // Es un post, postea lo que se creo en create (redirect)
router.post("/signup", authController.storeSignup); // Es un post, postea lo que se creo en create (redirect)

router.get("/", authController.edit); // Retorna vista del formulario de edición (render)
router.patch("/", authController.update); // [PUT] o [PATCH] Retorna un redirect. Actualiza algo de la DB
router.delete("/", authController.destroy); // Borra un articulo de la DB. Retorna un redirect.

module.exports = router;
