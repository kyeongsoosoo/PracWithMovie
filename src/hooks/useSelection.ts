import { useState } from 'react';

function useSelection() {
  const [select, setSelection] = useState<number[]>([]);
}
