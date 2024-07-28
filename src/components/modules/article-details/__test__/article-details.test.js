// ArticleDetails.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';

import ArticleDetails from '..';

// Mock data for the test
const testData = {
  author: 'Creator Name',
  content: 'This is a test article.',
  publishedAt: '2024-07-09',
  title: 'Test Article',
  urlToImage: 'mockImageUrl',
};

test('renders article details correctly', () => {
  render(<ArticleDetails data={testData} />);

  // Check if the title is rendered
  const titleElement = screen.getByText('Test Article');

  expect(titleElement).toBeInTheDocument();

  // Check if the content is rendered
  const contentElement = screen.getByText(/This is a test article./u);

  expect(contentElement).toBeInTheDocument();

  // Check if the author and published date are rendered
  const authorElement = screen.getByText(/Creator Name - Published: 2024-07-09/u);

  expect(authorElement).toBeInTheDocument();

  // Check if the image is rendered with correct alt and src attributes
  const imageElement = screen.getByAltText('Thumbnail img');

  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', 'mockImageUrl');
});
