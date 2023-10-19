import { CareRequest, NewCareRequest } from "api";

import { CustomError } from "../errors/CustomError";

export class CareRequestService {

    protected careRequests: Map<string, CareRequest>

    constructor() {
        this.careRequests = new Map()
    }

    createCareRequest(newCareRequest: NewCareRequest): Promise<string> {
        const id = ""
        const careRequest: CareRequest = {
            id: id,
            ...newCareRequest,
            status: 'open'
        }
        this.careRequests.set(id, careRequest)

        return new Promise((resolve) => {
            resolve(id)
        })
    }

    getAllCareRequests(): Promise<CareRequest[]> {
        return new Promise((resolve) => {
            resolve([...this.careRequests.values()])
        })
    }

    getSpecificCareRequest(id: string): Promise<CareRequest> {
        return new Promise((resolve, reject) => {
            const request = this.careRequests.get(id)
            if (request) {
                resolve(request)
            } else {
                reject(new CustomError(404, "Care request does not exist"))
            }
        })
    }
}

