import express from "express";
import { utilisateurRoutes, authRoutes } from "./routes/index.js";

export const app = express();

app.use(express.json());

app.use('/utilisateur', utilisateurRoutes);
app.use('/auth', authRoutes);