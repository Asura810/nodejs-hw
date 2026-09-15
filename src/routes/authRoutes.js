import { Router } from 'express';
import { celebrate } from 'celebrate';

import {
  registerUser,
  loginUser,
  refreshSession,
  logoutUser,
} from '../controllers/authController.js';

import {
  registerUserSchema,
  loginUserSchema,
} from '../validations/authValidation.js';

const router = Router();

router.post(
  '/auth/register',
  celebrate({
    body: registerUserSchema,
  }),
  registerUser,
);

router.post(
  '/auth/login',
  celebrate({
    body: loginUserSchema,
  }),
  loginUser,
);

router.post('/auth/refresh', refreshSession);

router.post('/auth/logout', logoutUser);

export default router;
