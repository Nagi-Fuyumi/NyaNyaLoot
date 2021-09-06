module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '*',
    },
    Rinkeby: {
      protocol: 'https',
      host: 'rinkeby.infura.io',
      path: 'v3/9aa3d95b3bc440fa88ea12eaa4456161',
      port: 443,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '4',
    }
  },
};
