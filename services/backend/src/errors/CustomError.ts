
export class CustomError extends Error {
    public isCustom = true
    public status: number
    public reason: string

    constructor(status: number, reason: string) {
        super(reason)
        this.status = status
        this.reason = reason
    }
}