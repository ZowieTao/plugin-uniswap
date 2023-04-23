const avaxTokens = [
  {
    chainId: 43114,
    address: '0x39fC9e94Caeacb435842FADeDeCB783589F50f5f',
    _scan:
      'https://snowtrace.io/token/0x39fC9e94Caeacb435842FADeDeCB783589F50f5f',
    symbol: 'KNC',
    name: 'Kyber Network Crystal',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/KyberNetwork/dmm-interface/main/src/assets/images/KNC.svg',
  },
  {
    chainId: 43114,
    address: '0x938fe3788222a74924e062120e7bfac829c719fb',
    _scan:
      'https://snowtrace.io/token/0x938fe3788222a74924e062120e7bfac829c719fb',
    symbol: 'APEIN',
    name: 'Ape In',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/18262/small/apein.PNG',
  },
  {
    chainId: 43114,
    address: '0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17',
    _scan:
      'https://snowtrace.io/token/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17',
    symbol: 'DYP',
    name: 'DeFiYieldProtocol',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17/logo.png',
  },
  {
    chainId: 43114,
    address: '0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4',
    _scan:
      'https://snowtrace.io/token/0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4',
    symbol: 'XAVA',
    name: 'Avalaunch',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4/logo.png',
  },
  {
    chainId: 43114,
    address: '0x130966628846BFd36ff31a822705796e8cb8C18D',
    _scan:
      'https://snowtrace.io/token/0x130966628846BFd36ff31a822705796e8cb8C18D',
    symbol: 'MIM',
    name: 'Magic Internet Money',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/16786/small/mimlogopng.png?1624979612',
  },
  {
    chainId: 43114,
    address: '0x60781C2586D68229fde47564546784ab3fACA982',
    _scan:
      'https://snowtrace.io/token/0x60781C2586D68229fde47564546784ab3fACA982',
    decimals: 18,
    name: 'Pangolin',
    symbol: 'PNG',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0x60781C2586D68229fde47564546784ab3fACA982/logo.png',
  },
  {
    chainId: 43114,
    address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    _scan:
      'https://snowtrace.io/token/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    decimals: 18,
    name: 'Wrapped AVAX',
    symbol: 'WAVAX',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/logo.png',
  },
  {
    chainId: 43114,
    address: '0xd501281565bf7789224523144Fe5D98e8B28f267',
    _scan:
      'https://snowtrace.io/token/0xd501281565bf7789224523144Fe5D98e8B28f267',
    decimals: 18,
    name: '1INCH Token',
    symbol: '1INCH.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/1INCH/logo.png',
  },
  {
    chainId: 43114,
    address: '0x63a72806098Bd3D9520cC43356dD78afe5D386D9',
    _scan:
      'https://snowtrace.io/token/0x63a72806098Bd3D9520cC43356dD78afe5D386D9',
    decimals: 18,
    name: 'Aave Token',
    symbol: 'AAVE.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/AAVE/logo.png',
  },
  {
    chainId: 43114,
    address: '0x98443B96EA4b0858FDF3219Cd13e98C7A4690588',
    _scan:
      'https://snowtrace.io/token/0x98443B96EA4b0858FDF3219Cd13e98C7A4690588',
    decimals: 18,
    name: 'Basic Attention Token',
    symbol: 'BAT.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/BAT/logo.png',
  },
  {
    chainId: 43114,
    address: '0x19860CCB0A68fd4213aB9D8266F7bBf05A8dDe98',
    _scan:
      'https://snowtrace.io/token/0x19860CCB0A68fd4213aB9D8266F7bBf05A8dDe98',
    decimals: 18,
    name: 'Binance USD',
    symbol: 'BUSD.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/BUSD/logo.png',
  },
  {
    chainId: 43114,
    address: '0xc3048E19E76CB9a3Aa9d77D8C03c29Fc906e2437',
    _scan:
      'https://snowtrace.io/token/0xc3048E19E76CB9a3Aa9d77D8C03c29Fc906e2437',
    decimals: 18,
    name: 'Compound',
    symbol: 'COMP.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/COMP/logo.png',
  },
  {
    chainId: 43114,
    address: '0x249848BeCA43aC405b8102Ec90Dd5F22CA513c06',
    _scan:
      'https://snowtrace.io/token/0x249848BeCA43aC405b8102Ec90Dd5F22CA513c06',
    decimals: 18,
    name: 'Curve DAO Token',
    symbol: 'CRV.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/CRV/logo.png',
  },
  {
    chainId: 43114,
    address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    _scan:
      'https://snowtrace.io/token/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    decimals: 18,
    name: 'Dai Stablecoin',
    symbol: 'DAI.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/DAI/logo.png',
  },
  {
    chainId: 43114,
    address: '0x8a0cAc13c7da965a312f08ea4229c37869e85cB9',
    _scan:
      'https://snowtrace.io/token/0x8a0cAc13c7da965a312f08ea4229c37869e85cB9',
    decimals: 18,
    name: 'Graph Token',
    symbol: 'GRT.e',
    logoURI:
      'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/GRT.png',
  },
  {
    chainId: 43114,
    address: '0x5947BB275c521040051D82396192181b413227A3',
    _scan:
      'https://snowtrace.io/token/0x5947BB275c521040051D82396192181b413227A3',
    decimals: 18,
    name: 'ChainLink Token',
    symbol: 'LINK.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/LINK/logo.png',
  },
  {
    chainId: 43114,
    address: '0x88128fd4b259552A9A1D457f435a6527AAb72d42',
    _scan:
      'https://snowtrace.io/token/0x88128fd4b259552A9A1D457f435a6527AAb72d42',
    decimals: 18,
    name: 'Maker',
    symbol: 'MKR.e',
    logoURI:
      'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MKR.svg',
  },
  {
    chainId: 43114,
    address: '0xBeC243C995409E6520D7C41E404da5dEba4b209B',
    _scan:
      'https://snowtrace.io/token/0xBeC243C995409E6520D7C41E404da5dEba4b209B',
    decimals: 18,
    name: 'Synthetix Network Token',
    symbol: 'SNX.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/SNX/logo.png',
  },
  {
    chainId: 43114,
    address: '0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76',
    _scan:
      'https://snowtrace.io/token/0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76',
    decimals: 18,
    name: 'SushiToken',
    symbol: 'SUSHI.e',
    logoURI:
      'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SUSHI.svg',
  },
  {
    chainId: 43114,
    address: '0xc7B5D72C836e718cDA8888eaf03707fAef675079',
    _scan:
      'https://snowtrace.io/token/0xc7B5D72C836e718cDA8888eaf03707fAef675079',
    decimals: 18,
    name: 'TrustSwap Token',
    symbol: 'SWAP.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/SWAP/logo.png',
  },
  {
    chainId: 43114,
    address: '0x3Bd2B1c7ED8D396dbb98DED3aEbb41350a5b2339',
    _scan:
      'https://snowtrace.io/token/0x3Bd2B1c7ED8D396dbb98DED3aEbb41350a5b2339',
    decimals: 18,
    name: 'UMA Voting Token v1',
    symbol: 'UMA.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/UMA/logo.png',
  },
  {
    chainId: 43114,
    address: '0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580',
    _scan:
      'https://snowtrace.io/token/0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580',
    decimals: 18,
    name: 'Uniswap',
    symbol: 'UNI.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/UNI/logo.png',
  },
  {
    chainId: 43114,
    address: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
    _scan:
      'https://snowtrace.io/token/0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
    decimals: 6,
    name: 'USD Coin',
    symbol: 'USDC.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/USDC/logo.png',
  },
  {
    chainId: 43114,
    address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    _scan:
      'https://snowtrace.io/token/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    decimals: 6,
    name: 'USD Coin',
    symbol: 'USDC',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/USDC/logo.png',
  },
  {
    chainId: 43114,
    address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
    _scan:
      'https://snowtrace.io/token/0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
    decimals: 6,
    name: 'TetherToken',
    symbol: 'USDt',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/USDT/logo.png',
  },
  {
    chainId: 43114,
    address: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    _scan:
      'https://snowtrace.io/token/0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    decimals: 6,
    name: 'Tether USD',
    symbol: 'USDT.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/USDT/logo.png',
  },
  {
    chainId: 43114,
    address: '0x50b7545627a5162F82A992c33b87aDc75187B218',
    _scan:
      'https://snowtrace.io/token/0x50b7545627a5162F82A992c33b87aDc75187B218',
    decimals: 8,
    name: 'Wrapped BTC',
    symbol: 'WBTC.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/WBTC/logo.png',
  },
  {
    chainId: 43114,
    address: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
    _scan:
      'https://snowtrace.io/token/0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
    decimals: 18,
    name: 'Wrapped ETH',
    symbol: 'WETH.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/WETH/logo.png',
  },
  {
    chainId: 43114,
    address: '0x9eAaC1B23d935365bD7b542Fe22cEEe2922f52dc',
    _scan:
      'https://snowtrace.io/token/0x9eAaC1B23d935365bD7b542Fe22cEEe2922f52dc',
    decimals: 18,
    name: 'yearn.finance',
    symbol: 'YFI.e',
    logoURI:
      'https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/YFI/logo.png',
  },
  {
    chainId: 43114,
    address: '0x596fA47043f99A4e0F122243B841E55375cdE0d2',
    _scan:
      'https://snowtrace.io/token/0x596fA47043f99A4e0F122243B841E55375cdE0d2',
    decimals: 18,
    name: '0x Protocol Token',
    symbol: 'ZRX.e',
    logoURI:
      'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/ZRX.png',
  },
  {
    chainId: 43114,
    address: '0xe19A1684873faB5Fb694CfD06607100A632fF21c',
    _scan:
      'https://snowtrace.io/token/0xe19A1684873faB5Fb694CfD06607100A632fF21c',
    decimals: 18,
    name: 'BavaToken',
    symbol: 'BAVA',
    logoURI: 'https://i.imgur.com/mAeAIip.jpeg',
  },
  {
    chainId: 43114,
    address: '0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE',
    _scan:
      'https://snowtrace.io/token/0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE',
    decimals: 18,
    name: 'Staked AVAX',
    symbol: 'sAVAX',
    logoURI: 'https://i.imgur.com/lqxXmU7.png',
  },
  {
    chainId: 43114,
    address: '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
    _scan:
      'https://snowtrace.io/token/0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
    decimals: 18,
    name: 'BENQI',
    symbol: 'QI',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9288.png',
  },
  {
    chainId: 43114,
    address: '0xb599c3590F42f8F995ECfa0f85D2980B76862fc1',
    _scan:
      'https://snowtrace.io/token/0xb599c3590F42f8F995ECfa0f85D2980B76862fc1',
    decimals: 6,
    name: 'UST (Wormhole)',
    symbol: 'UST',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png',
  },
  {
    chainId: 43114,
    address: '0x260Bbf5698121EB85e7a74f2E45E16Ce762EbE11',
    _scan:
      'https://snowtrace.io/token/0x260Bbf5698121EB85e7a74f2E45E16Ce762EbE11',
    decimals: 6,
    name: 'Axelar Wrapped UST',
    symbol: 'UST',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png',
  },
  {
    chainId: 43114,
    address: '0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b',
    _scan:
      'https://snowtrace.io/token/0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b',
    decimals: 18,
    name: 'Wrapped MEMO',
    symbol: 'wMEMO',
    logoURI: 'https://snowtrace.io/token/images/wondelandmemo_32.png',
  },
  {
    chainId: 43114,
    address: '0x237917E8a998b37759c8EE2fAa529D60c66c2927',
    _scan:
      'https://snowtrace.io/token/0x237917E8a998b37759c8EE2fAa529D60c66c2927',
    decimals: 18,
    name: 'Sifu',
    symbol: 'sifu',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/19205.png',
  },
  {
    chainId: 43114,
    address: '0x63682bDC5f875e9bF69E201550658492C9763F89',
    _scan:
      'https://snowtrace.io/token/0x63682bDC5f875e9bF69E201550658492C9763F89',
    decimals: 18,
    name: 'Betswap.gg',
    symbol: 'BSGG',
    logoURI: 'https://snowtrace.io/token/images/betswapgg_32.png',
  },
  {
    chainId: 43114,
    address: '0x3B55E45fD6bd7d4724F5c47E0d1bCaEdd059263e',
    _scan:
      'https://snowtrace.io/token/0x3B55E45fD6bd7d4724F5c47E0d1bCaEdd059263e',
    decimals: 18,
    name: 'MAI',
    symbol: 'MAI',
    logoURI:
      'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg',
  },
  {
    chainId: 43114,
    address: '0xE7dDa817b449A05bCB55DaeF2B2E8c095aD80993',
    _scan:
      'https://snowtrace.io/token/0xE7dDa817b449A05bCB55DaeF2B2E8c095aD80993',
    decimals: 18,
    name: 'Teragon Managed Vault - Bastion Trading',
    symbol: 'TMV-BT',
    logoURI:
      'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/TMV-BT.svg',
  },
  {
    chainId: 43114,
    address: '0x62edc0692bd897d2295872a9ffcac5425011c661',
    _scan:
      'https://snowtrace.io/token/0x62edc0692bd897d2295872a9ffcac5425011c661',
    decimals: 18,
    name: 'GMX',
    symbol: 'GMX',
    logoURI:
      'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/GMX.svg',
  },
  {
    chainId: 43114,
    address: '0x111111111111ed1d73f860f57b2798b683f2d325',
    _scan:
      'https://snowtrace.io/token/0x111111111111ed1d73f860f57b2798b683f2d325',
    decimals: 18,
    name: 'YUSD Stablecoin',
    symbol: 'YUSD',
    logoURI:
      'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/YUSD.png',
  },
  {
    chainId: 43114,
    address: '0x77777777777d4554c39223c354a05825b2e8faa3',
    _scan:
      'https://snowtrace.io/token/0x77777777777d4554c39223c354a05825b2e8faa3',
    decimals: 18,
    name: 'Yeti Finance',
    symbol: 'YETI',
    logoURI:
      'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/YETI.png',
  },
];

export default avaxTokens;
