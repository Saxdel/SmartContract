const BlockChain= require('./blockchain');

const bitcoin = new BlockChain();

bitcoin.createNewBlock(2313,'01HBF00JDS233HJS','293SFKJDK29HSFJK');
bitcoin.createNewBlock(2321,'KGJGJKDJS28','213SDFSAFJK');
bitcoin.createNewBlock(9763,'JFH278FGSJKA','873FHSJA28JGKS');


console.log(bitcoin);
