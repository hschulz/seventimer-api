/**
 * Value used by the API to indicate an undefined numerical return value.
 */
export type ApiValueUndefinedNumber = -9999

/**
 * Value used by the API to indicate an undefined string return value.
 */
export type ApiValueUndefinedString = "-9999"

/**
 * The product identifiers used by the API.
 */
export type Product = "civil" | "civillight" | "two" | "astro" | "meteo"

export interface RequestParams {
    lat: string,
    lon: string,
    product: Product,
    output: "json" | "xml",
    ac?: string | number,
    lang?: string,
    unit?: "metric" | "british",
    tzshift?: -1 | 0 | 1
}

/**
 * Wind Speed
 *
 * ```text
 * 1     Below 0.3m/s (calm)
 * 2       0.3-3.4m/s (light)
 * 3       3.4-8.0m/s (moderate)
 * 4      8.0-10.8m/s (fresh)
 * 5     10.8-17.2m/s (strong)
 * 6     17.2-24.5m/s (gale)
 * 7     24.5-32.6m/s (storm)
 * 8     Over 32.6m/s (hurricane)
 * ```
 */
export type WindSpeed = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

/**
 * Cloud Cover
 *
 * ```text
 * 1    0%-6%
 * 2    6%-19%
 * 3    19%-31%
 * 4    31%-44%
 * 5    44%-56%
 * 6    56%-69%
 * 7    69%-81%
 * 8    81%-94%
 * 9    94%-100%
 * ```
 */
export type CloudCover = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/**
 * Lifted Index values from the 7timer! API.
 *
 * The lifted index (LI) is the temperature difference between the environment
 * Te(p) and an air parcel lifted adiabatically Tp(p) at a given pressure height
 * in the troposphere (lowest layer where most weather occurs) of the
 * atmosphere, usually 500 hPa (mb).
 *
 * ```text
 * -10    Below -7
 *  -6    -7 to -5
 *  -4    -5 to -3
 *  -1     -3 to 0
 *   2      0 to 4
 *   6      4 to 8
 *  10     8 to 11
 *  15     Over 11
 * ```
 */
export type LiftedIndex = -10 | -6 | -4 | -1 | 2 | 6 | 10 | 15
