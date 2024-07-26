// Function to fetch live market data from Alpha Vantage API
async function fetchMarketData() {
    const apiKey = 'TY98F5WDM174TI4P'; // Replace 'YOUR_API_KEY' with your actual Alpha Vantage API key
    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AJAYIVII&apikey=TY98F5WDM174TI4P`;

    try {
        const response = await axios.get(apiUrl);
        const marketData = response.data['Global Quote'];

        if (!marketData) {
            throw new Error('Invalid API response');
        }

        const price = parseFloat(marketData['05. price']).toFixed(2);
        const change = parseFloat(marketData['10. change percent']).toFixed(2);

        // Update capital price
        document.getElementById('capital-price').innerText = `$${price} (${change}%)`;
    } catch (error) {
        console.error('Error fetching or parsing market data:', error);
    }
}

// Function to initialize market chart
function initMarketChart() {
    // Replace this with your code to initialize the market chart
}

// Fetch market data and initialize market chart on page load
window.addEventListener('load', () => {
    fetchMarketData();
    initMarketChart();
});
