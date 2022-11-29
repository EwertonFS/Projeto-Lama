import { BaseDatabase } from "./BaseDatabase";

private static table_name="LAMA_BANDS"

export class BandDataBase extends BaseDatabase{
    public async createBand(band:Band):Promise<void>{
        try {
            await this.getConnection()
            .insert{{
                id:band.getID()
                name:band.getName()
                music_genre: band.getMainGenre()
                responsible:band.getResponsible()
            }}
            .into()
        } catch (error) {
            
        }
    }
}