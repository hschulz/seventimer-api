import type { CloudCover, LiftedIndex, WindSpeed } from "../Types"
import type { WindDirection } from "../civil/CivilDataEntry"

export interface AstroDataEntry {

    /**
     * Timepoint for this dataseries entry added to the hour given in the
     * response init hour.
     * So if the response init time is XXXXXXXX00 and the timepoint is 3,
     * the entry refers to 03:00 AM
     * Example: 3
     */
    timepoint: number,

    /**
     * Cloud Cover
     */
    cloudcover: CloudCover,

    /**
     * Astronomical seeing.
     * From left to right:
     * <0.5", 0.5"-0.75", 0.75"-1", 1"-1.25", 1.25"-1.5", 1.5"-2", 2"-2.5", >2.5".
     * In short, the smaller/bluer, the better the seeing condition is.
     */
    seeing: number,

    /**
     * Atmospheric transparency.
     * From left to right:
     * <0.3, 0.3-0.4, 0.4-0.5, 0.5-0.6, 0.6-0.7, 0.7-0.85, 0.85-1, >1 (unit: mag per air mass).
     * In short, the fewer bars/bluer, the better the transparency is.
     */
    transparency: number,

    /**
     * Lifted Index
     */
    lifted_index: LiftedIndex,

    /**
     * Relative Humidity
     * -4    0%-5%
     * -3    5%-10%
     * -2    10%-15%
     * -1    15%-20%
     *  0    20%-25%
     *  1    25%-30%
     *  2    30%-35%
     *  3    35%-40%
     *  4    40%-45%
     *  5    45%-50%
     *  6    50%-55%
     *  7    55%-60%
     *  8    60%-65%
     *  9    65%-70%
     * 10    70%-75%
     * 11    75%-80%
     * 12    80%-85%
     * 13    85%-90%
     * 14    90%-95%
     * 15    95%-99%
     * 16    100%
     */
    rh2m: number,

    /**
     * 10m Wind Information
     */
    wind10m: {

        /**
         * 10m Wind Direction
         */
        direction: WindDirection,

        /**
         * 10m Wind Speed
         */
        speed: WindSpeed
    },

    /**
     * 2m Temperature
     * -76 to 60
     */
    temp2m: number,

    /**
     * Precipitation Type
     */
    prec_type: "snow" | "rain" | "none"
}
