This is a work-in-progress project about tourist attractions around the world.

## Commands:

Live changes while developing:

```sh
npm run dev
```

## How to run the project:

1. Download the project.
2. Get a test API from the [Amedeus](https://developers.amadeus.com/) website.
3. Go to [My Apps](https://developers.amadeus.com/my-apps) section, select your project and get your API Key and API Secret.
4. In the folder api-resources, find and rename the file "api.example.js" to "api.js"
5. In the file "api.js" you should replace in the constants the API Key and API Secret that you got in step 3.

```javascript
const CLIENT_ID = "YOUR API KEY HERE";
const CLIENT_SECRET = "YOUR API SECRET HERE";
```

6. Run the project
