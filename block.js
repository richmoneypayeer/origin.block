const hash = require('crypto-js/sha256'); // could also use object-hash, Stanford Javascript Crypto Library (SJCL), forge SHA-256, jsSHA, etc
 
class Block{
         
    constructor(index, blockCreatedWhen, blockTransactions, blockPreviousHash) {
        this.index = index ;
        this.blockCreatedWhen = blockCreatedWhen;
        this.blockTransactions = blockTransactions;  // an array of transactions
        this.blockPreviousHash = blockPreviousHash;
        this.hash = this.calculateBlockHash();
        this.nonce = 0;  // needed for proof of work
        this.merkleRoot = this.computeMerkleRoot()  // used to validate transactions within block
    } 
 
    calculateBlockHash() { 
        return hash(this.blockIndex + JSON.stringify(this.blockTransaction) + this.blockPreviousHash + this.blockCreatedWhen + this.nonce + this.merkleTreeRoot).toString();
    }
     
    computeMerkleRoot() {
        let treeList = this.generateMerkleTreeRoot();
         
        return treeList[treeList.length-1];
    }
 
    generateMerkleTreeRoot() {
        let tree = [];
        let transactionCount = this.blockTransactions.length;
 
        for (var i=0; i<transactionCount; i++) { tree.push(this.blockTransactions[i].hash); } let levelOffset = 0; for (let levelSize = transactionCount; levelSize > 1; levelSize = (levelSize + 1) / 2) {          
            for (let left = 0; left < levelSize; left += 2) {            
                let right = Math.min(left + 1, levelSize - 1);
                let tleft = tree[levelOffset + left];
                let tright = tree[levelOffset + right];
                tree.push(hash(tleft + tright));
            }            
            levelOffset += levelSize;
        }
 
        return tree;
    }
}
 
module.exports = Block;