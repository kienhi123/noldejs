import { Router } from 'express';
import { create,   list,   listUser,   read, remove, signin, signup, update } from '../controller/products';
import { checkAuth } from '../middeawe/checkAuth' 
const router = Router();

// resful API
// router.post('/signup', checkAuth,signup );
// router.post('/signin', checkAuth,signin);

router.get('/products', checkAuth, list);
router.get('/listuser', checkAuth, listUser);
router.get('/products/:id', checkAuth, read);
router.post('/products', checkAuth, create);
router.delete('/product/:id', checkAuth, remove);
router.patch("/product/:id", checkAuth, update )

export default router;