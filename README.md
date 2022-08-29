# NFT-Search-Engine-Lib-NodeJS

An NFT search engine on Ethereum, Polygon and Solana blockchains.
Utilizing the NFT Port API. Obtain an API Key for free before use

<a href="https://nftport.xyz" target="_blank">https://nftport.xyz</a> <br>
<a href="https://www.npmjs.com/package/axios" target="_blank">https://www.npmjs.com/package/axios</a>

# Installation

```
npm install nft-search
```

# Usage

```
// Require Libraries
// Axios is required
const search = require("nft-search");
const axios = require("axios");

const NFTPORT_KEY = "irwbp-iaf-adfjkms-jbkfbka";

// Using Async/Await
const result = await search(axios, NFTPORT_KEY, limit, text, blockchain);
if(result){
    console.log(result);
}

// Using Promises
search(axios, NFTPORT_KEY, limit, text, blockchain)
        .then(console.log)
        .catch(console.log);
```

# Response

```
[
  {
    market: 'Opensea',
    chain: 'Ethereum',
    addr: '0xdc76a2de1861ea49e8b41a1de1e461085e8f369f',
    id: '90345',
    name: 'Henry Downing',
    desc: 'Henry hails from a posh, fancy family, but he doesn’t enjoy their formal attire and sophisticated manners. Calling himself a rebel, Henry sports a red t-shirt with a banda, as a symbol of his rebellious nature.',
    img: 'https://storage.googleapis.com/sentinel-nft/raw-assets/c_0xdc76a2de1861ea49e8b41a1de1e461085e8f369f_t_90345_raw_asset.png',
    url: 'https://opensea.io/assets/ethereum/0xdc76a2de1861ea49e8b41a1de1e461085e8f369f/90345',
    floor: 0.001
  }
]
```

# Guide

- limit: The number of items you want
- text: Your search string
- blockchain: Ethereum, Polygon or Solana

# Contact

For inquires, support, bug reports and suggestions send me a mail@: confidostic3@gmail.com

- Github: <a href="https://github.com/ConfidenceDev/NFT-Search-Engine-Lib-NodeJS" target="_blank">https://github.com/ConfidenceDev/NFT-Search-Engine-Lib-NodeJS</a>
- Facebook: Confidence Eze
- Twitter: @ConfidenceDev
- Instagram: @confidence.dev

# Buy me a Coffee

BTC Wallet: 3PNTiH3rZAaGvWbAU4u1CjPcogJGAziarE <br>
Transfer: https://paydev.onrender.com
