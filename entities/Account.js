module.exports = class Account {
    #balance
    // Só pode ser modificado por:
    // deposit
    // loan
    // tranfer


    constructor(user) {
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    addDeposit(deposit) {
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    addLoan(loan) {
        this.#balance += loan.value
        this.loans.push(loan)
    }

    addTransfer(transfer) {
        if (transfer.toUser.email === this.owner.email) {
            this.#balance += transfer.value
            this.transfers.push(transfer)
        } else if (transfer.fromUser.email === this.owner.email) {
            this.#balance -= transfer.value
            this.transfers.push(transfer)
        }
    }
}