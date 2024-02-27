import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const tokenVerifier = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.header("Authentication");

  if (!authToken)
    return res.json({ status: false, message: "Token not provided" });

  try {
    verify(authToken, process.env.JWT_SECRET!);
    next();
  } catch (err) {
    return res.json({ status: false, message: "Invalid token provided" });
  }
};
