const router = require('express').Router();
const {getsAssetAnggota, createAssetAnggota, updateAssetAnggota, deleteAssetAnggota} = require("../controllers/assets_anggota")

router.get('/:anggota_id', getsAssetAnggota);
router.post('/', createAssetAnggota)
router.delete('/', deleteAssetAnggota)
router.patch('/', updateAssetAnggota)

module.exports = router