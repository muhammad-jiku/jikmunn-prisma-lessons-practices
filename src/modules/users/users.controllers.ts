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

const createOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UsersServices.createOrUpdateProfile(req.body);
    res.status(200).json({
      success: true,
      data: result,
      message: 'Profile created or updated successfully!',
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Something went wrong!',
    });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UsersServices.getUsers();
    res.status(200).json({
      success: true,
      data: result,
      message: 'Users data retrieved successfully!',
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Something went wrong!',
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UsersServices.getUser(Number(id));
    res.status(200).json({
      success: true,
      data: result,
      message: 'User data retrieved successfully!',
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
  createOrUpdateProfile,
  getUsers,
  getUser,
};
