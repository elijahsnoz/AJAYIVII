import requests
import json

# Define the API endpoint URL
url = "https://api.livecoinwatch.com/coins/single"

# Define the payload for the API request
payload = json.dumps({
  "currency": "USD",
  "code": "AJAYIVII",
  "meta": True
})

# Define the headers with your API key
headers = {
  'content-type': 'application/json',
  'x-api-key': 'e03c9be0-a087-4538-84c2-c14434e14b53'
}

# Send the API request
response = requests.post(url, headers=headers, data=payload)

# Check if the request was successful
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()
    # Print the data
    print(json.dumps(data, indent=4))
else:
    # Print an error message if the request failed
    print("Error:", response.status_code, response.text)
