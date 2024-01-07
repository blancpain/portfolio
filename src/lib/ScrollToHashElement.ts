import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// NOTE: custom component to scroll to hash element provided in URL
// inspired by https://ncoughlin.com/posts/react-router-v6-hash-links/

export function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;

    const scrollToHash = () => {
      const targetElement = hash ? document.querySelector(hash) : null;

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'auto',
          block: 'center',
          inline: 'nearest',
        });
      }
    };

    scrollToHash();
  }, [location]);

  return null;
}
