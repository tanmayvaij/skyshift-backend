import { Request, Response } from "express";
import { UserModel } from "../../models";

export const getProfile = async (req: Request, res: Response) => {
  const userProfile = await UserModel.findOne({ _id: req.user.userId }, { password: 0 });

  res.json({ status: true, userProfile });
};
