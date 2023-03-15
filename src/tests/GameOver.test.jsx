import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import GameOver from '../components/GameOver';

describe('GameOver', () => {
  it('renders gameover component', () => {
    render(
        <MemoryRouter>
            <GameOver count={5} />
        </MemoryRouter>
    );
    screen.debug();

  });

});