require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remain soft harvest opinion swift shoe'; 
let testAccounts = [
"0x6f58d23ab930f5f671eb6d504d88663cad039fbdfff386368bec384b9d98b772",
"0xfd220344768a0b361ac5e7fa40db5b81ae65cbdadad8c596e3c7288f412d0a8d",
"0x843df5606bf9b75470d3c0680b146928077f50f4944d3aa88597c1279ba03b0c",
"0x07c141a76a137c19dfe0aae50cd2af2d436cdb262afba793f7b0386ff28d9a9b",
"0xb2e08e60df74bb5058b0ed389ef78100a042ac2cd3f104448073db71290111c3",
"0x0e7ae2c24fd85e17fb1218bdcc90e82713997c8d6cf644ee86f9464f94ac6073",
"0x5e864044fe1dace28069cd0a6503a02b3fcf76597c49d369ef97396762b20ec9",
"0x705adcb8d6261a27bb376affe896884d235caccd3606713d41dbd487fa2be514",
"0xe014f7197c260b59492d0a6a7cc2f9dc8927de076145e1e82600db1dca62349f",
"0x63b3c51339321121b832ebfa4bacd43554002f2a2a054470c2a3467328a611fa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


