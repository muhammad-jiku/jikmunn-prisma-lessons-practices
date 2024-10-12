/** @format */

import express from 'express';
import { PostControllers } from './posts.controllers';

const routes = express.Router();

routes.route('/').get(PostControllers.getPosts);
routes.route('/create').post(PostControllers.createPost);

export const PostRoutes = routes;
