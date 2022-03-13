import { Router } from 'express';
import { create, list, read, remove, update } from '../controller/products';
import { checkAuth } from '../middeawe/checkAuth' 
const router = Router();
// fake data
// const products = [
//     {id: 1, name: "Product A"},
//     {id: 2, name: "Product B"}
// ];

// router.get('/products', checkAuth, (req, res) => {
//     res.json(products);
// });
// router.get('/product/:id', checkAuth, (req, res) => {
//     res.json(products.find(item => item.id === +req.params.id));
// });
// router.post('/products', checkAuth,create);
// router.delete('/product/:id', checkAuth, (req, res) => {
//     res.json(products.filter(item => item.id !== +req.params.id));
// });
// resful API
router.get('/products', checkAuth, list);
router.get('/product/:id', checkAuth, read);
router.post('/products', checkAuth,create);
router.delete('/product/:id', checkAuth, remove);
router.patch("/product/:id", checkAuth, update )

export default router; 