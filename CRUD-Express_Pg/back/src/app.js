import express from "express";
import { utilisateurRoutes } from "./routes/index.js";

export const app = express();

app.use(express.json());

app.use("/utilisateur", utilisateurRoutes);