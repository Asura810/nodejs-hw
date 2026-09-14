import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

import { connectMongoDB } from './db/connectMongoDB.js';
import notesRoutes from './routes/notesRoutes.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { logger } from './middleware/logger.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

const PORT = process.env.PORT || 3000;

app.use(notesRoutes);

app.use(errors());

app.use(notFoundHandler);
app.use(errorHandler);

const startServer = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
