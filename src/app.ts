import express from "express";
import swaggerUI from "swagger-ui-express";
// import swagerDocs from "./swagger.json";

const app = express();

app.use(express.json());
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swagerDocs));

app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Bem vindo a api Tools HUB",
    });
});

export { app };
