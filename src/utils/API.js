async function fetchAPI(paramsObj, apiLocation = 'http://www.omdbapi.com?') {
  // not production ok as env vars will be available in browser
  const apiKey = {'apikey': process.env.REACT_APP_API_KEY};

  try {
    let response = await fetch(apiLocation
      + new URLSearchParams({...Object.assign(paramsObj, apiKey)}));
      
    const data = await response.json();
    return data;
  }
  catch (error) {
    return error;
  }
}

export default fetchAPI;
