/** @format */

import express from 'express';
import { PostControllers } from './posts.controllers';

const routes = express.Router();

routes.route('/').get(PostControllers.getPosts);
routes.route('/create').post(PostControllers.createPost);
routes
  .route('/:id')
  .patch(PostControllers.updatePost)
  .delete(PostControllers.deletePost);
routes.route('/group-and-aggregate').get(PostControllers.groupingAggregation);

export const PostRoutes = routes;
