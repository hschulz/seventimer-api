import type { Product, RequestParams } from "./Types"

/**
 * The API class.
 * This class is used to generate the URL for the API.
 * It also provides methods to set the parameters for the API.
 */
export class Api {

    /**
     * The base URL of the API.
     */
    public readonly URL: string = "https://www.7timer.info/bin/api.pl"

    /**
     * The default parameters for the API.
     */
    protected _params: RequestParams = {
        lat: "0.000",
        lon: "0.000",
        product: "civillight",
        output: "json"
    }

    /**
     * The currently set parameters for the API.
     */
    public get params (): RequestParams {
        return this._params
    }

    /**
     * Set the latitude parameter.
     */
    public set lat (value: string) {
        this._params.lat = value
    }

    /**
     * Set the longitude parameter.
     */
    public set lon (value: string) {
        this._params.lon = value
    }

    /**
     * Set the product parameter.
     */
    public set product (value: Product) {
        this._params.product = value
    }

    /**
     * Set the output format parameter.
     */
    public set output (value: "xml" | "json") {
        this._params.output = value
    }

    /**
     * Set the altitude correction parameter.
     * Passing undefined will remove the parameter.
     */
    public set ac (value: string | number | undefined) {

        if (value === undefined) {
            delete this._params.ac
            return
        }

        this._params.ac = value
    }

    /**
     * Set the language parameter.
     * Passing undefined will remove the parameter.
     */
    public set lang (value: string | undefined) {

        if (value === undefined) {
            delete this._params.lang
            return
        }

        this.params.lang = value
    }

    /**
     * Set the timezone shift parameter.
     * Passing undefined will remove the parameter.
     */
    public set tzshift (value: -1 | 0 | 1 | undefined) {

        if (value === undefined) {
            delete this._params.tzshift
            return
        }

        this._params.tzshift = value
    }

    /**
     * Set the unit parameter.
     * Passing undefined will remove the parameter.
     */
    public set unit (value: "metric" | "british" | undefined) {

        if (value === undefined) {
            delete this._params.unit
            return
        }

        this._params.unit = value
    }

    /**
     * Get the query string for the API.
     * This is the part of the URL after the question mark.
     *
     * @returns The query string for the API.
     */
    public getQueryString (): string {

        const params = [
            `lat=${this._params.lat}`,
            `lon=${this._params.lon}`,
            `product=${this._params.product}`,
            `output=${this._params.output}`,
        ]

        if (this._params.ac) {
            params.push(`ac=${this._params.ac}`)
        }

        if (this._params.lang) {
            params.push(`lang=${this._params.lang}`)
        }

        if (this._params.tzshift) {
            params.push(`tzshift=${this._params.tzshift}`)
        }

        if (this._params.unit) {
            params.push(`unit=${this._params.unit}`)
        }

        return params.join("&")
    }

    /**
     * Get the request URL for the API.
     * This is the full URL including the query string.
     *
     * @returns The request URL for the API.
     */
    public getRequestUrl (): string {
        return `${this.URL}?${this.getQueryString()}`
    }
}
