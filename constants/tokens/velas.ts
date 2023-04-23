const velasTokens = [
  {
    chainId: 106,
    address: '0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126',
    _scan:
      'https://evmexplorer.velas.com/token/0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126',
    symbol: 'WVLX',
    name: 'Wrapped VLX',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/KyberNetwork/dmm-interface/9c1efef2dc1c650adeac5ed7a370cad8e064f6be/src/assets/networks/velas-network.png',
  },
  {
    chainId: 106,
    address: '0xc111c29A988AE0C0087D97b33C6E6766808A3BD3',
    _scan:
      'https://evmexplorer.velas.com/token/0xc111c29A988AE0C0087D97b33C6E6766808A3BD3',
    symbol: 'BUSD',
    name: 'Multichain BUSD',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png',
  },
  {
    chainId: 106,
    address: '0xaBf26902Fd7B624e0db40D31171eA9ddDf078351',
    _scan:
      'https://evmexplorer.velas.com/token/0xaBf26902Fd7B624e0db40D31171eA9ddDf078351',
    symbol: 'WAG',
    name: 'Wagyu',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11354.png',
  },
  {
    chainId: 106,
    address: '0x01445C31581c354b7338AC35693AB2001B50b9aE',
    _scan:
      'https://evmexplorer.velas.com/token/0x01445C31581c354b7338AC35693AB2001B50b9aE',
    symbol: 'USDT',
    name: 'Multichain USDT',
    decimals: 6,
    logoURI: 'https://coin.top/production/logo/usdtlogo.png',
  },
  {
    chainId: 106,
    address: '0x8d9fB713587174Ee97e91866050c383b5cEE6209',
    _scan:
      'https://evmexplorer.velas.com/token/0x8d9fB713587174Ee97e91866050c383b5cEE6209',
    symbol: 'SCAR',
    name: 'Velhalla',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13250.png',
  },
  {
    chainId: 106,
    address: '0x72eB7CA07399Ec402c5b7aa6A65752B6A1Dc0C27',
    _scan:
      'https://evmexplorer.velas.com/token/0x72eB7CA07399Ec402c5b7aa6A65752B6A1Dc0C27',
    symbol: 'ASTRO',
    name: 'AstroSwap',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12120.png',
  },
  {
    chainId: 106,
    address: '0x3611Fbfb06ffBcEf9Afb210f6Ace86742e6c14a4',
    _scan:
      'https://evmexplorer.velas.com/token/0x3611Fbfb06ffBcEf9Afb210f6Ace86742e6c14a4',
    symbol: 'ADA',
    name: 'Ada Asset',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
  },
  {
    chainId: 106,
    address: '0x8a74BC8c372bC7f0E9cA3f6Ac0df51BE15aEC47A',
    _scan:
      'https://evmexplorer.velas.com/token/0x8a74BC8c372bC7f0E9cA3f6Ac0df51BE15aEC47A',
    symbol: 'PLSPAD',
    name: 'PULSEPAD.io',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12416.png',
  },
  {
    chainId: 106,
    address: '0x6EF5D1aB0642ceF5227465e209f92675008558cA',
    _scan:
      'https://evmexplorer.velas.com/token/0x6EF5D1aB0642ceF5227465e209f92675008558cA',
    symbol: 'VSH',
    name: 'VELASSHIBA',
    decimals: 9,
    logoURI: '',
  },
  {
    chainId: 106,
    address: '0xa065e0858417Dfc7abC6f2BD4D0185332475C180',
    _scan:
      'https://evmexplorer.velas.com/token/0xa065e0858417Dfc7abC6f2BD4D0185332475C180',
    symbol: 'VLXPAD',
    name: 'Velas Pad',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11654.png',
  },
  {
    chainId: 106,
    address: '0x4cBA3447E51239065310E24c02C190945ad761d9',
    _scan:
      'https://evmexplorer.velas.com/token/0x4cBA3447E51239065310E24c02C190945ad761d9',
    symbol: 'MNFT',
    name: 'MarvelousNFT',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16218.png',
  },
  {
    chainId: 106,
    address: '0x62858686119135cc00C4A3102b436a0eB314D402',
    _scan:
      'https://evmexplorer.velas.com/token/0x62858686119135cc00C4A3102b436a0eB314D402',
    symbol: 'METAV',
    name: 'METAVPAD.com',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13978.png',
  },
  {
    chainId: 106,
    address: '0xd12f7A98C0d740E7Ec82E8caF94EB79C56D1B623',
    _scan:
      'https://evmexplorer.velas.com/token/0xd12f7A98C0d740E7Ec82E8caF94EB79C56D1B623',
    symbol: 'VDGT',
    name: 'VeleroDAO',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18282.png',
  },
  {
    chainId: 106,
    address: '0x09bcE7716D46459DF7473982Fd27A96EabD6eE4d',
    _scan:
      'https://evmexplorer.velas.com/token/0x09bcE7716D46459DF7473982Fd27A96EabD6eE4d',
    symbol: 'BITORB',
    name: 'Bitorbit',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12255.png',
  },
  {
    chainId: 106,
    address: '0x9Ab70e92319f0b9127df78868Fd3655fB9f1E322',
    _scan:
      'https://evmexplorer.velas.com/token/0x9Ab70e92319f0b9127df78868Fd3655fB9f1E322',
    symbol: 'WWY',
    name: 'WeWay Token',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17047.png',
  },
  {
    chainId: 106,
    address: '0xF800F6977a7F98eAca9163e549be17bbdA84394a',
    _scan:
      'https://evmexplorer.velas.com/token/0xF800F6977a7F98eAca9163e549be17bbdA84394a',
    symbol: 'VHT',
    name: 'Velhalla Token',
    decimals: 18,
    logoURI: '',
  },
  {
    chainId: 106,
    address: '0x32561fA6D2D3E2191bF50f813DF2C34fb3C89B62',
    _scan:
      'https://evmexplorer.velas.com/token/0x32561fA6D2D3E2191bF50f813DF2C34fb3C89B62',
    symbol: 'VERVE',
    name: 'VERVETV.app',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16902.png',
  },
  {
    chainId: 106,
    address: '0x2217e5921B7edfB4BB193a6228459974010D2198',
    _scan:
      'https://evmexplorer.velas.com/token/0x2217e5921B7edfB4BB193a6228459974010D2198',
    symbol: 'QMALL',
    name: 'Qmall Token',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18059.png',
  },
  {
    chainId: 106,
    address: '0x9b6fbF0ea23faF0d77B94d5699B44062e5E747Ac',
    _scan:
      'https://evmexplorer.velas.com/token/0x9b6fbF0ea23faF0d77B94d5699B44062e5E747Ac',
    symbol: 'SWAPZ',
    name: 'Swapz',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10557.png',
  },
  {
    chainId: 106,
    address: '0x948E8c6E0c9035f7372a10e10f9f71cC81341053',
    _scan:
      'https://evmexplorer.velas.com/token/0x948E8c6E0c9035f7372a10e10f9f71cC81341053',
    symbol: 'VPUNKS',
    name: 'VelasPunks',
    decimals: 18,
    logoURI: '',
  },
  {
    chainId: 106,
    address: '0xe2C120f188eBd5389F71Cf4d9C16d05b62A58993',
    _scan:
      'https://evmexplorer.velas.com/token/0xe2C120f188eBd5389F71Cf4d9C16d05b62A58993',
    symbol: 'USDC',
    name: 'Multichain USDC',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
  },
  {
    chainId: 106,
    address: '0x85219708c49aa701871Ad330A94EA0f41dFf24Ca',
    _scan:
      'https://evmexplorer.velas.com/token/0x85219708c49aa701871Ad330A94EA0f41dFf24Ca',
    symbol: 'ETH',
    name: 'Multichain ETH',
    decimals: 18,
    logoURI:
      'https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0x85219708c49aa701871ad330a94ea0f41dff24ca/logo.png?raw=true',
  },
  {
    chainId: 106,
    address: '0xcd7509b76281223f5b7d3ad5d47f8d7aa5c2b9bf',
    _scan:
      'https://evmexplorer.velas.com/token/0xcd7509b76281223f5b7d3ad5d47f8d7aa5c2b9bf',
    symbol: 'USDV',
    name: 'USD Velero Stablecoin',
    decimals: 18,
    logoURI:
      'https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas/assets/0xcd7509b76281223f5b7d3ad5d47f8d7aa5c2b9bf/logo.png?raw=true',
  },
];

export default velasTokens;
