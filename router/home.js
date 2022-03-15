import { Router } from 'express';
import {  adduser, create,   list,   read, remove, update } from '../controller/products';
import { checkAuth } from '../middeawe/checkAuth' 
const router = Router();

// resful API
router.post('/user', checkAuth, adduser);
router.get('/products', checkAuth, list);
router.get('/product/:id', checkAuth, read);
router.post('/products', checkAuth, create);
router.delete('/product/:id', checkAuth, remove);
router.patch("/product/:id", checkAuth, update )

export default router;