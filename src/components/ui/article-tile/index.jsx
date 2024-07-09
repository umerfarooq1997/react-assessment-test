// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable camelcase */
import { memo } from 'react';

const ArticleTile = ({ data, setSelectedArticle }) => {
  const { media, title, abstract, published_date } = data;

  return (
    <article>
      <button className="block w-full text-left" onClick={() => setSelectedArticle(data)} type="button">
        <div className="p-4 bg-white relative pl-32 min-h-[136px] rounded overflow-hidden">
          <div className="absolute top-0 left-0 w-28 h-full bg-[#f5f5f5]">
            {
              media.length ?
                <img alt="Thumbnail" className="w-full h-full object-cover" src={media[0]['media-metadata'][1].url} />
                : undefined
            }
          </div>

          <div>
            <h2 className=" font-semibold text-lg truncate">{title}</h2>
            <p className="line-clamp-2 text-sm mt-2 mb-1">{abstract}</p>
            <span className="text-xs text-[#797070]">{`Published: ${published_date}`}</span>
          </div>

        </div>
      </button>
    </article>
  );
};

export default memo(ArticleTile);
