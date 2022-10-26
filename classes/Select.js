export default class Select {

    oninput = (currentText) => { console.error("Nie podstawiono wydarzenia") }

    #rootDiv
    #input
    #resultsDiv

    constructor() {
        this.#rootDiv = document.createElement("div")

        this.#input = document.createElement("input")
        this.#rootDiv.appendChild(this.#input)
        this.#input.type = "text"
        this.#input.oninput = () => { this.oninput(this.#input.value) }

        this.#resultsDiv = document.createElement("div")
        this.#rootDiv.appendChild(this.#resultsDiv)
    }

    clearResults = () => {
        this.#resultsDiv.innerHTML = ""
    }

    addCity = (city, county, voivodship) => {
        let newResultDiv = document.createElement("div")
        newResultDiv.innerText = city.children[4].textContent + ", " + county + ", " + voivodship
        this.#resultsDiv.appendChild(newResultDiv)
    }

    getDOMElement = () => {
        return this.#rootDiv
    }
}