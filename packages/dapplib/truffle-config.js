require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain proof install clog olympic submit'; 
let testAccounts = [
"0x6916bdbce1c71577e22bfabf1a815b8762a2676c1c039f0f5a13e256434398e5",
"0x9a3b5718ec5b5f1f2c42dba5a96f0e57316c078962857108de5c2f5e81635936",
"0x649b2303ee069a5c9b37b4f5114ec3fdddd9a7bccd47b092a50312fa45b9165a",
"0xd6257aad930343664bb42679a7b830b9a7eb2a9392b9fb36731b8368a18edde9",
"0xfdcdaa16d5ab96ff49c12fdc4a262dbc4c1b74630b5eedc826a93ac7d81b97c7",
"0xd826421573cb219276190905cd348a56c44befa18d8697f06302b5c5b7100bf7",
"0xdd98cbe9561f6e0c96dfdbc07f58db714199caa036c7354e530528308d89b08f",
"0x48982244a65ef3c5e0deb826bf6957d56d5f4c1477bf2cba8088a16d8d5615f2",
"0xec044a16259cf0368a0ed548634ec58a5ee377f2d3852a67c922a211a69f940a",
"0x9e8ecc4cb473db80c4628a12eeee02e7097125f084a6572f681b1307ad4f9b65"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
