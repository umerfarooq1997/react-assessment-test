import React from 'react';

import ArticleListing from '../../components/modules/article-listing';
import Heading from '../../components/ui/heading';
import ListingPageFilters from '../../components/ui/listing-page-filters';

const Home = () =>
  <div className="container lg:my-6 my-2">
    <div className="flex justify-end md:hidden md:mb-6 mb-4">
      <ListingPageFilters />
    </div>

    {/* Listing Area */}
    <div>
      <Heading title="Sports News" />
      <ArticleListing category="technology" isCard />
    </div>

    <div className="mt-12">
      <Heading title="Entertainment World" />
      <ArticleListing category="entertainment" />
    </div>

    <div className="mt-12">
      <Heading title="Science Information" />
      <ArticleListing category="science" isCard />
    </div>
  </div>;

export default Home;
