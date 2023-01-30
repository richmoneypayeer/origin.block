let Block = require('./Block');
 
class BlockChain {
     
    constructor() {
        this.chain = [this.createBrandNewBlock()];
 
        //this.current_transactions = [];
    }
 
    createBrandNewBlock() {
        return new Block(0, new Date(), "Initial Block", ""); //no hash needed here since this is a manual creation of the first block.
    }
 
    createAdditionalBlock(newBlock) {
        ///very simplistic... could have more validation in place here.  
        let previousBlock = this.getLatestBlock();
        newBlock.index = previousBlock.index + 1; 
        newBlock.blockPreviousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateBlockHash(); //need to regenerate hash if any properties in our block changes
        this.chain.push(newBlock);
    }
 
    getLatestBlock() {
        return this.chain.slice(-1)[0];        
    }
 
    isEmpty() {
        return this.chain.length == 0;
    } 
 
    isBlockChainValid() { 
        for(let i = 1;i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
 
            if (currentBlock.blockPreviousHash != previousBlock.hash) { // does our block match up to correct previous hash property? 
                return false;
            }            
 
            if (currentBlock.hash != currentBlock.calculateBlockHash()) { // does the actual hash of the block match up to it's current hash property?
                return false;
            }     
              
            if (previousBlock.index + 1 !== currentBlock.index) { // do the indexes line up in order?
                return false;
            }  
        }
 
        return true;
    }
};
 
module.exports = BlockChain;