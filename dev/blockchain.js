function BlockChain(){   //constructor
    this.chain=[];
    this.pendingTransactions=[];  //pending transactions ce trebuie validate

}

BlockChain.prototype.createNewBlock = function(nonce,previoueBlockHash,hash){     //metoda de creare a unui block now
    const newBlock={  
        index: this.chain.length+1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,  // verifica daca blocul a fost creat-> i se da un numar
        hash: hash,   //stocheaza informatia din blocul curent intr-un singur string
        previoueBlockHash: previoueBlockHash   //are acces la informatia din blocul precedent

    };

    this.pendingTransactions= [];  //dupa ce cream un nou bloc informatia este stocata in el asa ca dam clear la array pentru urmatorul block
    this.chain.push(newBlock); //ia blocul now si il adauga in chain
    return newBlock;

}
BlockChain.prototype.getLastBlock= function(){
    return this.chain[this.chain.lenght-1];
}

BlockChain.prototype.createNewTransaction= function(amount,sender,recipient){
    const newTransaction= {
        amount: amount,
        sender: sender,
        recipient: recipient
    }
    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index']+1;
}


module.exports=BlockChain;