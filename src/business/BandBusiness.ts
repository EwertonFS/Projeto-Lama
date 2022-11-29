import { UnauthorizedError } from './../error/UnauthorizedError';
import { InvalidInputError } from "../error/InvalidInputError";
import { BandInputDTO } from "../model/B and";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export class BandBusiness {
  //oque vou ter
    constructor(
    private bandDatabase: BandDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
    ){}
  //oque receber

  async resgisterBand(input: BandInputDTO, token: string){
     const tokenData =this.authenticator.getData(token)

     if(tokenData.role !== UserRole.ADMIN){
        throw new UnauthorizedError("Only admins can access this feature")
     }

     if(!input.name || !input.mainGenre ||!input.responsible ){
        throw new InvalidInputError("Invalid input to registerBand")
     }
  }

}