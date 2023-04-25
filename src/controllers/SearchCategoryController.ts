import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class SearchCategoryController{
    async handle(req: Request, res: Response){
        const { id } = req.params

        const category = await prismaClient.category.findFirst({
            where: {
                id
            }
        })

        return res.json(category)
    }
}