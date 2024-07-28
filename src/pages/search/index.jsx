import React from 'react';
import { useParams } from 'react-router';

import ArticleListing from '../../components/modules/article-listing';
import ListingPageFilters from '../../components/ui/listing-page-filters';
import Heading from '../../components/ui/heading';

const Search = () => {
  const params = useParams();

  return (
    <div className="container lg:my-6 my-2">
      <div className="flex justify-end md:mb-6 mb-4">
        <ListingPageFilters />
      </div>

      {/* Listing Area */}
      <div className="mt-6">
        <Heading title={`Search for ${params?.q}`} />
        <ArticleListing category={params?.q} pageSize="24" />
      </div>
    </div>
  );
};

export default Search;
