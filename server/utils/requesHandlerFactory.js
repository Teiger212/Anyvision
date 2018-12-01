import { Request, Response } from 'express'

export const requestHandlerFactory = (wrapped) => {
    return async (req, res) => {
        try {
            const data = await wrapped(req)
            res.json({
                status: "success",
                data
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                status: "error",
                message: error.toString()
            })
        }
    }
}