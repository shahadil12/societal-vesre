import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  return res.json({ ok: true });
});

app.listen(port, () => {
  console.log("Server started...");
});
