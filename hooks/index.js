import { useEffect, useRef } from 'react';

export const useEventListener = (eventType, callback, element = window) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
};

export const useClickOutside = (ref, cb, event = 'click') => {
  useEventListener(
    event,
    (e) => {
      if (ref.current == null || ref.current.contains(e.target)) return;
      cb(e);
    },
    typeof window !== 'undefined' ? document : null
  );
};
