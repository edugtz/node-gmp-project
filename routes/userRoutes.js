import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.get('/users/:id', userController.getUserById);
router.get('/users/:login', userController.getUserByLogin);
router.get('/users', userController.getAutoSuggestUsers);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.post('/users', userController.saveUser);

module.exports = router;
