import { ApiValueUndefinedNumber, CloudCover, WindSpeed } from "../Types"

export type ProfileLayer = "950mb" | "900mb" | "850mb" | "800mb" | "750mb"
| "700mb" | "650mb" | "600mb" | "550mb" | "500mb" | "450mb" | "400mb"
| "350mb" | "300mb" | "250mb" | "200mb"

export type PrecisionWindDirection = 0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60
| 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100 | 105 | 110 | 115 | 120
| 125 | 130 | 135 | 140 | 145 | 150 | 155 | 160 | 165 | 170 | 175 | 180
| 185 | 190 | 195 | 200 | 205 | 210 | 215 | 220 | 225 | 230 | 235 | 240
| 245 | 250 | 255 | 260 | 265 | 270 | 275 | 280 | 285 | 290 | 295 | 300
| 305 | 310 | 315 | 320 | 325 | 330 | 335 | 340 | 345 | 350 | 355 | 360

export type PrecipitationLabel = "none" | "0-0.25mm/hr" | "0.25-1mm/hr"
| "1-4mm/hr" | "4-10mm/hr" | "10-16mm/hr" | "16-30mm/hr" | "30-50mm/hr"
| "50-75mm/hr" | "Over 75mm/hr"

export interface RelativeHumidityProfile {

    /**
     * The pressure layer
     */
    layer: ProfileLayer,

    /**
     * Relative humidity
     * 0 to 100%
     */
    rh: number
}

export interface WindProfile {

    /**
     * The pressure layer
     */
    layer: ProfileLayer,

    /**
     * Direction in degrees
     */
    direction: PrecisionWindDirection,

    /**
     * Speed
     */
    speed: WindSpeed
}

export interface MeteoDataEntry {

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
     * Always -9999
     */
    highcloud: ApiValueUndefinedNumber,

    /**
     * Always -9999
     */
    midcloud: ApiValueUndefinedNumber,

    /**
     * Always -9999
     */
    lowcloud: ApiValueUndefinedNumber,

    /**
     * Relative humidity profile
     * 950hPa to 200hPa
     */
    rh_profile: RelativeHumidityProfile[],

    /**
     * Wind profile
     * 950hPa to 200hPa
     */
    wind_profile: WindProfile[],

    /**
     * 2m Temperature
     * -76 to 60
     */
    temp2m: number,

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
     * 2m Relative Humidity
     * 0 to 100%
     */
    rh2m: number,

    /**
     * Mean sea level pressure
     * 924-1060 mbar
     */
    msl_pressure: number,

    /**
     * 10m Wind Information
     */
    wind10m: {

        /**
         * 10m Wind Direction
         */
        direction: PrecisionWindDirection,

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
    prec_type: PrecipitationLabel,

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
     * 0    None
     * 1    0-1cm
     * 2    1-5cm
     * 3    5-10cm
     * 4    10-25cm
     * 5    25-50cm
     * 6    50-100cm
     * 7    100-150cm
     * 8    150-250cm
     * 9    250+cm
     */
    snow_depth: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
}
