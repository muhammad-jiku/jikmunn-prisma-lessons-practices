/** @format */

import express from 'express';
import { UserControllers } from './users.controllers';

const routes = express.Router();

routes.route('/create').post(UserControllers.createUser);
routes.route('/profile').post(UserControllers.createOrUpdateProfile);
routes.route('/').get(UserControllers.getUsers);
routes.route('/:id').get(UserControllers.getUser);

export const UserRoutes = routes;
