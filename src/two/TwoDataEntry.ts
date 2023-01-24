export type SimpleWeatherNames = "clear" | "mcloudy" | "cloudy" | "rain" | "snow" | "ts" | "tsrain"

export interface TwoDataEntry {

    /**
     * Timepoint for this dataseries entry added to the hour given in the
     * response init hour.
     * So if the response init time is XXXXXXXX00 and the timepoint is 3,
     * the entry refers to 03:00 AM
     * Example: 3
     */
    timepoint: number,

    /**
     * Always -9999
     */
    cloudcover: number,

    /**
     * Lifted Index
     * -10    Below -7
     * -6     -7 to -5
     * -4     -5 to -3
     * -1     -3 to 0
     *  2      0 to 4
     *  6      4 to 8
     * 10      8 to 11
     * 15      Over 11
     */
    lifted_index: -10 | -6 | -4 | -1 | 2 | 6 | 10 | 15,

    temp2m: {
        /**
         * Malformed
         */
        max: number,

        /**
         * Malformed
         */
        min: number
    },

    /**
     * 2m Relative Humidity
     * 0 to 100%
     */
    rh2m: number,

    /**
     * 10m Wind Information
     */
    wind10m: {

        /**
         * Always "-9999"
         */
        direction: string,

        /**
         * Always -9999
         */
        speed: number
    },

    /**
     * Weather
     * clear    Total cloud cover less than 20%
     * mcloudy  Total cloud cover between 20%-80%
     * cloudy   Total cloud cover over over 80%
     * rain     Rain with total cloud cover over 80%
     * snow     Snow with total cloud cover over 80%
     * ts       Lifted Index less than -5
     * tsrain   Lifted Index less than -5 with rain
     */
    weather: SimpleWeatherNames
}
