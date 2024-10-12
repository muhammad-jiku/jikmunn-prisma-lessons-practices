/** @format */

import { Request, Response } from 'express';
import { UserServices } from './users.services';

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createUser(req.body);
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
    const result = await UserServices.createOrUpdateProfile(req.body);
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
    const result = await UserServices.getUsers();
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
    const result = await UserServices.getUser(Number(id));
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

export const UserControllers = {
  createUser,
  createOrUpdateProfile,
  getUsers,
  getUser,
};
