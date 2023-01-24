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
})
