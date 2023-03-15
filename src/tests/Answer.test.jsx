import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Answer from '../components/Answer';

describe('Answer', () => {
  it('renders Answer component', () => {
    render(<Answer answer="bla" correctAnswer="bla" />);
    expect(screen.getByText('bla')).toBeInTheDocument();

  });

});