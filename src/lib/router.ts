import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'learn' }
  | { name: 'lesson'; id: string }
  | { name: 'review' }
  | { name: 'sound' }
  | { name: 'words' }
  | { name: 'settings' };

export function parseHash(hash: string): Route {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  switch (parts[0]) {
    case 'learn': return { name: 'learn' };
    case 'lesson': return parts[1] ? { name: 'lesson', id: parts[1] } : { name: 'learn' };
    case 'review': return { name: 'review' };
    case 'sound': return { name: 'sound' };
    case 'words': return { name: 'words' };
    case 'settings': return { name: 'settings' };
    default: return { name: 'home' };
  }
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));
  useEffect(() => {
    const on = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}

export const href = {
  home: '#/',
  learn: '#/learn',
  lesson: (id: string) => `#/lesson/${id}`,
  review: '#/review',
  sound: '#/sound',
  words: '#/words',
  settings: '#/settings',
};
