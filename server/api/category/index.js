import 'express-async-errors'
import { Router } from 'express'
import * as controller from './category.controller'
import * as auth from '../../auth/auth.service'

const router = Router();

router.get('/', auth.isAuthenticated(), controller.index)
router.post('/', auth.hasRole('admin'), controller.create)
router.delete('/:id', auth.hasRole('admin'), controller.destroy)
router.put('/:id', auth.hasRole('admin'), controller.change)


export default router;
