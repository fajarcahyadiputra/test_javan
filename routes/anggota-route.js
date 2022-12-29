const router = require('express').Router();
const {getsAnggota, createAnggota, deleteAnggota, getDetailAnggota, updateAnggota} = require("../controllers/anggota")

router.get('/:keluarga_id', getsAnggota);
router.post('/', createAnggota);
router.delete('/', deleteAnggota);
router.get('/detail/:id', getDetailAnggota);
router.patch("/", updateAnggota)

module.exports = router