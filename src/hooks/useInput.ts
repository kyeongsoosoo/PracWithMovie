import { useState } from 'react';

export default function useInput() {
  const [state, onChange] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const handleReset = () => {
    onChange('');
  };
  return { state, handleChange, handleReset };
}
