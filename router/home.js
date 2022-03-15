import { Router } from 'express';
import { addblog, create, list,  listblog,  read, remove, update } from '../controller/products';
import { checkAuth } from '../middeawe/checkAuth' 
const router = Router();

// resful API
router.get('/products', checkAuth, list);
router.post('/blog', checkAuth, addblog);
router.get('/listblog', checkAuth, listblog);
router.get('/product/:id', checkAuth, read);
router.post('/products', checkAuth, create);
router.delete('/product/:id', checkAuth, remove);
router.patch("/product/:id", checkAuth, update )

export default router;