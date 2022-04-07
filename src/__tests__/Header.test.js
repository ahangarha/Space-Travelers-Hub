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
});
