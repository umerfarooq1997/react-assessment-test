import React from 'react';

import ArticleListing from '../../components/modules/article-listing';

const Home = () =>
  <div className="w-[1000px] mx-auto mt-[50px] bg-gray-50 p-4 rounded">

    {/* Top Heading */}
    <div className="sticky -top-4 mb-6 z-10 flex justify-between">
      <h1 className=" text-2xl font-semibold">{'NY Times Most Popular Articles '}</h1>
    </div>

    {/* Listing Area */}
    <div className=" h-[calc(100vh-250px)] overflow-y-scroll ">
      <ArticleListing />
    </div>
  </div>;

export default Home;
