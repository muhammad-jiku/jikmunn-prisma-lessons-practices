/** @format */

import { Request, Response } from 'express';
import { UsersServices } from './users.services';

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UsersServices.createUser(req.body);
    res.status(201).json({
      success: true,
      data: result,
      message: 'User created successfully!',
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Something went wrong!',
    });
  }
};

export const UsersControllers = {
  createUser,
};
