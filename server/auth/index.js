'use strict';
require('express-async-errors');
import { Router } from 'express'
import config from '../config/environment'
import { User } from '../config/db'
import local from './local'
import { setup } from './local/passport'

// Passport Configuration
setup(User, config);

const router = Router();

router.use('/local', local);

export default router;
