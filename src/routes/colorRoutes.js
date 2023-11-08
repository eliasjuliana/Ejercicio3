import express from 'express';
import {
  deleteColor,
  getColors,
  postColor,
  putColor,
} from '../controllers/colorController.js';

import { validateBody } from '../middlewares/validateBody.js';
import { post_ColorSchema, put_ColorSchema } from '../helpers/validationSchemas/colorSchema.js';

const router = express.Router();

// GET
router.get('/', getColors);

// POST
router.post('/', (req, res, next) => validateBody(req, res, next, post_ColorSchema), postColor);

// PUT
router.put('/:id', (req, res, next) => validateBody(req, res, next, put_ColorSchema), putColor);

// DELETE
router.delete('/:id', deleteColor);

export default router;
