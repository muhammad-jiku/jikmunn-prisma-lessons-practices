/** @format */

import { Request, Response } from 'express';
import { PostServices } from './posts.services';

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostServices.createPost(req.body);
    res.status(201).json({
      success: true,
      data: result,
      message: 'Post created successfully!',
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Something went wrong!',
    });
  }
};

const getPosts = async (req: Request, res: Response) => {
  try {
    const options = req.query;
    const result = await PostServices.getPosts(options);
    res.status(200).json({
      success: true,
      total: result.total,
      data: result.data,
      message: 'Posts data retrieved successfully!',
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Something went wrong!',
    });
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await PostServices.updatePost(Number(id), req.body);

    res.status(200).json({
      success: true,
      data: result,
      message: 'Post updated successfully!',
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Something went wrong!',
    });
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await PostServices.deletePost(Number(id));

    res.status(200).json({
      success: true,
      data: result,
      message: 'Post deleted successfully!',
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Something went wrong!',
    });
  }
};

export const PostControllers = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
};
