const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getDash } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/mydash', protect, getDash)

module.exports = router