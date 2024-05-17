import express, {Express} from "express";
import dotenv from "dotenv";
import { visitRoute } from "./controllers/visit.controller";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(visitRoute);

app.listen(port, () => {
    console.log(`[server]: Mock server is running at port: ${port}`);
});
