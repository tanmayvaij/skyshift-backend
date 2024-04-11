import { Request, Response } from "express";
import { ProjectModel } from "../../models";

export const createProject = async (req: Request, res: Response) => {

  const projectExists = await ProjectModel.findOne({ projectName: req.body.projectName });

  if (projectExists)
    return res.status(409).json({
      status: false,
      message: "Project with such name already exists",
    });

  await ProjectModel.create({ ...req.body, userId: req.user.userId });

  res.json({ status: true, message: "Project created successfully" });
};
