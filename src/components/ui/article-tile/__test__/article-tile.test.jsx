
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import ArticleTile from '..';

const testData = {
  abstract: 'This is a test article.',
  id: 1,
  media: [{ 'media-metadata': [{ url: 'mockImageUrl' }, { url: 'mockImageUrl' }, { url: 'mockImageUrl' }] }],
  'published_date': '2024-07-09',
  title: 'Test Article',
};

test('renders article tile correctly', () => {
  const setSelectedArticle = jest.fn();

  render(<ArticleTile data={testData} setSelectedArticle={setSelectedArticle} />);

  // Test rendering of elements
  const titleElement = screen.getByText('Test Article');

  expect(titleElement).toBeInTheDocument();

  const abstractElement = screen.getByText('This is a test article.');

  expect(abstractElement).toBeInTheDocument();

  // Test click interaction
  fireEvent.click(titleElement);

  expect(setSelectedArticle).toHaveBeenCalledWith(testData);

  // Test image rendering
  const thumbnailImage = screen.getByAltText('Thumbnail');

  expect(thumbnailImage).toBeInTheDocument();
  expect(thumbnailImage).toHaveAttribute('src', 'mockImageUrl');
});
