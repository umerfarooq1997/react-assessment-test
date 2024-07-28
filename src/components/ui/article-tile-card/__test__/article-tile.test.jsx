// ArticleTileCard.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import ArticleTileCard from '..';

const testData = {
  content: 'This is a test article.',
  id: 1,
  urlToImage: 'mockImageUrl',
  publishedAt: '2024-07-09',
  title: 'Test Article',
};

test('renders article tile correctly and handles click', () => {
  const setSelectedArticle = jest.fn();

  render(<ArticleTileCard data={testData} setSelectedArticle={setSelectedArticle} />);

  // Test rendering of elements
  const titleElement = screen.getByTestId('tile-title');

  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveTextContent('Test Article');

  const abstractElement = screen.getByTestId('tile-abstract');

  expect(abstractElement).toBeInTheDocument();
  expect(abstractElement).toHaveTextContent('This is a test article.');

  const publishedDateElement = screen.getByTestId('tile-published_date');

  expect(publishedDateElement).toBeInTheDocument();
  expect(publishedDateElement).toHaveTextContent('Published: 2024-07-09');

  // Test click interaction
  fireEvent.click(screen.getByTestId('tile-button'));

  expect(setSelectedArticle).toHaveBeenCalledWith(testData);

  // Test image rendering
  const thumbnailImage = screen.getByTestId('tile-thumbnail');

  expect(thumbnailImage).toBeInTheDocument();
  expect(thumbnailImage).toHaveAttribute('src', 'mockImageUrl');
});
