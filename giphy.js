
import axios from 'axios';

const GIPHY_API_KEY = '7aSvA1lcJX2aK141y6V9bHR7oybEBh43';

const fetchGiphyData = async (query) => {
  const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
    params: {
      q: query,
      api_key: '7aSvA1lcJX2aK141y6V9bHR7oybEBh43',
    },
  });

  return response.data.data;
};

export default fetchGiphyData;
