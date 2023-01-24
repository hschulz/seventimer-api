export type PrecipitationType = "rain" | "snow" | "none"

export type WindDirection = "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW"

export type DetailedWeatherNames = "clearday" | "clearnight" | "pcloudyday" | "pcloudynight" | "mcloudyday" | "mcloudynight" | "cloudyday"
| "cloudynight" | "humidday" | "humidnight" | "lightrainday" | "lightrainnight" | "oshowerday" | "oshowernight"
| "ishowerday" | "ishowernight" | "lightsnowday" | "lightsnownight" | "rainday" | "rainnight" | "snowday"
| "snownight" | "rainsnowday" | "rainsnownight" | "tsday" | "tsnight" | "tsrainday" | "tsrainnight"

export interface CivilDataEntry {

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
     * 1    0%-6%
     * 2    6%-19%
     * 3    19%-31%
     * 4    31%-44%
     * 5    44%-56%
     * 6    56%-69%
     * 7    69%-81%
     * 8    81%-94%
     * 9    94%-100%
     */
    cloudcover: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,

    /**
     * Lifted Index
     * -10  Below -7
     * -6   -7 to -5
     * -4   -5 to -3
     * -1   -3 to 0
     * 2     0 to 4
     * 6     4 to 8
     * 10    8 to 11
     * 15    Over 11
     */
    lifted_index: -10 | -6 | -4 | -1 | 2 | 6 | 10 | 15,

    /**
     * Precipitation Type
     */
    prec_type: PrecipitationType,

    /**
     * Precipitation Amount / Type
     * 0    None
     * 1    0-0.25mm/hr
     * 2    0.25-1mm/hr
     * 3    1-4mm/hr
     * 4    4-10mm/hr
     * 5    10-16mm/hr
     * 6    16-30mm/hr
     * 7    30-50mm/hr
     * 8    50-75mm/hr
     * 9    Over 75mm/hr
     */
    prec_amount: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,

    /**
     * 2m Temperature
     * -76 to 60
     */
    temp2m: number,

    /**
     * 2m Relative Humidity
     * 0 to 100%
     */
    rh2m: string,

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
         * 1     Below 0.3m/s (calm)
         * 2     0.3-3.4m/s (light)
         * 3     3.4-8.0m/s (moderate)
         * 4     8.0-10.8m/s (fresh)
         * 5     10.8-17.2m/s (strong)
         * 6     17.2-24.5m/s (gale)
         * 7     24.5-32.6m/s (storm)
         * 8     Over 32.6m/s (hurricane)
         */
        speed: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    },

    /**
     * Weather Type
     * clearday, clearnight             Total cloud cover less than 20%
     * pcloudyday, pcloudynight         Total cloud cover between 20%-60%
     * mcloudyday, mcloudynight         Total cloud cover between 60%-80%
     * cloudyday, cloudynight           Total cloud cover over over 80%
     * humidday, humidnight             Relative humidity over 90% with total cloud cover less than 60%
     * lightrainday, lightrainnight     Precipitation rate less than 4mm/hr with total cloud cover more than 80%
     * oshowerday, oshowernight         Precipitation rate less than 4mm/hr with total cloud cover between 60%-80%
     * ishowerday, ishowernight         Precipitation rate less than 4mm/hr with total cloud cover less than 60%
     * lightsnowday, lightsnownight     Precipitation rate less than 4mm/hr
     * rainday, rainnight               Precipitation rate over 4mm/hr
     * snowday, snownight               Precipitation rate over 4mm/hr
     * rainsnowday, rainsnownight       Precipitation type to be ice pellets or freezing rain
     * tsday, tsnight                   Lifted Index less than -5 with precipitation rate below 4mm/hr
     * tsrainday, tsrainnight           Lifted Index less than -5 with precipitation rate over 4mm/hr
     */
    weather: DetailedWeatherNames
}
