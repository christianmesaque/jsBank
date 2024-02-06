const Installment = require("./Installment")

module.exports = class Loan {
    static #tax = 1.05
    
    constructor(value, installments) {
        this.value = value
        this.installments = []
        for (let i = 1; i <= installments; i++) {
            this.installments.push(new Installment((value * Loan.#tax) / installments, i))
        }
        this.createdAt = new Date()
    }

    static get fee() {
        return Loan.#tax
    }

    static set fee(newPorcentage) {
        Loan.#tax = 1 + (newPorcentage / 100) 
    }
}