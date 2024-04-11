import { Router } from "express";

import { createProject, getProjects } from "../handlers";
import { tokenVerifier } from "../middlewares";

export const projectRouter = Router();

projectRouter.post("/create", tokenVerifier, createProject);
projectRouter.get("/get", tokenVerifier, getProjects);
