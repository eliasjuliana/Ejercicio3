import Joi from 'joi';
import { post_ColorSchema } from '../helpers/validationSchemas/colorSchema.js';

export const validateBody = (req, res, next) => {
    const { body } = req;

    const { error } = post_ColorSchema.validate(body);

    if (error) {
        res.status(400).json({
          data: null,
          message: error.details[0].message,
        });
        return;
      }

    next();
};
