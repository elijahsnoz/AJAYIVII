// Function to fetch data from LiveCoinWatch API for a specific coin
async function fetchCoinData(coin) {
    const url = "https://api.livecoinwatch.com/coins/single";
    const payload = JSON.stringify({
        "currency": "USD",
        "code": coin,
        "meta": true
    });
    const headers = {
        'content-type': 'application/json',
        'x-api-key': 'e03c9be0-a087-4538-84c2-c14434e14b53'
    };

    const response = await axios.post(url, payload, { headers });
    return response.data;
}

// Function to update HTML elements with fetched data
function updateMarketInfo(data) {
    const marketInfoDiv = document.getElementById('market-info');

    // Construct the HTML content
    const htmlContent = `
        <div class="coin-info">
            <h3>${data.name}</h3>
            <img src="${data.png64}" alt="${data.name} Logo" class="currency-logo">
            <p><strong>Symbol:</strong> ${data.symbol}</p>
            <p><strong>Current Price:</strong> $${data.rate.toLocaleString()}</p>
            <p><strong>Rank:</strong> ${data.rank}</p>
            <p><strong>Volume:</strong> $${data.volume.toLocaleString()}</p>
            <p><strong>Market Cap:</strong> $${data.cap.toLocaleString()}</p>
            <p><strong>Change (1 hour):</strong> ${data.delta.hour.toFixed(2)}%</p>
            <p><strong>Change (1 day):</strong> ${data.delta.day.toFixed(2)}%</p>
            <p><strong>Change (1 week):</strong> ${data.delta.week.toFixed(2)}%</p>
            <p><strong>Change (1 month):</strong> ${data.delta.month.toFixed(2)}%</p>
        </div>
    `;

    // Append the new content to the marketInfoDiv
    marketInfoDiv.innerHTML += htmlContent;
}

// Function to fetch and display data for multiple coins
async function fetchMultipleCoinsData() {
    const coins = ["ETH", "BTC", "LTC"]; // Add more coin symbols as needed

    for (const coin of coins) {
        try {
            const data = await fetchCoinData(coin);
            updateMarketInfo(data);
        } catch (error) {
            console.error(`Error fetching data for ${coin}:`, error);
        }
    }
}

// Fetch market data and update HTML elements on page load
window.addEventListener('load', () => {
    fetchMultipleCoinsData();
});
