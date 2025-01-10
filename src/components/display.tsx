import React, { FC } from 'react';

interface DisplayProps {
  expression: string;
  result: string | null;
}

const Display: FC<DisplayProps> = ({ expression, result }) => (
  <div className="display">
    <div className="expression">{expression || '0'}</div>
    {result !== null && <div className="result">{result}</div>}
  </div>
);

export default Display;
