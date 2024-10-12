/** @format */

import { Request, Response } from 'express';
import { CategoryServices } from './categories.services';

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryServices.createCategory(req.body);
    res.status(201).json({
      success: true,
      data: result,
      message: 'Category created successfully!',
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Something went wrong!',
    });
  }
};

export const CategoryControllers = {
  createCategory,
};
