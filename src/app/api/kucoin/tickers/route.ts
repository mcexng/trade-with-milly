import { NextResponse } from "next/server";

const COIN_IDS = "bitcoin,ethereum,solana,binancecoin,ripple,dogecoin,cardano,avalanche-2";

export async function GET() {
  try {
    // CoinGecko free API — no key required, no CORS issues, globally accessible
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COIN_IDS}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`,
      {
        headers: {
          Accept: "application/json",
        },
        next: { revalidate: 60 }, // Cache for 60 seconds
      }
    );

    if (!response.ok) {
      throw new Error(`CoinGecko responded with ${response.status}`);
    }

    const data = await response.json();

    const coins = data.map((coin: any) => {
      const price = coin.current_price;
      const change = coin.price_change_percentage_24h || 0;
      return {
        symbol: coin.symbol.toUpperCase(),
        name: coin.name,
        price: price.toLocaleString("en-US", {
          minimumFractionDigits: price < 1 ? 4 : 2,
          maximumFractionDigits: price < 1 ? 6 : 2,
        }),
        change: parseFloat(change.toFixed(2)),
        isUp: change >= 0,
        image: coin.image,
      };
    });

    return NextResponse.json({ coins, live: true });
  } catch (error: any) {
    console.error("CoinGecko proxy error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
