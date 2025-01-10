import React, { FC, useState } from 'react';
import { evaluate } from 'mathjs';

import Display from './components/display.tsx';
import ButtonPanel from './components/panel.tsx';

import './styles.css';

const App: FC = () => {

  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const endsWithNumber = () => /\d$/.test(expression);
  const endsWithOperator = () => /[+\-*/%]$/.test(expression);
  const containsDecimalInLastNumber = () => {
    const parts = expression.split(/[^\d.]/);
    const lastPart = parts[parts.length - 1];
    return lastPart.includes('.');
  };

  const handleButtonClick = (value: string) => {

    if (!value) return;

    if (['+', '-', '*', '/', '%'].includes(value)) setExpression((prev) => {
      if (prev === '' && value !== '-') return prev;
      if (endsWithOperator()) return prev.slice(0, -1) + value;
      if (endsWithNumber() || prev.endsWith(')')) return prev + value;
      return prev;
    });
    else if (value === '.') {
      setExpression((prev) => {
        if (containsDecimalInLastNumber()) return prev;
        if (prev === '' || endsWithOperator() || prev.endsWith('(')) return prev + '0.';
        return prev + value;
      });
    } else switch (value.toLowerCase()) {

        case 'c':
          setExpression('');
          setResult(null);
          break;

        case '=':
          if (!endsWithNumber() && !expression.endsWith(')')) return;
          try {
            const evalResult = evaluate(expression).toString();
            setResult(evalResult);
          } catch {
            setResult('Error');
          }
          break;

        case '+/-':
          setExpression((prev) => {

            const parts = prev.split(/([+\-*/%()])/);
            let lastIndex = parts.length - 1;

            while (lastIndex >= 0 && !parts[lastIndex].match(/^-?\d+\.?\d*$/) && parts[lastIndex] !== ')') lastIndex--;

            if (lastIndex < 0) return prev;

            if (parts[lastIndex] === ')') {

              let openCount = 1;
              let startIndex = lastIndex - 1;

              while (startIndex >= 0 && openCount > 0) {
                if (parts[startIndex] === ')') openCount++;
                if (parts[startIndex] === '(') openCount--;
                startIndex--;
              }

              if (startIndex < 0) return prev;

              const beforeParens = parts.slice(0, startIndex + 1).join('');
              const afterParens = parts.slice(lastIndex + 1).join('');
              const inParens = parts.slice(startIndex + 2, lastIndex).join('');

              if (inParens.startsWith('-')) return beforeParens + inParens.substring(1) + afterParens;
              else return beforeParens + '(-' + inParens + ')' + afterParens;

            } else {

              const number = parts[lastIndex];
              const beforeNumber = parts.slice(0, lastIndex).join('');
              const afterNumber = parts.slice(lastIndex + 1).join('');

              if (number.startsWith('-')) return beforeNumber + number.substring(1) + afterNumber;
              else return beforeNumber + '(-' + number + ')' + afterNumber;

            }

          });
          break;

        default:
          setExpression((prev) => {
            if (prev === '' && isNaN(Number(value))) return prev;
            return prev + value;
          });
          break;

    }

  };

  return (
    <div className="app">
      <Display expression={expression} result={result} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
  );

};


export default App;
