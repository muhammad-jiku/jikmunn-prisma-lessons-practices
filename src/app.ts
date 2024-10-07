/** @format */

import cors from 'cors';
import express, { Application } from 'express';
import UsersRoutes from './modules/users/users.routes';

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', UsersRoutes);

export default app;
