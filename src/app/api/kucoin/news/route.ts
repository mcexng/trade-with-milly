import { NextResponse } from "next/server";

export async function GET() {
  try {
    // CoinGecko trending / status updates as news proxy
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending",
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error(`CoinGecko responded with ${response.status}`);
    }

    const data = await response.json();

    // Build news-like items from trending coins and NFTs
    const items: { title: string; time: string; source: string; url: string }[] = [];

    // Trending coins as "news"
    if (data.coins) {
      data.coins.slice(0, 5).forEach((entry: any) => {
        const coin = entry.item;
        const priceChange = coin.data?.price_change_percentage_24h?.usd;
        const direction = priceChange && priceChange >= 0 ? "surges" : "drops";
        items.push({
          title: `${coin.name} (${coin.symbol.toUpperCase()}) ${direction} — ranked #${coin.market_cap_rank || "N/A"} by market cap`,
          time: "Trending Now",
          source: "CoinGecko Trending",
          url: `https://www.coingecko.com/en/coins/${coin.id}`,
        });
      });
    }

    // Trending NFTs
    if (data.nfts) {
      data.nfts.slice(0, 2).forEach((nft: any) => {
        items.push({
          title: `${nft.name} NFT collection trending on ${nft.native_currency_symbol?.toUpperCase() || "ETH"}`,
          time: "Trending Now",
          source: "CoinGecko NFTs",
          url: `https://www.coingecko.com/en/nft/${nft.id}`,
        });
      });
    }

    return NextResponse.json({ items });
  } catch (error: any) {
    console.error("CoinGecko news proxy error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
