import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

const TestHeader = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

describe('Header Component', () => {
  it('shows branding elements', () => {
    render(<TestHeader />);
    const branding = screen.getByRole('heading', { name: 'Space Traveler\'s Hub' });

    expect(branding).toBeVisible();
  });

  it('shows links', () => {
    render(<TestHeader />);
    const rocketsLink = screen.getByRole('link', { name: /rockets/i });
    const missionsLink = screen.getByRole('link', { name: /missions/i });

    expect(rocketsLink).toBeVisible();
    expect(missionsLink).toBeVisible();
  });
});
