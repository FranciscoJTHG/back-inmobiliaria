import { Router } from "express";
import { 
    getUserLogin, 
    createUserLogin 
} from '../controllers/userLogin.controller';

const router = Router();

router.get('/user', getUserLogin);
router.post('/user', createUserLogin);
router.put('/user/:id');
router.delete('/user/:id');
router.get('/user:id');

export default router;