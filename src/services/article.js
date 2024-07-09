import { config } from '../config';

const getArticleList = (endPoint) => fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${endPoint || '1'}.json?api-key=${config.API_KEY}`);

export {
  getArticleList,
};
