import { Router } from "express";

import { authRouter } from "./auth.router";
import { projectRouter } from "./project.router";
import { userRouter } from "./user.router";

export const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/project", projectRouter);
rootRouter.use("/user", userRouter);
