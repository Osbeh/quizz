import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Lives from '../components/Lives';

describe('Lives', () => {
  it('renders lives component', () => {
    render(<Lives lives={5} />);
    expect(screen.getAllByText("♥")).toHaveLength(5);
  });

  it('renders lives component', () => {
    render(<Lives lives={1} />);
    expect(screen.getByText("♥")).toBeInTheDocument();
  });

  it('renders lives component', () => {
    render(<Lives lives={0} />);
    expect(screen.queryByText("♥")).toBeNull();
  });

});