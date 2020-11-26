import { useEffect, useRef } from 'react';

export default function useDidMount() {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    }
  }, []);

  return didMountRef.current;
}
