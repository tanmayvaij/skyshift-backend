import { Request, Response } from "express";
import { ProjectModel, UserModel } from "../../models";

export const deleteAccount = async (req: Request, res: Response) => {
  await UserModel.deleteOne({ _id: req.user.userId })
  await ProjectModel.deleteMany({ userId: req.user.userId });

  res.json({ status: true, message: "Account deleted" });
};
