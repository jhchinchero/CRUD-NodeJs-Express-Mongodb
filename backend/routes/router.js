import { Router } from "express";
import { create, getUsers, update, delete_ } from "../controllers/user.controller.js";
const router = Router();
router.post('/users', create)
router.get('/users', getUsers )
router.put('/users/:id', update)
router.delete('/users/:id', delete_)
export default router;