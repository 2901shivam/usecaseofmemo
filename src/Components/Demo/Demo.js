import React, { useState,useMemo } from 'react'
import Button from '../UI/Button';

const Demo = (props) => {
  const [numbers, setNumbers] = useState(props.items);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  const sortedNumbers = useMemo(() => {
    const clonedNumbers = [...numbers];
    if (ascendingOrder) {
      return clonedNumbers.sort((a, b) => a - b);
    } else {
      return clonedNumbers.sort((a, b) => b - a);
    }
  }, [numbers, ascendingOrder]);

  const handleClick = () => {
    setAscendingOrder(!ascendingOrder);
  }
  return (
    
      <div>
      <h2>List of Numbers</h2>
      <ul>
        {sortedNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <Button onClick={handleClick}>
        {ascendingOrder ? 'Change to Descending Order' : 'Change to Ascending Order'}
      </Button>
    </div>
  )
}

export default React.memo(Demo);
