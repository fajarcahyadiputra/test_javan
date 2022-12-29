const router = require('express').Router();
const {getsAssetKeluarga, createAssetkeluarga, deleteAssetKeluarga, updateAssetKeluarga} = require("../controllers/assets_keluarga")

router.get('/:keluarga_id', getsAssetKeluarga);
router.post('/', createAssetkeluarga);
router.delete('/', deleteAssetKeluarga);
router.patch("/", updateAssetKeluarga)

module.exports = router