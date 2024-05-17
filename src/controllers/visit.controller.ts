import express, { Request, Response, Router } from "express";
import {Visit} from "../mock-data/visit";

export const visitRoute = express.Router();

visitRoute.get("/info/visit/", (req: Request, res: Response) => {
    res.send(Visit.data[Visit.id]);
});
