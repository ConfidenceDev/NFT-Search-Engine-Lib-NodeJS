module.exports = async (axios, key, limit, text, blockchain) => {
  return new Promise(async (resolve, reject) => {
    try {
      const opt = text;
      const market = "Opensea";
      const block = blockchain;
      const chain = block.toLowerCase();
      const sort = "asc";
      const order = "relevance";
      const size = limit;
      const site = `https://api.nftport.xyz/v0/search?chain=${chain}&order_by=${order}&sort_order=${sort}&page_size=${size}&text=${opt}`;
      let result = await axios({
        method: "get",
        url: site,
        headers: {
          "Content-Type": "application/json",
          Authorization: key,
        },
      });
      if (result && result.data.response === "OK") {
        const items = result.data.search_results;
        const finalItems = [];

        async function getMeta(i, arr, cb) {
          if (i >= items.length) return cb();
          const addr = arr[i].contract_address;
          const id = arr[i].token_id;
          const name = arr[i].name;
          const desc = arr[i].description;
          const img = arr[i].cached_file_url;
          const url = `https://opensea.io/assets/ethereum/${addr}/${id}`;
          let floor = 0.0;

          try {
            const metaUrl = `https://api.nftport.xyz/v0/transactions/stats/${addr}?chain=${chain}`;
            let result = await axios({
              method: "get",
              url: metaUrl,
              headers: {
                "Content-Type": "application/json",
                Authorization: key,
              },
            });
            if (result && result.data.response === "OK") {
              floor = result.data.statistics.floor_price;
            }
          } catch (error) {
            floor = 0.0;
          }
          const doc = {
            market: market,
            chain: block,
            addr: addr,
            id: id,
            name: name,
            desc: desc,
            img: img,
            url: url,
            floor: floor,
          };

          finalItems.push(doc);
          setTimeout(getMeta, 2000, i + 1, arr, cb);
        }

        getMeta(0, items, () => {
          console.log("All done");
          resolve(finalItems);
        });
      } else {
        reject("Unable to fetch nfts, try again!");
      }
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
