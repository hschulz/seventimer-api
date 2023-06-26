import type { CivilDataEntry } from "./CivilDataEntry"
import type { Response } from "../Response"

export interface CivilResponse extends Response {

    /**
     * Type of the requested weather data.
     */
    product: "civil",

    /**
     * The data entries for the weather request.
     */
    dataseries: CivilDataEntry[]
}
