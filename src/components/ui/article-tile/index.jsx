// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable camelcase */
import { memo } from 'react';

const ArticleTile = ({ data, setSelectedArticle }) => {
  const { media, title, abstract, published_date } = data;

  return (
    <article>
      <button className="block w-full text-left" data-testid="tile-button" onClick={() => setSelectedArticle(data)} type="button">
        <span className="p-4 block bg-white relative pl-32 min-h-[136px] rounded overflow-hidden">
          <span className="absolute top-0 left-0 w-28 h-full bg-[#f5f5f5]">
            {
              media.length ?
                <img alt="Thumbnail" className="w-full h-full object-cover" data-testid="tile-thumbnail" src={media[0]['media-metadata'][1].url} />
                : undefined
            }
          </span>

          <span className="block">
            <h2 className=" font-semibold text-lg truncate" data-testid="tile-title">{title}</h2>
            <p className="line-clamp-2 text-sm mt-2 mb-1" data-testid="tile-abstract">{abstract}</p>
            <span className="text-xs text-[#797070]" data-testid="tile-published_date">{`Published: ${published_date}`}</span>
          </span>
        </span>
      </button>
    </article>
  );
};

export default memo(ArticleTile);
