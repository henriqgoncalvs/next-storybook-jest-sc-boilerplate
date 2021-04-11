import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render Main component', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /boilerplate/i }),
    ).toBeInTheDocument();
  });
});
