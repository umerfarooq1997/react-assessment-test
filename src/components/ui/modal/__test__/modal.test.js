import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal from '../index';

const MockComponent = () => <div>Mock Content</div>;

test('renders modal correctly', () => {
  const toggleModal = jest.fn();
  render(
    <Modal open={true} toggle={toggleModal} size="w-[600px]">
      <MockComponent />
    </Modal>
  );

  const closeButton = screen.getByText('X');
  expect(closeButton).toBeInTheDocument();

  fireEvent.click(closeButton);
  expect(toggleModal).toHaveBeenCalledWith(false);

  const mockContent = screen.getByText('Mock Content');
  expect(mockContent).toBeInTheDocument();
});
