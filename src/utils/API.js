import axios from 'axios';

async function fetchAPI(paramsObj, apiLocation = 'http://www.omdbapi.com') {
  // not production ok as env vars will be available in browser
  const apiKey = {'apikey': process.env.REACT_APP_API_KEY};

  try {
    let response = await axios.get(apiLocation, {
      'params' : Object.assign(paramsObj, apiKey)
    });

    return response.data;
  }
  catch (error) {
    return error;
  }
}

export default fetchAPI;
