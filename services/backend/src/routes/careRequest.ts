import { CareRequest, CreateSuccess, Failure, NewCareRequest } from "api";
import { Request, Response, Router } from "express";

import { CustomError } from "../errors/CustomError";
import { CareRequestService } from "../services/CareRequestService";

export default function setupCareRequestRouter(service: CareRequestService) {
    const router = Router()

    router.get('/', (_request: Request, response: Response<CareRequest[] | Failure>) => {
        service.getAllCareRequests()
            .then((requests) => {
                return response.status(200).json(requests)
            })
            .catch((error) => {
                return error instanceof CustomError ? response.status(error.status).json({ reason: error.message }) : response.status(500).json({ reason: 'server error' });
            })
    })

    router.get('/:id', (request: Request<{id: string}>, response: Response<CareRequest | Failure>) => {
        service.getSpecificCareRequest(request.params.id)
            .then((request) => {
                return response.status(200).json(request)
            })
            .catch((error) => {
                return error instanceof CustomError ? response.status(error.status).json({ reason: error.message }) : response.status(500).json({ reason: 'server error' });
            })
    })
    
    router.post('/', (request: Request<unknown, CreateSuccess | Failure, NewCareRequest>, response: Response<CreateSuccess | Failure>) => {
        service.createCareRequest(request.body)
            .then((id) => {
                return response.status(200).json({id: id})
            })
            .catch((error) => {
                return error instanceof CustomError ? response.status(error.status).json({ reason: error.message }) : response.status(500).json({ reason: 'server error' });
            })
    })

    return router
}