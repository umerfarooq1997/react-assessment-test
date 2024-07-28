const ArticleDetials = ({ data }) => {
  // const { media, title, abstract, published_date, byline } = data;
  const { urlToImage, title, content, author, publishedAt } = data;

  return (
    <div className="p-4 max-h-[600px] overflow-y-scroll">
      {
        urlToImage ?
          <img alt="Thumbnail img" className="w-full h-[300px] object-cover" src={urlToImage} />
          : undefined
      }

      <h2 className="text-2xl font-semibold mt-4">{title}</h2>
      <p className="text-base mt-2 mb-1">{content}</p>

      <span className="text-sm text-[#797070]">{`${author} - Published: ${publishedAt}`}</span>
    </div>
  );
};

export default ArticleDetials;
