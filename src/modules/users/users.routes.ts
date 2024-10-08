/** @format */

import express from 'express';
import { UsersControllers } from './users.controllers';

const UsersRoutes = express.Router();

UsersRoutes.route('/create').post(UsersControllers.createUser);
UsersRoutes.route('/profile').post(UsersControllers.createOrUpdateProfile);

export default UsersRoutes;
