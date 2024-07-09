
import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleDetails from '../index';

const testData = {
  id: 1,
  media: [{ 'media-metadata': [{ url: 'mockImageUrl' }, { url: 'mockImageUrl' }, { url: 'mockImageUrl' }] }],
  title: 'Test Article',
  abstract: 'This is a test article.',
  published_date: '2024-07-09',
  byline: 'creater name and yes hello',
};

test('renders article details correctly', () => {
  render(<ArticleDetails data={testData} />);

  // Test rendering of elements
  const titleElement = screen.getByText('Test Article');
  expect(titleElement).toBeInTheDocument();

  const abstractElement = screen.getByText('This is a test article.');
  expect(abstractElement).toBeInTheDocument();

  const bylineElement = screen.getByText(/creater name and yes hello/);
  expect(bylineElement).toBeInTheDocument();

  // Test image rendering
  const thumbnailImage = screen.getByAltText('Thumbnail img');
  expect(thumbnailImage).toBeInTheDocument();
  expect(thumbnailImage).toHaveAttribute('src', 'mockImageUrl');
});
