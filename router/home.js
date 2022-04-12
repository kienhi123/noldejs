import { Router } from 'express';
import {    create, list,read, remove, search, searh, update } from '../controller/products';
import { userById } from '../controller/user';
import { checkAuth,isAdmin, isAuth, requireSignin} from '../middeawe/checkAuth' 
const router = Router();

// resful API
// router.post('/signup', checkAuth,signup );
// router.post('/signin', checkAuth,signin);

router.get('/products', checkAuth, list);
router.get('/products/:id', checkAuth, read);
router.post('/products/:userId',requireSignin,isAuth,isAdmin,create);
router.delete('/products/:id/:userId',requireSignin,isAuth,isAdmin, remove);
router.put('/products/:id/:userId', requireSignin,isAuth,isAdmin, update )
router.post('/search',search);

router.param("userId",userById);
export default router;