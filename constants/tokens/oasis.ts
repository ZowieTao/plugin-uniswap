const oasisTokens = [
  {
    chainId: 42262,
    address: '0xd1dF9CE4b6159441D18BD6887dbd7320a8D52a05',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0xd1dF9CE4b6159441D18BD6887dbd7320a8D52a05',
    symbol: 'FTP',
    name: 'Fountain Protocol',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/24041/small/logo-black.png?1646138615',
  },
  {
    chainId: 42262,
    address: '0xf02b3e437304892105992512539F769423a515Cb',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0xf02b3e437304892105992512539F769423a515Cb',
    symbol: 'YUZU',
    name: 'YUZUToken',
    decimals: 18,
    logoURI: 'https://yuzu-swap.com/yuzu.0f21407f.svg',
  },
  {
    chainId: 42262,
    address: '0x21C718C22D52d0F3a789b752D4c2fD5908a8A733',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x21C718C22D52d0F3a789b752D4c2fD5908a8A733',
    symbol: 'WROSE',
    name: 'Wrapped ROSE',
    decimals: 18,
    logoURI: 'https://docs.oasis.dev/img/logo.png',
  },
  {
    chainId: 42262,
    address: '0x89aF3985261b664a24DE48355D589275b0FE2112',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x89aF3985261b664a24DE48355D589275b0FE2112',
    symbol: 'USBL',
    name: 'softbalanced.com',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/softbalanced/softbalanced.github.io/418f59f5cbc0a79866fce615c697812934902607/index_files/logo__.png',
  },
  {
    chainId: 42262,
    address: '0xBC033203796CC2C8C543a5aAe93a9a643320433D',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0xBC033203796CC2C8C543a5aAe93a9a643320433D',
    symbol: 'VS',
    name: 'ValleySwap Token',
    decimals: 18,
    logoURI: 'https://valleyswap.com/images/logo_valley-swap_mob.svg',
  },
  {
    chainId: 42262,
    address: '0x0bfF36Be5cf671Fa973f8206483b6641A90CE7d0',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x0bfF36Be5cf671Fa973f8206483b6641A90CE7d0',
    symbol: '🌹SWAP',
    name: '🌹RoseSwap.io',
    decimals: 18,
    logoURI:
      'https://app.rose.fi/static/media/rose.54bf1c833f8f489c2e36399cbf1033ed.svg',
  },
  {
    chainId: 42262,
    address: '0x6Cb9750a92643382e020eA9a170AbB83Df05F30B',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x6Cb9750a92643382e020eA9a170AbB83Df05F30B',
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
  },
  {
    chainId: 42262,
    address: '0x94fbfFe5698DB6f54d6Ca524DbE673a7729014Be',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x94fbfFe5698DB6f54d6Ca524DbE673a7729014Be',
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
  },
  {
    chainId: 42262,
    address: '0x010CDf0Db2737f9407F8CFcb4dCaECA4dE54c815',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x010CDf0Db2737f9407F8CFcb4dCaECA4dE54c815',
    symbol: 'BTC',
    name: 'Bitcoin',
    decimals: 8,
    logoURI:
      'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
  },
  {
    chainId: 42262,
    address: '0x32847e63E99D3a044908763056e25694490082F8',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x32847e63E99D3a044908763056e25694490082F8',
    symbol: 'AVAX',
    name: 'AVAX (Wormhole)',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/AVAX_wh.png',
  },
  {
    chainId: 42262,
    address: '0x05CbE6319Dcc937BdbDf0931466F4fFd0d392B47',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x05CbE6319Dcc937BdbDf0931466F4fFd0d392B47',
    symbol: 'USDCav',
    name: 'USD Coin (Wormhole from Avalanche)',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCav_wh.png',
  },
  {
    chainId: 42262,
    address: '0x05832a0905E516f29344ADBa1c2052a788B10129',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x05832a0905E516f29344ADBa1c2052a788B10129',
    symbol: 'USDTav',
    name: 'Tether USD (Wormhole from Avalanche)',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTav_wh.png',
  },
  {
    chainId: 42262,
    address: '0xd79Ef9A91b56c690C7b80570a3c060678667f469',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0xd79Ef9A91b56c690C7b80570a3c060678667f469',
    symbol: 'BNB',
    name: 'Binance Coin (Wormhole)',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/BNB_wh.png',
  },
  {
    chainId: 42262,
    address: '0xf6568FD76f9fcD1f60f73b730F142853c5eF627E',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0xf6568FD76f9fcD1f60f73b730F142853c5eF627E',
    symbol: 'BUSDbs',
    name: 'Binance USD (Wormhole from BSC)',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/BUSDbs_wh.png',
  },
  {
    chainId: 42262,
    address: '0x4cA2A3De42eabC8fd8b0AC46127E64DB08b9150e',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x4cA2A3De42eabC8fd8b0AC46127E64DB08b9150e',
    symbol: 'USDCbs',
    name: 'USD Coin (Wormhole from BSC)',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCbs_wh.png',
  },
  {
    chainId: 42262,
    address: '0x366EF31C8dc715cbeff5fA54Ad106dC9c25C6153',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x366EF31C8dc715cbeff5fA54Ad106dC9c25C6153',
    symbol: 'USDTbs',
    name: 'Tether USD (Wormhole from BSC)',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTbs_wh.png',
  },
  {
    chainId: 42262,
    address: '0x3223f17957Ba502cbe71401D55A0DB26E5F7c68F',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x3223f17957Ba502cbe71401D55A0DB26E5F7c68F',
    symbol: 'ETH',
    name: 'Ether (Wormhole)',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/ETH_wh.png',
  },
  {
    chainId: 42262,
    address: '0xE8A638b3B7565Ee7c5eb9755E58552aFc87b94DD',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0xE8A638b3B7565Ee7c5eb9755E58552aFc87b94DD',
    symbol: 'USDCet',
    name: 'USD Coin (Wormhole from Ethereum)',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCet_wh.png',
  },
  {
    chainId: 42262,
    address: '0xdC19A122e268128B5eE20366299fc7b5b199C8e3',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0xdC19A122e268128B5eE20366299fc7b5b199C8e3',
    symbol: 'USDTet',
    name: 'Tether USD (Wormhole from Ethereum)',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTet_wh.png',
  },
  {
    chainId: 42262,
    address: '0xd43ce0aa2a29DCb75bDb83085703dc589DE6C7eb',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0xd43ce0aa2a29DCb75bDb83085703dc589DE6C7eb',
    symbol: 'WBTC',
    name: 'Wrapped BTC (Wormhole)',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/WBTC_wh.png',
  },
  {
    chainId: 42262,
    address: '0x3E62a9c3aF8b810dE79645C4579acC8f0d06a241',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x3E62a9c3aF8b810dE79645C4579acC8f0d06a241',
    symbol: 'USDCpo',
    name: 'USD Coin (PoS) (Wormhole from Polygon)',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCpo_wh.png',
  },
  {
    chainId: 42262,
    address: '0xFffD69E757d8220CEA60dc80B9Fe1a30b58c94F3',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0xFffD69E757d8220CEA60dc80B9Fe1a30b58c94F3',
    symbol: 'USDTpo',
    name: 'Tether USD (PoS) (Wormhole from Polygon)',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTpo_wh.png',
  },
  {
    chainId: 42262,
    address: '0xd17dDAC91670274F7ba1590a06EcA0f2FD2b12bc',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0xd17dDAC91670274F7ba1590a06EcA0f2FD2b12bc',
    symbol: 'SOL',
    name: 'SOL (Wormhole)',
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/SOL_wh.png',
  },
  {
    chainId: 42262,
    address: '0x1d1149a53deB36F2836Ae7877c9176413aDfA4A8',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x1d1149a53deB36F2836Ae7877c9176413aDfA4A8',
    symbol: 'USDCso',
    name: 'USD Coin (Wormhole from Solana)',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDCso_wh.png',
  },
  {
    chainId: 42262,
    address: '0x24285C5232ce3858F00bacb950Cae1f59d1b2704',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x24285C5232ce3858F00bacb950Cae1f59d1b2704',
    symbol: 'USDTso',
    name: 'Tether USD (Wormhole from Solana)',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/USDTso_wh.png',
  },
  {
    chainId: 42262,
    address: '0xa1E73c01E0cF7930F5e91CB291031739FE5Ad6C2',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0xa1E73c01E0cF7930F5e91CB291031739FE5Ad6C2',
    symbol: 'UST',
    name: 'UST (Wormhole)',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/UST_wh.png',
  },
  {
    chainId: 42262,
    address: '0x4F43717B20ae319Aa50BC5B2349B93af5f7Ac823',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x4F43717B20ae319Aa50BC5B2349B93af5f7Ac823',
    symbol: 'LUNA',
    name: 'LUNA (Wormhole)',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/LUNA_wh.png',
  },
  {
    chainId: 42262,
    symbol: 'ceUSDT',
    address: '0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E',
    name: 'Tether USD (Celer)',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
  },
  {
    chainId: 42262,
    symbol: 'ceUSDC',
    address: '0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c',
    name: 'USD Coin (Celer)',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
  },
  {
    chainId: 42262,
    symbol: 'ceETH',
    address: '0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98',
    name: 'Wrapped Ether (Celer)',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
  },
  {
    chainId: 42262,
    symbol: 'ceDAI',
    address: '0x5a4Ba16C2AeB295822A95280A7c7149E87769E6A',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x5a4Ba16C2AeB295822A95280A7c7149E87769E6A',
    name: 'Dai Stablecoin (Celer)',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png',
  },
  {
    chainId: 42262,
    symbol: 'cbBNB',
    address: '0x3795C36e7D12A8c252A20C5a7B455f7c57b60283',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x3795C36e7D12A8c252A20C5a7B455f7c57b60283',
    name: 'Binance Coin (Celer)',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
  },
  {
    chainId: 42262,
    symbol: 'caAVAX',
    address: '0x6De33698e9e9b787e09d3Bd7771ef63557E148bb',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x6De33698e9e9b787e09d3Bd7771ef63557E148bb',
    name: 'Avalanche (Celer)',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  },
  {
    chainId: 42262,
    symbol: 'cfFTM',
    address: '0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52',
    name: 'Fantom (Celer)',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png',
  },
  {
    chainId: 42262,
    symbol: 'CELR',
    address: '0xf6a939e773fa4A63fd53f86bbbB279CaAD955035',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0xf6a939e773fa4A63fd53f86bbbB279CaAD955035',
    name: 'Celer Network',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3814.png',
  },
  {
    chainId: 42262,
    symbol: 'ETH',
    address: '0xB44a9B6905aF7c801311e8F4E76932ee959c663C',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0xB44a9B6905aF7c801311e8F4E76932ee959c663C',
    name: 'Ethereum (Multichain)',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
  },
  {
    chainId: 42262,
    address: '0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844',
    symbol: 'USDC',
    name: 'USD Coin (Multichain)',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
  },
  {
    chainId: 42262,
    symbol: 'USDT',
    address: '0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8',
    name: 'Tether USD (Multichain)',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
  },
  {
    chainId: 42262,
    symbol: 'BUSD',
    address: '0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C',
    name: 'Binance-Peg BUSD Token (Multichain)',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png',
  },
  {
    chainId: 42262,
    symbol: 'BNB',
    address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
    _scan:
      'https://explorer.emerald.oasis.dev/token/0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
    name: 'Binance (Multichain)',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
  },
];

export default oasisTokens;
