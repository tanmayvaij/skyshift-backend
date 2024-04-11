import { Schema, model } from "mongoose";

export const ProjectModel = model(
  "project",
  new Schema({
    userId: {
      required: true,
      type: String,
    },
    projectName: {
      required: true,
      type: String,
    },
    githubLink: {
      required: true,
      type: String,
    },
    githubBranch: {
      required: true,
      type: String,
      default: "master",
    },
    buildCommand: {
      required: false,
      type: String,
    },
    startCommand: {
      required: true,
      type: String,
    },
  })
);
