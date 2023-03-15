import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Score from '../components/Score';

describe('Score', () => {
  it('renders score component', () => {
    render(<Score name="bla" score={5} />);
    expect(screen.getByText('bla : 5')).toBeInTheDocument();

  });

});