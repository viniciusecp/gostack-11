import { render } from '@testing-library/react';
import React from 'react';

import Button from '../../components/Button';

describe('Button component', () => {
  it('should be able to render an button', () => {
    const { getByText } = render(<Button type="button">Botão</Button>);

    const buttonElement = getByText('Botão');

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toHaveTextContent('Botão');
  });

  it('should show loading label when received loading property', async () => {
    const { getByText } = render(
      <Button type="button" loading>
        Botão
      </Button>,
    );

    const buttonElement = getByText('Carregando...');

    expect(buttonElement).toHaveTextContent('Carregando...');
  });
});
