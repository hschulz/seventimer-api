import { AstroDataEntry } from "./astro/AstroDataEntry"
import { CivilDataEntry } from "./civil/CivilDataEntry"
import { CivilLightDataEntry } from "./civillight/CivilLightDataEntry"
import { MeteoDataEntry } from "./meteo/MeteoDataEntry"
import { Product } from "./Types"
import { TwoDataEntry } from "./two/TwoDataEntry"

export interface Response {

    /**
     * Type of the requested weather data.
     */
    product: Product,

    /**
     * The date and hour from which the response data originates.
     * Format: YYYYMMDDHH
     * Example: "2022103100"
     */
    init: string,

    /**
     * The data entries for the weather request.
     */
    dataseries: CivilDataEntry[] | CivilLightDataEntry[] | TwoDataEntry[] | AstroDataEntry[] | MeteoDataEntry[]
}
