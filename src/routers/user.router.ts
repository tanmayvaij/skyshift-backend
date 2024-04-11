import { Router } from "express";
import { deleteAccount, getProfile } from "../handlers";
import { tokenVerifier } from "../middlewares";

export const userRouter = Router();

userRouter.get("/get-profile", tokenVerifier, getProfile);
userRouter.delete("/delete-account", tokenVerifier, deleteAccount);
