import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutPage from '../../src/components/AboutPage.tsx';

test('loads and displays greeting', async () => {
  const { getByTestId } = render(<AboutPage />);

  expect(getByTestId('page-header')).toHaveTextContent('About');
});
