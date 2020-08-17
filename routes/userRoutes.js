import { Router } from 'express';
import userController from '../controllers/userController';
import userValidation from '../middlewares/userValidation';

const router = Router();

router.get('/users/:id', userController.getUserById);
router.get('/users/:login', userController.getUserByLogin);
router.get('/users', userController.getAutoSuggestUsers);
router.put('/users/:id', userValidation.validateBodyParams, userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.post('/users', userValidation.validateBodyParams, userController.saveUser);

module.exports = router;
