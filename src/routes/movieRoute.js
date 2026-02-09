import express from 'express';
import * as controller from '../controllers/movieController.js';

const router = express.Router();

router.post('/movies', controller.create);
router.get('/movies', controller.getAll);
router.get('/movies/:id', controller.getById);
router.put('/movies/:id', controller.update);
router.delete('/movies/:id', controller.remove);

export default router;
