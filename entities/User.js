const Account = require("./Account")

module.exports = class user {
    constructor(fullName, email) {
        this.name = fullName
        this.email = email
        this.account = new Account(this)
    }
}