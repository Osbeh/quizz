import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import user from '@testing-library/user-event'

import Highscores from '../components/Highscores';

vi.mock('axios')

describe('Highscore', () => {
  it('Fetches scores from API', async () => {
    const scores = [
        {name: "OPA", score: 5},
        {name: "APA", score: 6},
        {name: "IPA", score: 2}
    ]
    axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: scores }) 
    )
    render(<MemoryRouter><Highscores /></MemoryRouter>);
    const items = await screen.findAllByRole('listitem');
    expect(items).toHaveLength(3);
    screen.debug();
  });
});