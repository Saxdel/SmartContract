const sha256= require('sha256');


function BlockChain(){   //constructor
    this.chain=[];
    this.pendingTransactions=[];  //pending transactions ce trebuie validate
    this.createNewBlock(100,'0','0');//genesis block primul bloc in blockchain
}

BlockChain.prototype.createNewBlock = function(nonce,previoueBlockHash,hash){     //metoda de creare a unui block now
    const newBlock={  
        index: this.chain.length+1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,  // verifica daca blocul a fost creat-> i se da un numar
        hash: hash,   //stocheaza informatia din blocul curent intr-un singur string
        previousBlockHash: previoueBlockHash   //are acces la informatia din blocul precedent

    };

    this.pendingTransactions= [];  //dupa ce cream un nou bloc informatia este stocata in el asa ca dam clear la array pentru urmatorul block
    this.chain.push(newBlock); //ia blocul now si il adauga in chain
    return newBlock;

};
BlockChain.prototype.getLastBlock= function(){
    return this.chain[this.chain.lenght-1];
};

BlockChain.prototype.createNewTransaction= function(amount,sender,recipient){
    const newTransaction= {
        amount: amount,
        sender: sender,
        recipient: recipient
    };
    this.pendingTransactions.push(newTransaction);
    
    return this.getLastBlock();   //??
};

BlockChain.prototype.hashBlock= function(previoueBlockHash, currentBlockData, nonce){
    const dataAsString= previoueBlockHash + nonce.toString() + JSON.stringify(currentBlockData);  //toate datele sunt concatenate intr-un singur string
    const hash= sha256(dataAsString);
    return hash;

}
BlockChain.prototype.proofOfWork =function(previoueBlockHash,currentBlockData) //securitate, folosim incrementarea nonce-ului pentru a genera 0000 la inceputul hashului astfel este foarte greu pentru a frauda sistemul
{
    let nonce = 0;
    let hash =this.hashBlock(previoueBlockHash,currentBlockData,nonce);
    while(hash.substring(0,4)!== '0000')
    {
        nonce++;
        hash=this.hashBlock(previoueBlockHash,currentBlockData,nonce);
        //console.log(hash);

    }
    return nonce;
}

module.exports=BlockChain;