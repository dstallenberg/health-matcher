import * as cors from 'cors'
import * as express from "express";

import setupCareRequestRouter from "./routes/careRequest";
import { CareRequestService } from "./services/CareRequestService";

const app = express();
app.use(cors({
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
}))

app.use((request, response, next) => {
    const { method, url, body } = request;

    console.log(
        `${Date.now()}: ${method} ${url} ${JSON.stringify(body)}`
      );    
    next()
})


const careRequestService = new CareRequestService()

app.use('/care-request', setupCareRequestRouter(careRequestService))


app.listen(8080);
