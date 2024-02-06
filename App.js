const Deposit = require("./entities/Deposit")
const Loan = require("./entities/Loan")
const Transfer = require("./entities/Trasfer")
const user = require("./entities/User")

module.exports = class App {
    static #users = []

    static findUser(email) {
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    static createUser(email, fullName) {
        const userExist = App.findUser(email)
        if (!userExist) { 
            this.#users.push(new user(email, fullName))
        }
    }

    static deposit(email, value) {
        const user = App.findUser(email)
        if (user) {
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }

    static transfer(fromUserEmail, toUserEmail, value) {
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)
        if (fromUser && toUser) {
            const newTransfer = new Transfer(fromUser, toUser, value)
            fromUser.account.addTransfer(newTransfer)
            toUser.account.addTransfer(newTransfer)
        }
    }

    static loan(email, value, numberOfinstallments) {
        const user = App.findUser(email)
        if (user) {
            const newLoan = new Loan(value, numberOfinstallments)
            user.account.addLoan(newLoan)
        }
    }

    static changeLoanFee(newFeePercentage) {
        Loan.fee = newFeePercentage
    }
}