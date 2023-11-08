import Joi from 'joi';

export const post_ColorSchema = Joi.object({
  name: Joi.string().trim().min(3).max(30).required()
  .messages({
    'string.min': 'El campo name debe tener al menos 3 caracteres',
    'string.max': 'El campo name debe tener un maximo de 30 caracteres',
    'any.required': 'El campo name es requerido',
    '*': 'Revisa el campo name',
  }),
  hex: Joi.string()
    .trim()
    .uppercase()
    .regex(/^#(?:[0-9a-fA-F]{6})$/)
    .required()
    .messages({
      'string.pattern.base':
        'El campo hex debe tener un # y 6 caracteres para ser un color hexadecimal',
      'any.required': 'El campo hex es requerido',
      '*': 'Revisa el campo hex',
    }),
  rgb: Joi.string()
    .trim()
    .uppercase()
    .regex(/^(rgb)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5])\)?)$/)
    .required()
    .messages({
      'string.pattern.base':
        'El campo rgb debe tener el formato de color rgb (x, y, z)',
      'any.required': 'El campo rgb es requerido',
      '*': 'Revisa el campo rgb',
    }),
});

export const put_ColorSchema = Joi.object({
    name: Joi.string().trim().min(3).max(30).required()
    .messages({
      'string.min': 'El campo name debe tener al menos 3 caracteres',
      'string.max': 'El campo name debe tener un maximo de 30 caracteres',
      'any.required': 'El campo name es requerido',
      '*': 'Revisa el campo name',
    }),
    hex: Joi.string()
      .trim()
      .uppercase()
      .regex(/^#(?:[0-9a-fA-F]{6})$/)
      .required()
      .messages({
        'string.pattern.base':
          'El campo hex debe tener un # y 6 caracteres para ser un color hexadecimal',
        'any.required': 'El campo hex es requerido',
        '*': 'Revisa el campo hex',
      }),
    rgb: Joi.string()
      .trim()
      .uppercase()
      .regex(/^(rgb)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5])\)?)$/)
      .required()
      .messages({
        'string.pattern.base':
          'El campo rgb debe tener el formato de color rgb (x, y, z)',
        'any.required': 'El campo rgb es requerido',
        '*': 'Revisa el campo rgb',
      }),
  });
