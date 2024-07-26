#!/usr/bin/python3

import requests

apikey = 'TY98F5WDM174TI4P'
symbol = 'AJAYIVII'
url = f'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo'

print("API URL:", url)  # Print the API URL for debugging purposes

try:
    r = requests.get(url)
    data = r.json()
    print("API Response:", data)  # Print the API response for debugging purposes

    # Your code to process the API response goes here...

except Exception as e:
    print("Error:", e)  # Print any errors that occur during the API request
