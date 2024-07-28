import { memo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ArticleTile from '../../ui/article-tile';
import Modal from '../../ui/modal';
import ArticleDetials from '../article-details';
import { apiInit } from '../../../helpers/interfaces';
import { getArticleList } from '../../../services/article';
import ArticleTileCard from '../../ui/article-tile-card';

const ArticleListing = ({ category, isCard, pageSize }) => {
  const [searchParams] = useSearchParams();
  const [articles, setArticles] = useState(apiInit);
  const [loading, setLoading] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(undefined);

  useEffect(() => {
    const preFetch = async () => {
      let data = apiInit;

      setLoading(true);

      try {
        const res = await getArticleList(`&q=${searchParams.get('q') || category}${searchParams.get('from') ? `&from=${searchParams.get('from')}&to=${searchParams.get('to')}` : ''}${searchParams.get('sortBy') ? `&sortBy=${searchParams.get('sortBy')}` : ''}&pageSize=${pageSize || 8}`);

        data = await res.json();
        setArticles(data?.status !== 'error' ? data : apiInit);
      } catch {
        setArticles(apiInit);
      }

      setLoading(false);
    };

    preFetch();
  }, [searchParams, category, pageSize]);

  if (loading) return <p className="text-center">{'Loading...'}</p>;

  return (
    <>
      <div className={`grid px-4 md:px-0 ${isCard ? 'grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12' : 'grid-cols-1 md:grid-cols-2 gap-4'}`}>
        {articles.articles.map((item) => isCard ?
          <ArticleTileCard data={item} key={item.id} setSelectedArticle={setSelectedArticle} />
          :
          <ArticleTile data={item} key={item.id} setSelectedArticle={setSelectedArticle} />)}
      </div>

      <Modal open={selectedArticle} size="md:w-[600px]" toggle={setSelectedArticle}>
        <ArticleDetials data={selectedArticle} />
      </Modal>
    </>
  );
};

export default memo(ArticleListing);
