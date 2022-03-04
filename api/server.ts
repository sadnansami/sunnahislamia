import express, { Router } from "express";
import serverless from "serverless-http"

const PORT = process.env.PORT || 2000
const app = express();
const router = Router()

router.get("/hello", (req: express.Request, res: express.Response) => {
    res.json({"hello": "Hi"})
})

app.use("/.netlify/functions/server", router)

module.exports.handler = serverless(app)