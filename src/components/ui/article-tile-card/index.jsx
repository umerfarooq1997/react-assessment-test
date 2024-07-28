
import { memo } from 'react';

const ArticleTileCard = ({ data, setSelectedArticle }) => {
  const { urlToImage, title, content, publishedAt } = data;

  return (
    <article>
      <button className="block w-full text-left" data-testid="tile-button" onClick={() => setSelectedArticle(data)} type="button">
        <span className="block bg-white rounded overflow-hidden">
          <span className="w-full h-[153px]  bg-[#f5f5f5] mb-4 block">
            {
              urlToImage ?
                <img alt="Thumbnail" className="w-full h-[153px]  object-cover" data-testid="tile-thumbnail" src={urlToImage} />
                : undefined
            }
          </span>

          <span className="block">
            <h2 className=" font-semibold text-lg truncate" data-testid="tile-title">{title}</h2>
            <p className="line-clamp-2 text-sm mt-2 mb-1" data-testid="tile-abstract">{content}</p>
            <span className="text-xs text-[#797070]" data-testid="tile-published_date">{`Published: ${publishedAt}`}</span>
          </span>
        </span>
      </button>
    </article>
  );
};

export default memo(ArticleTileCard);
