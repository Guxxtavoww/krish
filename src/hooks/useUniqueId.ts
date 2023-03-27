import { useId } from 'react';

function useUniqueId(idName?: string): string {
  const randomId = useId();

  const uniqueId = `${idName || ''}${randomId}`;

  return uniqueId;
}

export default useUniqueId;
