// ArticleListing.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ArticleListing from '..';
import { getArticleList } from '../../../../services/article';
import { apiInit } from '../../../../helpers/interfaces';

// Mock the getArticleList function
jest.mock('../../../../services/article.js', () => ({
  getArticleList: jest.fn(),
}));

const mockArticles = {
  articles: [
    {
      author: 'Author 1',
      content: 'Content for article 1',
      id: 1,
      publishedAt: '2024-07-01',
      title: 'Article 1',
      urlToImage: 'image1.jpg',
    },
  ],
  status: 'ok',
};

test('renders article main container and articles', async () => {
  // Mock the API call to return mock data
  getArticleList.mockResolvedValueOnce({
    json: async () => mockArticles,
  });

  render(
    <MemoryRouter>
      <ArticleListing category="test" isCard pageSize={1} />
    </MemoryRouter>,
  );

  // Check if loading text is displayed
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for articles to be loaded
  await waitFor(() => expect(screen.getAllByText(/Article \d/)).toHaveLength(1));

  // Check if articles are rendered
  expect(screen.getByText('Article 1')).toBeInTheDocument();

  // Check if images are rendered with correct alt and src attributes
  expect(screen.getByAltText('Thumbnail')).toHaveAttribute('src', 'image1.jpg');
});
