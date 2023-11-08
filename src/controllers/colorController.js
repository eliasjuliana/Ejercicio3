import ColorModel from '../models/colorSchema.js';

// GET
export const getColors = async (_, res) => {
    try {
        const data = await ColorModel.find();

        const filteredData = data.filter((color) => color._doc.isActive === true);

        res.json({ data: filteredData, message: 'Colores encontrados' });
    } catch (e) {
        res.status(500).json({
            data: null,
            message: 'Ocurrio un error al conectarse a la DB',
        });
    }
};

// POST
export const postColor = async (req, res) => {
    const { body } = req;

    const newColor = new ColorModel({
      name: body.name,
      hex: body.hex,
      rgb: body.rgb,
      isActive: true,
    });

    try {
        await newColor.save();

        res.status(201).json({
          data: null,
          message: 'Color agregado exitosamente',
        });
    } catch (e) {
        if (e.message.includes('duplicate')) {
            res.status(400).json({
              data: null,
              message: 'El color ya fue creado',
            });
            return;
          }

          res.status(500).json({
            data: null,
            message: 'Ocurrio un error al guardar el color',
          });
        }
    };

// PUT
export const putColor = async (req, res) => {
    const {
      body,
      params: { id },
    } = req;

    try {
      const action = await ColorModel.updateOne({ _id: id }, body);

      if (action.matchedCount === 0) {
        res.status(400).json({
          data: null,
          message: 'No se encontro un color con ese id',
        });
        return;
      }

      res.json({
        data: null,
        message: 'El color ha sido actualizado exitosamente',
      });
    } catch (e) {
      res.status(500).json({
        data: null,
        message: 'Ocurrio un error al actualizar el color',
      });
    }
  };

  // DELETE
export const deleteColor = async (req, res) => {
    const {
      params: { id },
    } = req;

    try {
      const action = await ColorModel.updateOne({ _id: id }, { isActive: false });

      if (action.matchedCount === 0) {
        res.status(400).json({
          data: null,
          message: 'No se encontro un color con ese id',
        });
        return;
      }

      res.json({
        data: null,
        message: 'El color ha sido eliminado exitosamente',
      });
    } catch (e) {
      res.status(500).json({
        data: null,
        message: 'Ocurrio un error al eliminar el color',
      });
    }
  };
