/** @format */

import express from 'express';
import { CategoryControllers } from './categories.controllers';

const routes = express.Router();

routes.route('/create').post(CategoryControllers.createCategory);

export const CategoryRoutes = routes;
