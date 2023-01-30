let BlockChain = require( "./blockchain");
let Block = require( "./Block");
let Transaction = require( "./Transaction");
 
let blockChain = new BlockChain();
blockChain.createAdditionalBlock(new Block(1, new Date(), [new Transaction(123, "abcxyz", "xyzabc", 30, "btc"), new Transaction(999, "uyyuyy", "xxdzkj", 550, "btc"), new Transaction(653, "drerea", "kioolk", 70, "eth")]));
// blockChain.createAdditionalBlock(new Block(2, new Date(), [new Transaction(234, "sfgfsd", "rrttyu", 50, "eth"), new Transaction(555, "iuiuii", "rrttyu", 50, "eth"), new Transaction(553, "hghghg", "ffgfff", 80, "eth")]));
// blockChain.createAdditionalBlock(new Block(3, new Date(), [new Transaction(345, "srthhf", "oouyuu", 65, "btc"), new Transaction(452, "jhghgg", "rrttyu", 11, "eth"), new Transaction(230, "wewfgf", "ghjgtt", 230, "eth")]));
// blockChain.createAdditionalBlock(new Block(4, new Date(), [new Transaction(456, "sfgfss", "xzsdee", 4, "btc"), new  Transaction(780, "fgtfdd", "rrttyu", 22, "eth"), new Transaction(112, "qwewue", "hgyuyu", 280, "eth")]));
// blockChain.createAdditionalBlock(new Block(5, new Date(), [new Transaction(567, "xxcbbf", "nbvbcx", 545, "eth"), new Transaction(677, "fdfsaa", "uytttt", 33, "eth"), new Transaction(111, "hjhjh", "huiuii", 5480, "eth")]));
// blockChain.createAdditionalBlock(new Block(6, new Date(), [new Transaction(678, "uiyuyy", "dfgree", 5, "btc"), new Transaction(553, "ooouio", "yuyuuu", 55, "eth"), new Transaction(467, "eeeewq", "jgftft", 880, "eth")]));
// blockChain.createAdditionalBlock(new Block(7, new Date(), [new Transaction(789, "iughff", "opoiii", 125, "btc"), new Transaction(988, "aqQQQQ", "trewew", 01, "eth"), new Transaction(432, "eeeee", "khuuuu", 40, "eth")]));
// blockChain.createAdditionalBlock(new Block(8, new Date(), [new Transaction(890, "sdsrer", "sdfser", 99, "eth"), new Transaction(886, "gfgfdg", "qqqqqq", 88, "eth"), new Transaction(444, "gfgfd", "llllkl", 70, "eth")]));
// blockChain.createAdditionalBlock(new Block(9, new Date(), [new Transaction(901, "mnghjy", "dfgxbg", 65, "btc"), new Transaction(644, "dddsds", "wwwwww", 55, "eth"), new Transaction(333, "sdsaqq", "ererew", 50, "eth")]));
// blockChain.createAdditionalBlock(new Block(10, new Date(), [new Transaction(012, "vccvff", "uiyfvv", 74, "btc"), new Transaction(994, "mnmnmm", "qqqqhh", 66, "eth"), new Transaction(323, "qwqwqq", "wreret", 30, "eth")]));
 
console.log(JSON.stringify(blockChain, null, 20)); // let's view entire blockchain
 
console.log('Validate entire blockchain: ' + blockChain.isBlockChainValid()); // let's validate the blockchain is secure
 
blockChain.chain[1].hash = blockChain.chain[1].calculateBlockHash();  // let's try to recalculate hash for block 5
 
console.log('Is blockchain valid? ' + blockChain.isBlockChainValid()); 