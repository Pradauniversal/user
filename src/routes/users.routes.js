const { Router } = require("express");
const userCntrl = require("../controlers/users.controler"); // Corregimos la ruta del controlador

const router = Router();



// CRUD create read update delete

router.get("/", userCntrl.getUser);
router.post("/", userCntrl.createUser);
router.get("/:id", userCntrl.getUserId);
router.put("/:id", userCntrl.editUser);
router.delete("/:id", userCntrl.deleteUser);

module.exports = router;