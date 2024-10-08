/** @format */

import express from 'express';
import { UsersControllers } from './users.controllers';

const UsersRoutes = express.Router();

UsersRoutes.route('/create').post(UsersControllers.createUser);
UsersRoutes.route('/profile').post(UsersControllers.createOrUpdateProfile);
UsersRoutes.route('/').get(UsersControllers.getUsers);
UsersRoutes.route('/:id').get(UsersControllers.getUser);

export default UsersRoutes;
