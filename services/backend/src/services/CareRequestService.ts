import { CareRequest, NewCareRequest } from "api";

import { CustomError } from "../errors/CustomError";

export class CareRequestService {

    protected careRequests: Map<string, CareRequest>

    constructor() {
        this.careRequests = new Map()
    }

    createCareRequest(newCareRequest: NewCareRequest): Promise<string> {
        const id = "" + this.careRequests.size
        const careRequest: CareRequest = {
            id: id,
            ...newCareRequest,
            status: 'open'
        }
        this.careRequests.set(id, careRequest)

        return new Promise((resolve) => {
            console.log(`Created care request with id: ${id}`)
            resolve(id)
        })
    }

    getAllCareRequests(): Promise<CareRequest[]> {
        return new Promise((resolve) => {
            console.log(`Getting all care request`)
            resolve([...this.careRequests.values()])
        })
    }

    getSpecificCareRequest(id: string): Promise<CareRequest> {
        return new Promise((resolve, reject) => {
            const request = this.careRequests.get(id)
            if (request) {
                console.log(`Get care request with id: ${id}`)
                resolve(request)
            } else {
                console.log(`Care request does not exist id: ${id}`)
                reject(new CustomError(404, "Care request does not exist"))
            }
        })
    }
}

