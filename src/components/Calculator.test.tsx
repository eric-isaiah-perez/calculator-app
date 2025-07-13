import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from './Calculator';
import { CalculatorProvider } from '@/context/CalculatorContext';

describe('Calculator', () => {
  it('renders initial state correctly', () => {
    render(
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    );

    expect(screen.getByText('= 0')).toBeInTheDocument();
  });

  it('calculates 2 + 3 = 5', async () => {
    render(
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    );

    const user = userEvent.setup();

    await user.click(screen.getByText('2'));
    await user.click(screen.getByText('+'));
    await user.click(screen.getByText('3'));
    await user.click(screen.getByText('='));

    expect(screen.getByText('= 5')).toBeInTheDocument();
  });

  it('clears input and result when C is clicked', async () => {
    render(
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    );

    const user = userEvent.setup();

    await user.click(screen.getByText('9'));
    await user.click(screen.getByText('C'));

    expect(screen.getAllByText('0').length).toBeGreaterThan(1);
  });
});
