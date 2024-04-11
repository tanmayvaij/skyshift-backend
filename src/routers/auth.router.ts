import { Router } from "express";

import { signIn, signUp } from "../handlers";
import { passwordHasher } from "../middlewares";

export const authRouter = Router();

authRouter.route("/sign-up").post(passwordHasher, signUp);
authRouter.route("/sign-in").post(signIn);
