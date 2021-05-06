import { useEffect } from 'react';

export const debounce = (func, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
};

export function useAsync(asyncFn, onSuccess, onFailure) {
  useEffect(() => {
    let isMounted = true;
    asyncFn().then((data) => {
      if (isMounted) onSuccess(data);
    });
    return () => {
      isMounted = false;
    };
  }, [asyncFn, onSuccess]);
}
