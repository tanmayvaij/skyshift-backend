import { Request, Response } from "express";
import { ProjectModel } from "../../models";

export const getProjects = async (req: Request, res: Response) => {
  const projects = await ProjectModel.find({ userId: req.user.userId });

  res.json({ status: true, projects });
};
