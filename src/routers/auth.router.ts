import { Router } from "express";

import { signIn, signUp } from "../handlers";

export const authRouter = Router();

authRouter.route("/sign-up").post(signUp);
authRouter.route("/sign-in").post(signIn);
