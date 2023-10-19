export type NewCareRequest = {
    kind: 'household' | 'medical'
    start: number
    end: number
    name: string
    additionalInformation: string
}

export type CareRequest = {
    id: string
    kind: 'household' | 'medical'
    start: number
    end: number
    name: string
    additionalInformation: string
    status?: 'open' | 'closed'
}

