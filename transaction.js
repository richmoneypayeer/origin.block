const hash = require('crypto-js/sha256');
 
class Transaction{
         
    constructor(transactionId, inputAccount, outputAccount, fee, amount, type, misc, timestamp) {
        this.transactionId = transactionId,   // could be hex address
        this.inputAccount = inputAccount;    // sender
        this.outputAccount = outputAccount;   // receiver
        this.fee = fee;    // fee of transaction
        this.amount = amount;    // amount of transaction processed
        this.type = type;      // type of transaction
        this.misc = misc;     // misc note text
        this.timestamp = timestamp    // timestamp of block
        this.hash = this.calculateTransactionHash();  // hash of the transaction
    } 
 
    calculateTransactionHash() { 
        return hash(this.transactionId + this.inputAccount + this.outputAccount + this.fee + this.amount + this.type + this.misc + this.timestamp).toString();
    }
}
 
module.exports = Transaction;