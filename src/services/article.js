import { config } from '../config';

const getArticleList = (endPoint) => fetch(`https://newsapi.org/v2/everything?apiKey=${config.API_KEY}${endPoint || ''}`);

export {
  getArticleList,
};
