import * as express from "express";

import setupCareRequestRouter from "./routes/careRequest";
import { CareRequestService } from "./services/CareRequestService";

const app = express();

const careRequestService = new CareRequestService()


app.use('/care-request', setupCareRequestRouter(careRequestService))

app.listen(8080);
