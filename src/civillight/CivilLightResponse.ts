import { CivilLightDataEntry } from "./CivilLightDataEntry"
import { Response } from "../Response"

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
