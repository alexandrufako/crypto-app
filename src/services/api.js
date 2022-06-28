
const baseUrl = 'https://api.coingecko.com/api/v3';

const getMarkets = async (page, perPage) => {
    const res = await fetch(`${baseUrl}/coins/markets?vs_currency=eur&per_page=${perPage || 100}&page=${page || 1}`);
    const data = await res.json();
    return data;
}

export { getMarkets };