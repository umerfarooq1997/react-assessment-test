// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable camelcase */
const ArticleDetials = ({ data }) => {
  const { media, title, abstract, published_date, byline } = data;

  return (
    <div className="p-4 max-h-[600px] overflow-y-scroll">
      {
        media.length ?
          <img alt="Thumbnail img" className="w-full h-[300px] object-cover" src={media[0]['media-metadata'][2].url} />
          : undefined
      }

      <h2 className="text-2xl font-semibold mt-4">{title}</h2>
      <p className="text-base mt-2 mb-1">{abstract}</p>

      <span className="text-sm text-[#797070]">{`${byline} - Published: ${published_date}`}</span>
    </div>
  );
};

export default ArticleDetials;
