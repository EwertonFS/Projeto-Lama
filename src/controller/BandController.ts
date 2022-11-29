import { Request, Response } from "express";
import { BandInputDTO } from "../model/B and";


export class BandController {
 
    async regtisterBand(req:Request, res:Response){
    
        const input: BandInputDTO = {
        name:req.body.name,
        mainGenre:req.body.mainGenre,
        responsible: req.body.responsible
    }

    const BandBusiness= ""

 }
}