import axios from "axios";
const accessKey = "kqurjjRC0wq5u0imyFvKxZZzaRzkRW-XuMfm3B5N5q8";

export const fetchSearchImages = async (searchPhoto, page = 1) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: searchPhoto,
      page: page,
      per_page: 15,
      client_id: accessKey,
    },
  });
  return response.data.results;
};
