import { expect } from 'chai'
import { Api } from '..'

describe("Seventimer API", () => {

    it('should generate a valid url with zero lat / lon', () => {
        const api = new Api()

        expect(api.getRequestUrl()).to.equal("https://www.7timer.info/bin/api.pl?lat=0.000&lon=0.000&product=civillight&output=json")
    })

    it('should set all required parameters', () => {
        const api = new Api()
        api.lat = "52.520"
        api.lon = "13.404"
        api.product = "two"
        api.output = "xml"

        expect(api.getRequestUrl()).to.equal("https://www.7timer.info/bin/api.pl?lat=52.520&lon=13.404&product=two&output=xml")
    })

    it('should add and remove optional parameters', () => {

        const api = new Api()

        api.ac = "0"
        api.lang = "de"
        api.unit = "metric"
        api.tzshift = 1

        expect(api.getQueryString()).to.equal("lat=0.000&lon=0.000&product=civillight&output=json&ac=0&lang=de&tzshift=1&unit=metric")

        api.ac = undefined
        api.lang = undefined
        api.unit = undefined
        api.tzshift = undefined

        expect(api.getQueryString()).to.equal("lat=0.000&lon=0.000&product=civillight&output=json")
    })

    it('should return default params', () => {

        const api = new Api()

        const params = api.params

        expect(params.lat).to.equal("0.000")
        expect(params.lon).to.equal("0.000")
        expect(params.product).to.equal("civillight")
        expect(params.output).to.equal("json")
    })

    it('should return set params', () => {

        const api = new Api()

        api.lat = "52.520"
        api.lon = "13.404"
        api.product = "two"
        api.output = "xml"
        api.ac = "132"
        api.lang = "de"
        api.unit = "metric"
        api.tzshift = -1

        const params = api.params

        expect(params.lat).to.equal("52.520")
        expect(params.lon).to.equal("13.404")
        expect(params.product).to.equal("two")
        expect(params.output).to.equal("xml")
        expect(params.ac).to.equal("132")
        expect(params.lang).to.equal("de")
        expect(params.unit).to.equal("metric")
        expect(params.tzshift).to.equal(-1)
    })

    it('should return the api url', () => {

        const api = new Api()

        expect(api.URL).to.equal("https://www.7timer.info/bin/api.pl")
    })
})
