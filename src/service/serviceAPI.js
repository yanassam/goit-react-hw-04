import axios from "axios";
const accessKey = "kqurjjRC0wq5u0imyFvKxZZzaRzkRW-XuMfm3B5N5q8";

export const fetchSearchImages = async (searchPhoto) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${searchPhoto}&client_id=${accessKey}`
  );
  return response.data.results;
};
