// Load the dotenv package to read the .env file
require('dotenv').config();

// Access environment variables using process.env
const config = {
  apiKey: process.env.API_KEY, // Retrieve the API_KEY from the .env file
  serverSecret: process.env.SERVER_SECRET, // Retrieve the SERVER_SECRET from the .env file
  isKalvian: process.env.IS_KALVIAN === 'true', // Convert the string 'true' or 'false' to a boolean
};

// Export the config object so it can be used in other files
module.exports = config;

// Log the configuration object to the console for verification
console.log(config);