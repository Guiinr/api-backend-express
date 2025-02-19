import express from 'express'
import getUserController from '../controllers/user/getUserController'
import createUserController from '../controllers/user/createUserController.'
import editNameUserController from '../controllers/user/editNameUserController'
import updateUserController from '../controllers/user/updateUserController'
import deleteUserController from '../controllers/user/deleteUserController'

const router = express.Router()

router.get('/', getUserController)
router.post('/', createUserControllerUserController)
router.patch('/', editNameUserController)
router.put('/', updateUserController)
router.delete('/', deleteUserController)

export default router