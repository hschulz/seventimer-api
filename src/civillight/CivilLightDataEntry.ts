import { DetailedWeatherNames } from "../civil/CivilDataEntry"

export interface CivilLightDataEntry {

    /**
     * Format: YYYYMMDD
     * Example: 20221102
     */
    date: number,

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

    temp2m: {
        max: number,
        min: number
    },

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
    wind10m_max: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}
