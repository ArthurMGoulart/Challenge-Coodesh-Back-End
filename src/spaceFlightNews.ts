import axios, { AxiosError } from 'axios';
import { Article } from './api/interfaces/ArticleInterface';

const getArticlesFromApi = async () => {
  const { data } = await axios('https://api.spaceflightnewsapi.net/v3/articles');
  const articles = data as Article[];
  articles.forEach(async (article) => {
    try {
      await axios.post('http://localhost:3001/articles', article);
    } catch (e) {
      const axiosError = e as AxiosError;
      console.log(axiosError.response?.data.error)
    }
  });
}

export default getArticlesFromApi;
