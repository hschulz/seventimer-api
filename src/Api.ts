import { Product, RequestParams } from "./Types"

export class Api {

    public readonly URL: string = "https://www.7timer.info/bin/api.pl"

    protected _params: RequestParams = {
        lat: "0.000",
        lon: "0.000",
        product: "civillight",
        output: "json"
    }

    public get params () {
        return this._params
    }

    public set lat (value: string) {
        this._params.lat = value
    }

    public set lon (value: string) {
        this._params.lon = value
    }

    public set product (value: Product) {
        this._params.product = value
    }

    public set output (value: "xml" | "json") {
        this._params.output = value
    }

    public set ac (value: string | number | undefined) {

        if (value === undefined) {
            delete this._params.ac
            return
        }

        this._params.ac = value
    }

    public set lang (value: string | undefined) {

        if (value === undefined) {
            delete this._params.lang
            return
        }

        this.params.lang = value
    }

    public set tzshift (value: -1 | 0 | 1 | undefined) {

        if (value === undefined) {
            delete this._params.tzshift
            return
        }

        this._params.tzshift = value
    }

    public set unit (value: "metric" | "british" | undefined) {

        if (value === undefined) {
            delete this._params.unit
            return
        }

        this._params.unit = value
    }

    public getQueryString (): string {
        const params = [
            "lat=" + this._params.lat,
            "lon=" + this._params.lon,
            "product=" + this._params.product,
            "output=" + this._params.output,
        ]

        if (this._params.ac) {
            params.push("ac=" + this._params.ac)
        }

        if (this._params.lang) {
            params.push("lang=" + this._params.lang)
        }

        if (this._params.tzshift) {
            params.push("tzshift=" + this._params.tzshift)
        }

        if (this._params.unit) {
            params.push("unit=" + this._params.unit)
        }

        return params.join("&")
    }

    public getRequestUrl (): string {
        return this.URL + "?" + this.getQueryString()
    }
}
