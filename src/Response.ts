import type { AstroDataEntry } from "./astro/AstroDataEntry"
import type { CivilDataEntry } from "./civil/CivilDataEntry"
import type { CivilLightDataEntry } from "./civillight/CivilLightDataEntry"
import type { MeteoDataEntry } from "./meteo/MeteoDataEntry"
import type { Product } from "./Types"
import type { TwoDataEntry } from "./two/TwoDataEntry"

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
