export default class Select {

    oninput = (currentText) => { console.error("Nie podstawiono wydarzenia") }

    #rootInput
    #resultsDiv

    constructor() {
        this.#rootInput = document.createElement("input")
        this.#rootInput.type = "text"
        this.#rootInput.oninput = this.oninput

        this.#resultsDiv = document.createElement("div")
        this.#rootInput.appendChild(this.#resultsDiv)
    }

    clearResults = () => {
        this.#resultsDiv.innerHTML = ""
    }

    addRestult = (result) => {
        let newResultDiv = document.createElement("div")
        this.#resultsDiv.appendChild(newResultDiv)
    }

    getDOMElement = () => {
        return this.#rootInput
    }
}