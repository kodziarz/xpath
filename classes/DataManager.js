export default class DataManager {

    #xmlDoc

    constructor() {

    }

    init = async () => {

        let data = await fetch("/data/TERC.xml")
        data = await data.text()

        let parser = new DOMParser();
        this.#xmlDoc = parser.parseFromString(data, "text/xml");
    }

    findCities = (cityName) => {
        console.log("cityName: ", cityName);
        if (!("xd".match(/\w+/))) {
            console.log("string zawiera niedozwolone znaki");
            return null
        }
        // console.log("szukamy: ", "//teryt/catalog/row/NAZWA[starts-with(text(), '" + cityName + "')]");

        let result = this.#xmlDoc.evaluate("//teryt/catalog/row/NAZWA[starts-with(text(),'" + cityName + "')]/../WOJ[text()='12']/../RODZ[text()='4' or text()='9' or text()='1']/..", this.#xmlDoc, null, XPathResult.ANY_TYPE, null)
        let array = []
        let tmp = result.iterateNext()
        while (tmp) {
            array.push(tmp)
            tmp = result.iterateNext()
        }


        return array
    }

    findCountyNameByNumber = (voivodshipNumber, countyNumber) => {
        let result = this.#xmlDoc.evaluate("//teryt/catalog/row/WOJ[text()='" + voivodshipNumber + "']/../POW[text()='" + countyNumber + "']/../NAZWA", this.#xmlDoc, null, XPathResult.ANY_TYPE, null)
        console.log("result: ", result);
        return result.iterateNext().textContent
    }

    findVoivoshipNameByNumber = (voivodshipNumber) => {
        let result = this.#xmlDoc.evaluate("//teryt/catalog/row/WOJ[text()='" + voivodshipNumber + "']/../NAZWA", this.#xmlDoc, null, XPathResult.ANY_TYPE, null)
        return result.iterateNext().textContent
    }
}