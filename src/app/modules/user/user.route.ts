import express from 'express';
import {
  createUser,
  getAdminUsers,
  getUserById,
  getUsers,
} from './user.controller';

const router = express.Router();

router.get('/', getUsers);
router.get('/admins', getAdminUsers);
router.get('/:id', getUserById);
router.post('/', createUser);

export default router;
