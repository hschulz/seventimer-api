import type { CivilLightDataEntry } from "./CivilLightDataEntry"
import type { Response } from "../Response"

export interface CivilLightResponse extends Response {

    /**
     * Type of the requested weather data.
     */
    product: "civillight",

    /**
     * The data entries for the weather request.
     */
    dataseries: CivilLightDataEntry[]
}
