import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import colorRoutes from './routes/colorRoutes.js';

// conexion con la DB
import './database/database.js';

// 1. Iniciar la aplicacion
const app = express();

// 2. Configuraciones generales
const PORT = process.env.PORT || 5000;

// 3. Middlewares
app.use(morgan('dev'));
app.use(cors()); // CROSS-ORIGIN-RESOURCE-SHARING
app.use(express.json());

// 4.Rutas
app.use('/api/v1/colors', colorRoutes);

// 5. Iniciar el loop del servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});
