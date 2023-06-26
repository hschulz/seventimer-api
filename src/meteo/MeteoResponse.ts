import type { MeteoDataEntry } from "./MeteoDataEntry"
import type { Response } from "../Response"

export interface MeteoResponse extends Response {

    /**
     * Type of the requested weather data.
     */
    product: "meteo",

    /**
     * The data entries for the weather request.
     */
    dataseries: MeteoDataEntry[]
}
