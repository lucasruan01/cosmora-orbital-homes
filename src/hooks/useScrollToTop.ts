import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on PUSH navigation (new page), not on POP (back/forward)
    if (navigationType === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);
};
