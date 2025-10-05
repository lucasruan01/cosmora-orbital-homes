import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Don't scroll on first render or when navigating back/forward
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Only scroll to top on PUSH navigation (new page), not on POP (back/forward)
    if (navigationType === 'PUSH') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname, navigationType]);
};
