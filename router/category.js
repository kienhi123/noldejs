import { Router } from "express";
import { create, read } from "../controller/category";
const router = Router();

router.post('/category',create)
router.get('/category/:id',read)

export default router;