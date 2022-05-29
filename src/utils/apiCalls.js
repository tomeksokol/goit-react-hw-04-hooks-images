import axios from "axios";
import {API_KEY, PER_PAGE} from "./constans";

const fetchData = async (keyword, page) => {
  const { data } = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${PER_PAGE}`);
  return data.hits;
};

export default fetchData;
