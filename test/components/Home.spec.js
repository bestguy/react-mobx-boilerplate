import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../src/components/Home.tsx';

test('loads and displays greeting', async () => {
  const { getByTestId } = render(<Home />);

  expect(getByTestId('page-header')).toHaveTextContent('Home');
});
