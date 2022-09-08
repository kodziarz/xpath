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

    evaluate = (request) => {
        return this.#xmlDoc.evaluate(request)
    }
}