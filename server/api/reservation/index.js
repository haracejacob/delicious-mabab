import 'express-async-errors'
import {Router} from 'express'
import * as controller from './reservation.controller'
import * as auth from '../../auth/auth.service'

const router = Router();

router.get('/', auth.isAuthenticated(), controller.index)
router.get('/:id', auth.isAuthenticated(), controller.show)
router.post('/', auth.isAuthenticated(), controller.create)
router.delete('/:id', auth.hasRole('admin'), controller.destroy)
router.put('/:id', auth.hasRole('admin'), controller.change)
router.put('/:id/user', auth.isAuthenticated(), controller.changeUser)

export default router;
