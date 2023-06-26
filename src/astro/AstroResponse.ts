import type { AstroDataEntry } from "./AstroDataEntry"
import type { Response } from "../Response"

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
