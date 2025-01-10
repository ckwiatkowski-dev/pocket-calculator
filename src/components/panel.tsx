import React, { FC } from 'react';

import Button from './button.tsx';

interface PanelProps {
  onButtonClick: (value: string) => void;
}

const buttonsLayout = [
  ['C', '+/-', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const Panel: FC<PanelProps> = ({ onButtonClick }) => (
  <div className="button-panel">
    {buttonsLayout.flat().map((button, index) => (
      <Button
        key={index}
        value={button}
        onClick={onButtonClick}
        className={
          button === '0' ? 'button zero dark-gray'
            : button === '=' ? 'button orange'
            : button === '/' || button === '*' || button === '-' || button === '+' ? 'button orange'
            : button === 'C' ? 'button red'
            : button === '+/-' || button === '%' ? 'button light-gray'
            : 'button dark-gray'
        }
      />
    ))}
  </div>
);

export default Panel;
