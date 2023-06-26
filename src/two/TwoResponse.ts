import type { Response } from "../Response"
import type { TwoDataEntry } from "./TwoDataEntry"

export interface TwoResponse extends Response {

    /**
     * Type of the requested weather data.
     */
    product: "two",

    /**
     * The data entries for the weather request.
     */
    dataseries: TwoDataEntry[]
}
