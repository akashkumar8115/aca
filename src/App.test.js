import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders main navigation components', () => {
  render(<App />);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});

test('scrolls to top on route change', () => {
  const mockScrollTo = jest.fn();
  window.scrollTo = mockScrollTo;
  
  render(<App />);
  act(() => {
    window.dispatchEvent(new Event('popstate'));
  });
  
  expect(mockScrollTo).toHaveBeenCalledWith({ top: 10 });
});

test('initializes AOS with correct configuration', () => {
  const mockInit = jest.fn();
  const mockRefresh = jest.fn();
  global.AOS = { init: mockInit, refresh: mockRefresh };
  
  render(<App />);
  
  expect(mockInit).toHaveBeenCalledWith({
    once: true,
    duration: 1500,
    easing: "ease-in-out cubic-bezier(0.4, 0, 0.2, 1)",
    delay: 100
  });
  expect(mockRefresh).toHaveBeenCalled();
});

test('renders private routes with authentication wrapper', () => {
  render(<App />);
  const privateRoutes = ['/progress-tracker', '/update-profile', '/portfolio', '/dashboard', '/analytics'];
  
  privateRoutes.forEach(route => {
    const { container } = render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
    expect(container.querySelector('.private-route-wrapper')).toBeInTheDocument();
  });
});

test('renders utility components', () => {
  render(<App />);
  expect(screen.getByTestId('scroll-top')).toBeInTheDocument();
  expect(screen.getByTestId('whatsapp-button')).toBeInTheDocument();
  expect(screen.getByTestId('initial-loader')).toBeInTheDocument();
});
