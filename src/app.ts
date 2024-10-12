/** @format */

import cors from 'cors';
import express, { Application } from 'express';
import { CategoryRoutes } from './modules/categories/categories.routes';
import { PostRoutes } from './modules/posts/posts.routes';
import { UserRoutes } from './modules/users/users.routes';

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/categories', CategoryRoutes);
app.use('/api/v1/posts', PostRoutes);

export default app;
