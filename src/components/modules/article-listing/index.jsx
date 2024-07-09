import { memo, useEffect, useState } from 'react';

import ArticleTile from '../../ui/article-tile';
import Modal from '../../ui/modal';
import ArticleDetials from '../article-details';
import { apiInit } from '../../../helpers/interfaces';
import { getArticleList } from '../../../services/article';

const ArticleListing = () => {
  const [articles, setArticles] = useState(apiInit);
  const [loading, setLoading] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(undefined);

  useEffect(() => {
    const preFetch = async () => {
      let data = apiInit;

      setLoading(true);

      try {
        const res = await getArticleList();

        data = await res.json();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }

      setArticles(data);
      setLoading(false);
    };

    preFetch();
  }, []);

  if (loading) return <p className="text-center">{'Loading...'}</p>;

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {articles.results.map((item) => <ArticleTile data={item} key={item.id} setSelectedArticle={setSelectedArticle} />)}
      </div>

      <Modal open={selectedArticle} size="w-[600px]" toggle={setSelectedArticle}>
        <ArticleDetials data={selectedArticle} />
      </Modal>
    </>
  );
};

export default memo(ArticleListing);
