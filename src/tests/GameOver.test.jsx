import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import user from "@testing-library/user-event"

import GameOver from '../components/GameOver';

describe('GameOver', () => {
  it('renders gameover component', () => {
    render(
        <MemoryRouter>
            <GameOver count={5} />
        </MemoryRouter>
    );
    expect(screen.getByText('Your score was 5')).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it('Changes input field value', async () => {
    render(
        <MemoryRouter>
            <GameOver count={5} />
        </MemoryRouter>
    );
    await user.type(screen.getByRole("textbox"), "JJJsfjalkfaklf")
    const val = screen.getByRole("textbox")
    expect(val.value).toBe("JJJ")
  });

  it('Retry button works', async () => {
    const retryGame = vi.fn()
    render(
        <MemoryRouter>
            <GameOver count={5} retryGame={retryGame} />
        </MemoryRouter>
    );
    await user.type(screen.getByRole("textbox"), "JJJsfjalkfaklf")
    const val = screen.getByRole("textbox")
    expect(val.value).toBe("JJJ")
    await user.click(screen.getByText("Try again"))
    expect(retryGame).toHaveBeenCalledTimes(1)
  });

  it('No form for 0 score', () => {
    render(
        <MemoryRouter>
            <GameOver count={0}/>
        </MemoryRouter>
    );
    expect(screen.queryByRole("textbox")).toBeNull()
  });
});