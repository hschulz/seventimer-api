import { AstroDataEntry } from "./AstroDataEntry"
import { Response } from "../Response"

export interface AstroResponse extends Response {

    /**
     * Type of the requested weather data.
     */
    product: "astro",

    /**
     * The data entries for the weather request.
     */
    dataseries: AstroDataEntry[]
}
