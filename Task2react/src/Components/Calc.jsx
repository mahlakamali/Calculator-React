
import React, { useState } from 'react';
import './Calc.css';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const calculate = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    
    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        setResult('Invalid Operator');
    }
  };

  return (
    <div>
      <input required placeholder='Enter Number...' type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="%">%</option>
      </select>
      <input required placeholder='Enter Number...' type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} />
      <button onClick={calculate}>Submit</button>
      <div className='result'>Result: {result}</div>
    </div>
  );
};

export default Calculator;