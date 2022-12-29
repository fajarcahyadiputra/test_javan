const router = require('express').Router();
const {getsKeluarga, createKeluarga, updateKeluarga, deleteKeluarga} = require("../controllers/keluarga")

router.get('/', getsKeluarga);
router.post('/', createKeluarga);
router.patch('/', updateKeluarga);
router.delete('/', deleteKeluarga);

module.exports = router