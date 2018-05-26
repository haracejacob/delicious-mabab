import 'express-async-errors'
import { Router } from 'express'
import * as controller from './reservationMenu.controller'
import * as auth from '../../auth/auth.service'

const router = Router();

router.delete('/:id', auth.isAuthenticated(), controller.destroy)
router.put('/:id', auth.hasRole('admin'), controller.change)
router.post('/', auth.hasRole('admin'), controller.create)

export default router;
